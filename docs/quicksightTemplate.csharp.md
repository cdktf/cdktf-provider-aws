# `quicksightTemplate` Submodule <a name="`quicksightTemplate` Submodule" id="@cdktf/provider-aws.quicksightTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightTemplate <a name="QuicksightTemplate" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/quicksight_template aws_quicksight_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightTemplate(Construct Scope, string Id, QuicksightTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig">QuicksightTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig">QuicksightTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.putPermissions">PutPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.putSourceEntity">PutSourceEntity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.resetAwsAccountId">ResetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.resetDefinition">ResetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.resetPermissions">ResetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.resetSourceEntity">ResetSourceEntity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPermissions` <a name="PutPermissions" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.putPermissions"></a>

```csharp
private void PutPermissions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.putPermissions.parameter.value"></a>

- *Type:* object

---

##### `PutSourceEntity` <a name="PutSourceEntity" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.putSourceEntity"></a>

```csharp
private void PutSourceEntity(QuicksightTemplateSourceEntity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.putSourceEntity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntity">QuicksightTemplateSourceEntity</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.putTimeouts"></a>

```csharp
private void PutTimeouts(QuicksightTemplateTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeouts">QuicksightTemplateTimeouts</a>

---

##### `ResetAwsAccountId` <a name="ResetAwsAccountId" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.resetAwsAccountId"></a>

```csharp
private void ResetAwsAccountId()
```

##### `ResetDefinition` <a name="ResetDefinition" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.resetDefinition"></a>

```csharp
private void ResetDefinition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.resetPermissions"></a>

```csharp
private void ResetPermissions()
```

##### `ResetSourceEntity` <a name="ResetSourceEntity" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.resetSourceEntity"></a>

```csharp
private void ResetSourceEntity()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a QuicksightTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

QuicksightTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

QuicksightTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

QuicksightTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

QuicksightTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a QuicksightTemplate resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the QuicksightTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing QuicksightTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/quicksight_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the QuicksightTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.createdTime">CreatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.definitionInput">DefinitionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.permissions">Permissions</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList">QuicksightTemplatePermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.sourceEntity">SourceEntity</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference">QuicksightTemplateSourceEntityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.sourceEntityArn">SourceEntityArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference">QuicksightTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.versionNumber">VersionNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.permissionsInput">PermissionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.sourceEntityInput">SourceEntityInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntity">QuicksightTemplateSourceEntity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.templateIdInput">TemplateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.versionDescriptionInput">VersionDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.definition">Definition</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.templateId">TemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.versionDescription">VersionDescription</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.createdTime"></a>

```csharp
public string CreatedTime { get; }
```

- *Type:* string

---

##### `DefinitionInput`<sup>Required</sup> <a name="DefinitionInput" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.definitionInput"></a>

```csharp
public object DefinitionInput { get; }
```

- *Type:* object

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.lastUpdatedTime"></a>

```csharp
public string LastUpdatedTime { get; }
```

- *Type:* string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.permissions"></a>

```csharp
public QuicksightTemplatePermissionsList Permissions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList">QuicksightTemplatePermissionsList</a>

---

##### `SourceEntity`<sup>Required</sup> <a name="SourceEntity" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.sourceEntity"></a>

```csharp
public QuicksightTemplateSourceEntityOutputReference SourceEntity { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference">QuicksightTemplateSourceEntityOutputReference</a>

---

##### `SourceEntityArn`<sup>Required</sup> <a name="SourceEntityArn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.sourceEntityArn"></a>

```csharp
public string SourceEntityArn { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.timeouts"></a>

```csharp
public QuicksightTemplateTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference">QuicksightTemplateTimeoutsOutputReference</a>

---

##### `VersionNumber`<sup>Required</sup> <a name="VersionNumber" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.versionNumber"></a>

```csharp
public double VersionNumber { get; }
```

- *Type:* double

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.awsAccountIdInput"></a>

```csharp
public string AwsAccountIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.permissionsInput"></a>

```csharp
public object PermissionsInput { get; }
```

- *Type:* object

---

##### `SourceEntityInput`<sup>Optional</sup> <a name="SourceEntityInput" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.sourceEntityInput"></a>

```csharp
public QuicksightTemplateSourceEntity SourceEntityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntity">QuicksightTemplateSourceEntity</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TemplateIdInput`<sup>Optional</sup> <a name="TemplateIdInput" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.templateIdInput"></a>

```csharp
public string TemplateIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VersionDescriptionInput`<sup>Optional</sup> <a name="VersionDescriptionInput" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.versionDescriptionInput"></a>

```csharp
public string VersionDescriptionInput { get; }
```

- *Type:* string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; }
```

- *Type:* string

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.definition"></a>

```csharp
public object Definition { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TemplateId`<sup>Required</sup> <a name="TemplateId" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.templateId"></a>

```csharp
public string TemplateId { get; }
```

- *Type:* string

---

##### `VersionDescription`<sup>Required</sup> <a name="VersionDescription" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.versionDescription"></a>

```csharp
public string VersionDescription { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightTemplateConfig <a name="QuicksightTemplateConfig" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightTemplateConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string TemplateId,
    string VersionDescription,
    string AwsAccountId = null,
    object Definition = null,
    string Id = null,
    object Permissions = null,
    QuicksightTemplateSourceEntity SourceEntity = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    QuicksightTemplateTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/quicksight_template#name QuicksightTemplate#name}. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.templateId">TemplateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/quicksight_template#template_id QuicksightTemplate#template_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.versionDescription">VersionDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/quicksight_template#version_description QuicksightTemplate#version_description}. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/quicksight_template#aws_account_id QuicksightTemplate#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.definition">Definition</a></code> | <code>object</code> | definition block. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/quicksight_template#id QuicksightTemplate#id}. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.permissions">Permissions</a></code> | <code>object</code> | permissions block. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.sourceEntity">SourceEntity</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntity">QuicksightTemplateSourceEntity</a></code> | source_entity block. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/quicksight_template#tags QuicksightTemplate#tags}. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/quicksight_template#tags_all QuicksightTemplate#tags_all}. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeouts">QuicksightTemplateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/quicksight_template#name QuicksightTemplate#name}.

---

##### `TemplateId`<sup>Required</sup> <a name="TemplateId" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.templateId"></a>

```csharp
public string TemplateId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/quicksight_template#template_id QuicksightTemplate#template_id}.

---

##### `VersionDescription`<sup>Required</sup> <a name="VersionDescription" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.versionDescription"></a>

```csharp
public string VersionDescription { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/quicksight_template#version_description QuicksightTemplate#version_description}.

---

##### `AwsAccountId`<sup>Optional</sup> <a name="AwsAccountId" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/quicksight_template#aws_account_id QuicksightTemplate#aws_account_id}.

---

##### `Definition`<sup>Optional</sup> <a name="Definition" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.definition"></a>

```csharp
public object Definition { get; set; }
```

- *Type:* object

definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/quicksight_template#definition QuicksightTemplate#definition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/quicksight_template#id QuicksightTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.permissions"></a>

```csharp
public object Permissions { get; set; }
```

- *Type:* object

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/quicksight_template#permissions QuicksightTemplate#permissions}

---

##### `SourceEntity`<sup>Optional</sup> <a name="SourceEntity" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.sourceEntity"></a>

```csharp
public QuicksightTemplateSourceEntity SourceEntity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntity">QuicksightTemplateSourceEntity</a>

source_entity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/quicksight_template#source_entity QuicksightTemplate#source_entity}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/quicksight_template#tags QuicksightTemplate#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/quicksight_template#tags_all QuicksightTemplate#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateConfig.property.timeouts"></a>

```csharp
public QuicksightTemplateTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeouts">QuicksightTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/quicksight_template#timeouts QuicksightTemplate#timeouts}

---

### QuicksightTemplatePermissions <a name="QuicksightTemplatePermissions" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightTemplatePermissions {
    string[] Actions,
    string Principal
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissions.property.actions">Actions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/quicksight_template#actions QuicksightTemplate#actions}. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissions.property.principal">Principal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/quicksight_template#principal QuicksightTemplate#principal}. |

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissions.property.actions"></a>

```csharp
public string[] Actions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/quicksight_template#actions QuicksightTemplate#actions}.

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissions.property.principal"></a>

```csharp
public string Principal { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/quicksight_template#principal QuicksightTemplate#principal}.

---

### QuicksightTemplateSourceEntity <a name="QuicksightTemplateSourceEntity" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightTemplateSourceEntity {
    QuicksightTemplateSourceEntitySourceAnalysis SourceAnalysis = null,
    QuicksightTemplateSourceEntitySourceTemplate SourceTemplate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntity.property.sourceAnalysis">SourceAnalysis</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysis">QuicksightTemplateSourceEntitySourceAnalysis</a></code> | source_analysis block. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntity.property.sourceTemplate">SourceTemplate</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplate">QuicksightTemplateSourceEntitySourceTemplate</a></code> | source_template block. |

---

##### `SourceAnalysis`<sup>Optional</sup> <a name="SourceAnalysis" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntity.property.sourceAnalysis"></a>

```csharp
public QuicksightTemplateSourceEntitySourceAnalysis SourceAnalysis { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysis">QuicksightTemplateSourceEntitySourceAnalysis</a>

source_analysis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/quicksight_template#source_analysis QuicksightTemplate#source_analysis}

---

##### `SourceTemplate`<sup>Optional</sup> <a name="SourceTemplate" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntity.property.sourceTemplate"></a>

```csharp
public QuicksightTemplateSourceEntitySourceTemplate SourceTemplate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplate">QuicksightTemplateSourceEntitySourceTemplate</a>

source_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/quicksight_template#source_template QuicksightTemplate#source_template}

---

### QuicksightTemplateSourceEntitySourceAnalysis <a name="QuicksightTemplateSourceEntitySourceAnalysis" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysis.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightTemplateSourceEntitySourceAnalysis {
    string Arn,
    object DataSetReferences
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysis.property.arn">Arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/quicksight_template#arn QuicksightTemplate#arn}. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysis.property.dataSetReferences">DataSetReferences</a></code> | <code>object</code> | data_set_references block. |

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysis.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/quicksight_template#arn QuicksightTemplate#arn}.

---

##### `DataSetReferences`<sup>Required</sup> <a name="DataSetReferences" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysis.property.dataSetReferences"></a>

```csharp
public object DataSetReferences { get; set; }
```

- *Type:* object

data_set_references block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/quicksight_template#data_set_references QuicksightTemplate#data_set_references}

---

### QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences <a name="QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences {
    string DataSetArn,
    string DataSetPlaceholder
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences.property.dataSetArn">DataSetArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/quicksight_template#data_set_arn QuicksightTemplate#data_set_arn}. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences.property.dataSetPlaceholder">DataSetPlaceholder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/quicksight_template#data_set_placeholder QuicksightTemplate#data_set_placeholder}. |

---

##### `DataSetArn`<sup>Required</sup> <a name="DataSetArn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences.property.dataSetArn"></a>

```csharp
public string DataSetArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/quicksight_template#data_set_arn QuicksightTemplate#data_set_arn}.

---

##### `DataSetPlaceholder`<sup>Required</sup> <a name="DataSetPlaceholder" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences.property.dataSetPlaceholder"></a>

```csharp
public string DataSetPlaceholder { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/quicksight_template#data_set_placeholder QuicksightTemplate#data_set_placeholder}.

---

### QuicksightTemplateSourceEntitySourceTemplate <a name="QuicksightTemplateSourceEntitySourceTemplate" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightTemplateSourceEntitySourceTemplate {
    string Arn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplate.property.arn">Arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/quicksight_template#arn QuicksightTemplate#arn}. |

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplate.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/quicksight_template#arn QuicksightTemplate#arn}.

---

### QuicksightTemplateTimeouts <a name="QuicksightTemplateTimeouts" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightTemplateTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/quicksight_template#create QuicksightTemplate#create}. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/quicksight_template#delete QuicksightTemplate#delete}. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/quicksight_template#update QuicksightTemplate#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/quicksight_template#create QuicksightTemplate#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/quicksight_template#delete QuicksightTemplate#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/quicksight_template#update QuicksightTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightTemplatePermissionsList <a name="QuicksightTemplatePermissionsList" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightTemplatePermissionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.get"></a>

```csharp
private QuicksightTemplatePermissionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### QuicksightTemplatePermissionsOutputReference <a name="QuicksightTemplatePermissionsOutputReference" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightTemplatePermissionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.property.actionsInput">ActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.property.principalInput">PrincipalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.property.actions">Actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.property.principal">Principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.property.actionsInput"></a>

```csharp
public string[] ActionsInput { get; }
```

- *Type:* string[]

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.property.principalInput"></a>

```csharp
public string PrincipalInput { get; }
```

- *Type:* string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.property.actions"></a>

```csharp
public string[] Actions { get; }
```

- *Type:* string[]

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.property.principal"></a>

```csharp
public string Principal { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### QuicksightTemplateSourceEntityOutputReference <a name="QuicksightTemplateSourceEntityOutputReference" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightTemplateSourceEntityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.putSourceAnalysis">PutSourceAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.putSourceTemplate">PutSourceTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.resetSourceAnalysis">ResetSourceAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.resetSourceTemplate">ResetSourceTemplate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSourceAnalysis` <a name="PutSourceAnalysis" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.putSourceAnalysis"></a>

```csharp
private void PutSourceAnalysis(QuicksightTemplateSourceEntitySourceAnalysis Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.putSourceAnalysis.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysis">QuicksightTemplateSourceEntitySourceAnalysis</a>

---

##### `PutSourceTemplate` <a name="PutSourceTemplate" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.putSourceTemplate"></a>

```csharp
private void PutSourceTemplate(QuicksightTemplateSourceEntitySourceTemplate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.putSourceTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplate">QuicksightTemplateSourceEntitySourceTemplate</a>

---

##### `ResetSourceAnalysis` <a name="ResetSourceAnalysis" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.resetSourceAnalysis"></a>

```csharp
private void ResetSourceAnalysis()
```

##### `ResetSourceTemplate` <a name="ResetSourceTemplate" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.resetSourceTemplate"></a>

```csharp
private void ResetSourceTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.property.sourceAnalysis">SourceAnalysis</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference">QuicksightTemplateSourceEntitySourceAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.property.sourceTemplate">SourceTemplate</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference">QuicksightTemplateSourceEntitySourceTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.property.sourceAnalysisInput">SourceAnalysisInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysis">QuicksightTemplateSourceEntitySourceAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.property.sourceTemplateInput">SourceTemplateInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplate">QuicksightTemplateSourceEntitySourceTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntity">QuicksightTemplateSourceEntity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceAnalysis`<sup>Required</sup> <a name="SourceAnalysis" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.property.sourceAnalysis"></a>

```csharp
public QuicksightTemplateSourceEntitySourceAnalysisOutputReference SourceAnalysis { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference">QuicksightTemplateSourceEntitySourceAnalysisOutputReference</a>

---

##### `SourceTemplate`<sup>Required</sup> <a name="SourceTemplate" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.property.sourceTemplate"></a>

```csharp
public QuicksightTemplateSourceEntitySourceTemplateOutputReference SourceTemplate { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference">QuicksightTemplateSourceEntitySourceTemplateOutputReference</a>

---

##### `SourceAnalysisInput`<sup>Optional</sup> <a name="SourceAnalysisInput" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.property.sourceAnalysisInput"></a>

```csharp
public QuicksightTemplateSourceEntitySourceAnalysis SourceAnalysisInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysis">QuicksightTemplateSourceEntitySourceAnalysis</a>

---

##### `SourceTemplateInput`<sup>Optional</sup> <a name="SourceTemplateInput" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.property.sourceTemplateInput"></a>

```csharp
public QuicksightTemplateSourceEntitySourceTemplate SourceTemplateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplate">QuicksightTemplateSourceEntitySourceTemplate</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.property.internalValue"></a>

```csharp
public QuicksightTemplateSourceEntity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntity">QuicksightTemplateSourceEntity</a>

---


### QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList <a name="QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.get"></a>

```csharp
private QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference <a name="QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.property.dataSetArnInput">DataSetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.property.dataSetPlaceholderInput">DataSetPlaceholderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.property.dataSetArn">DataSetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.property.dataSetPlaceholder">DataSetPlaceholder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataSetArnInput`<sup>Optional</sup> <a name="DataSetArnInput" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.property.dataSetArnInput"></a>

```csharp
public string DataSetArnInput { get; }
```

- *Type:* string

---

##### `DataSetPlaceholderInput`<sup>Optional</sup> <a name="DataSetPlaceholderInput" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.property.dataSetPlaceholderInput"></a>

```csharp
public string DataSetPlaceholderInput { get; }
```

- *Type:* string

---

##### `DataSetArn`<sup>Required</sup> <a name="DataSetArn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.property.dataSetArn"></a>

```csharp
public string DataSetArn { get; }
```

- *Type:* string

---

##### `DataSetPlaceholder`<sup>Required</sup> <a name="DataSetPlaceholder" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.property.dataSetPlaceholder"></a>

```csharp
public string DataSetPlaceholder { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### QuicksightTemplateSourceEntitySourceAnalysisOutputReference <a name="QuicksightTemplateSourceEntitySourceAnalysisOutputReference" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightTemplateSourceEntitySourceAnalysisOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.putDataSetReferences">PutDataSetReferences</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataSetReferences` <a name="PutDataSetReferences" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.putDataSetReferences"></a>

```csharp
private void PutDataSetReferences(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.putDataSetReferences.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.property.dataSetReferences">DataSetReferences</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList">QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.property.dataSetReferencesInput">DataSetReferencesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysis">QuicksightTemplateSourceEntitySourceAnalysis</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataSetReferences`<sup>Required</sup> <a name="DataSetReferences" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.property.dataSetReferences"></a>

```csharp
public QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList DataSetReferences { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList">QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList</a>

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `DataSetReferencesInput`<sup>Optional</sup> <a name="DataSetReferencesInput" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.property.dataSetReferencesInput"></a>

```csharp
public object DataSetReferencesInput { get; }
```

- *Type:* object

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.property.internalValue"></a>

```csharp
public QuicksightTemplateSourceEntitySourceAnalysis InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysis">QuicksightTemplateSourceEntitySourceAnalysis</a>

---


### QuicksightTemplateSourceEntitySourceTemplateOutputReference <a name="QuicksightTemplateSourceEntitySourceTemplateOutputReference" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightTemplateSourceEntitySourceTemplateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplate">QuicksightTemplateSourceEntitySourceTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.property.internalValue"></a>

```csharp
public QuicksightTemplateSourceEntitySourceTemplate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplate">QuicksightTemplateSourceEntitySourceTemplate</a>

---


### QuicksightTemplateTimeoutsOutputReference <a name="QuicksightTemplateTimeoutsOutputReference" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightTemplateTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightTemplate.QuicksightTemplateTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



