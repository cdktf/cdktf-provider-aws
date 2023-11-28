# `s3BucketLogging` Submodule <a name="`s3BucketLogging` Submodule" id="@cdktf/provider-aws.s3BucketLogging"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3BucketLoggingA <a name="S3BucketLoggingA" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/s3_bucket_logging aws_s3_bucket_logging}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketLoggingA(Construct Scope, string Id, S3BucketLoggingAConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig">S3BucketLoggingAConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig">S3BucketLoggingAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.putTargetGrant">PutTargetGrant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.putTargetObjectKeyFormat">PutTargetObjectKeyFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.resetExpectedBucketOwner">ResetExpectedBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.resetTargetGrant">ResetTargetGrant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.resetTargetObjectKeyFormat">ResetTargetObjectKeyFormat</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutTargetGrant` <a name="PutTargetGrant" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.putTargetGrant"></a>

```csharp
private void PutTargetGrant(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.putTargetGrant.parameter.value"></a>

- *Type:* object

---

##### `PutTargetObjectKeyFormat` <a name="PutTargetObjectKeyFormat" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.putTargetObjectKeyFormat"></a>

```csharp
private void PutTargetObjectKeyFormat(S3BucketLoggingTargetObjectKeyFormat Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.putTargetObjectKeyFormat.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat">S3BucketLoggingTargetObjectKeyFormat</a>

---

##### `ResetExpectedBucketOwner` <a name="ResetExpectedBucketOwner" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.resetExpectedBucketOwner"></a>

```csharp
private void ResetExpectedBucketOwner()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTargetGrant` <a name="ResetTargetGrant" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.resetTargetGrant"></a>

```csharp
private void ResetTargetGrant()
```

##### `ResetTargetObjectKeyFormat` <a name="ResetTargetObjectKeyFormat" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.resetTargetObjectKeyFormat"></a>

```csharp
private void ResetTargetObjectKeyFormat()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a S3BucketLoggingA resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3BucketLoggingA.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3BucketLoggingA.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3BucketLoggingA.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3BucketLoggingA.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a S3BucketLoggingA resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the S3BucketLoggingA to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing S3BucketLoggingA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/s3_bucket_logging#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the S3BucketLoggingA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetGrant">TargetGrant</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList">S3BucketLoggingTargetGrantList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetObjectKeyFormat">TargetObjectKeyFormat</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference">S3BucketLoggingTargetObjectKeyFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.expectedBucketOwnerInput">ExpectedBucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetBucketInput">TargetBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetGrantInput">TargetGrantInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetObjectKeyFormatInput">TargetObjectKeyFormatInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat">S3BucketLoggingTargetObjectKeyFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetPrefixInput">TargetPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetBucket">TargetBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetPrefix">TargetPrefix</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `TargetGrant`<sup>Required</sup> <a name="TargetGrant" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetGrant"></a>

```csharp
public S3BucketLoggingTargetGrantList TargetGrant { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList">S3BucketLoggingTargetGrantList</a>

---

##### `TargetObjectKeyFormat`<sup>Required</sup> <a name="TargetObjectKeyFormat" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetObjectKeyFormat"></a>

```csharp
public S3BucketLoggingTargetObjectKeyFormatOutputReference TargetObjectKeyFormat { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference">S3BucketLoggingTargetObjectKeyFormatOutputReference</a>

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `ExpectedBucketOwnerInput`<sup>Optional</sup> <a name="ExpectedBucketOwnerInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.expectedBucketOwnerInput"></a>

```csharp
public string ExpectedBucketOwnerInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TargetBucketInput`<sup>Optional</sup> <a name="TargetBucketInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetBucketInput"></a>

```csharp
public string TargetBucketInput { get; }
```

- *Type:* string

---

##### `TargetGrantInput`<sup>Optional</sup> <a name="TargetGrantInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetGrantInput"></a>

```csharp
public object TargetGrantInput { get; }
```

- *Type:* object

---

##### `TargetObjectKeyFormatInput`<sup>Optional</sup> <a name="TargetObjectKeyFormatInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetObjectKeyFormatInput"></a>

```csharp
public S3BucketLoggingTargetObjectKeyFormat TargetObjectKeyFormatInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat">S3BucketLoggingTargetObjectKeyFormat</a>

---

##### `TargetPrefixInput`<sup>Optional</sup> <a name="TargetPrefixInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetPrefixInput"></a>

```csharp
public string TargetPrefixInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `ExpectedBucketOwner`<sup>Required</sup> <a name="ExpectedBucketOwner" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.expectedBucketOwner"></a>

```csharp
public string ExpectedBucketOwner { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TargetBucket`<sup>Required</sup> <a name="TargetBucket" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetBucket"></a>

```csharp
public string TargetBucket { get; }
```

- *Type:* string

---

##### `TargetPrefix`<sup>Required</sup> <a name="TargetPrefix" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.targetPrefix"></a>

```csharp
public string TargetPrefix { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingA.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3BucketLoggingAConfig <a name="S3BucketLoggingAConfig" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketLoggingAConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Bucket,
    string TargetBucket,
    string TargetPrefix,
    string ExpectedBucketOwner = null,
    string Id = null,
    object TargetGrant = null,
    S3BucketLoggingTargetObjectKeyFormat TargetObjectKeyFormat = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/s3_bucket_logging#bucket S3BucketLoggingA#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.targetBucket">TargetBucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/s3_bucket_logging#target_bucket S3BucketLoggingA#target_bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.targetPrefix">TargetPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/s3_bucket_logging#target_prefix S3BucketLoggingA#target_prefix}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/s3_bucket_logging#expected_bucket_owner S3BucketLoggingA#expected_bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/s3_bucket_logging#id S3BucketLoggingA#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.targetGrant">TargetGrant</a></code> | <code>object</code> | target_grant block. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.targetObjectKeyFormat">TargetObjectKeyFormat</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat">S3BucketLoggingTargetObjectKeyFormat</a></code> | target_object_key_format block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/s3_bucket_logging#bucket S3BucketLoggingA#bucket}.

---

##### `TargetBucket`<sup>Required</sup> <a name="TargetBucket" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.targetBucket"></a>

```csharp
public string TargetBucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/s3_bucket_logging#target_bucket S3BucketLoggingA#target_bucket}.

---

##### `TargetPrefix`<sup>Required</sup> <a name="TargetPrefix" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.targetPrefix"></a>

```csharp
public string TargetPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/s3_bucket_logging#target_prefix S3BucketLoggingA#target_prefix}.

---

##### `ExpectedBucketOwner`<sup>Optional</sup> <a name="ExpectedBucketOwner" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.expectedBucketOwner"></a>

```csharp
public string ExpectedBucketOwner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/s3_bucket_logging#expected_bucket_owner S3BucketLoggingA#expected_bucket_owner}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/s3_bucket_logging#id S3BucketLoggingA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TargetGrant`<sup>Optional</sup> <a name="TargetGrant" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.targetGrant"></a>

```csharp
public object TargetGrant { get; set; }
```

- *Type:* object

target_grant block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/s3_bucket_logging#target_grant S3BucketLoggingA#target_grant}

---

##### `TargetObjectKeyFormat`<sup>Optional</sup> <a name="TargetObjectKeyFormat" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingAConfig.property.targetObjectKeyFormat"></a>

```csharp
public S3BucketLoggingTargetObjectKeyFormat TargetObjectKeyFormat { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat">S3BucketLoggingTargetObjectKeyFormat</a>

target_object_key_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/s3_bucket_logging#target_object_key_format S3BucketLoggingA#target_object_key_format}

---

### S3BucketLoggingTargetGrant <a name="S3BucketLoggingTargetGrant" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrant"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrant.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketLoggingTargetGrant {
    S3BucketLoggingTargetGrantGrantee Grantee,
    string Permission
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrant.property.grantee">Grantee</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee">S3BucketLoggingTargetGrantGrantee</a></code> | grantee block. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrant.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/s3_bucket_logging#permission S3BucketLoggingA#permission}. |

---

##### `Grantee`<sup>Required</sup> <a name="Grantee" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrant.property.grantee"></a>

```csharp
public S3BucketLoggingTargetGrantGrantee Grantee { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee">S3BucketLoggingTargetGrantGrantee</a>

grantee block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/s3_bucket_logging#grantee S3BucketLoggingA#grantee}

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrant.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/s3_bucket_logging#permission S3BucketLoggingA#permission}.

---

### S3BucketLoggingTargetGrantGrantee <a name="S3BucketLoggingTargetGrantGrantee" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketLoggingTargetGrantGrantee {
    string Type,
    string EmailAddress = null,
    string Id = null,
    string Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/s3_bucket_logging#type S3BucketLoggingA#type}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee.property.emailAddress">EmailAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/s3_bucket_logging#email_address S3BucketLoggingA#email_address}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/s3_bucket_logging#id S3BucketLoggingA#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee.property.uri">Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/s3_bucket_logging#uri S3BucketLoggingA#uri}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/s3_bucket_logging#type S3BucketLoggingA#type}.

---

##### `EmailAddress`<sup>Optional</sup> <a name="EmailAddress" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee.property.emailAddress"></a>

```csharp
public string EmailAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/s3_bucket_logging#email_address S3BucketLoggingA#email_address}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/s3_bucket_logging#id S3BucketLoggingA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/s3_bucket_logging#uri S3BucketLoggingA#uri}.

---

### S3BucketLoggingTargetObjectKeyFormat <a name="S3BucketLoggingTargetObjectKeyFormat" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketLoggingTargetObjectKeyFormat {
    S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix PartitionedPrefix = null,
    S3BucketLoggingTargetObjectKeyFormatSimplePrefix SimplePrefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat.property.partitionedPrefix">PartitionedPrefix</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix">S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix</a></code> | partitioned_prefix block. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat.property.simplePrefix">SimplePrefix</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefix">S3BucketLoggingTargetObjectKeyFormatSimplePrefix</a></code> | simple_prefix block. |

---

##### `PartitionedPrefix`<sup>Optional</sup> <a name="PartitionedPrefix" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat.property.partitionedPrefix"></a>

```csharp
public S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix PartitionedPrefix { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix">S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix</a>

partitioned_prefix block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/s3_bucket_logging#partitioned_prefix S3BucketLoggingA#partitioned_prefix}

---

##### `SimplePrefix`<sup>Optional</sup> <a name="SimplePrefix" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat.property.simplePrefix"></a>

```csharp
public S3BucketLoggingTargetObjectKeyFormatSimplePrefix SimplePrefix { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefix">S3BucketLoggingTargetObjectKeyFormatSimplePrefix</a>

simple_prefix block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/s3_bucket_logging#simple_prefix S3BucketLoggingA#simple_prefix}

---

### S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix <a name="S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix {
    string PartitionDateSource
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix.property.partitionDateSource">PartitionDateSource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/s3_bucket_logging#partition_date_source S3BucketLoggingA#partition_date_source}. |

---

##### `PartitionDateSource`<sup>Required</sup> <a name="PartitionDateSource" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix.property.partitionDateSource"></a>

```csharp
public string PartitionDateSource { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/s3_bucket_logging#partition_date_source S3BucketLoggingA#partition_date_source}.

---

### S3BucketLoggingTargetObjectKeyFormatSimplePrefix <a name="S3BucketLoggingTargetObjectKeyFormatSimplePrefix" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefix"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefix.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketLoggingTargetObjectKeyFormatSimplePrefix {

};
```


## Classes <a name="Classes" id="Classes"></a>

### S3BucketLoggingTargetGrantGranteeOutputReference <a name="S3BucketLoggingTargetGrantGranteeOutputReference" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketLoggingTargetGrantGranteeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.resetEmailAddress">ResetEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmailAddress` <a name="ResetEmailAddress" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.resetEmailAddress"></a>

```csharp
private void ResetEmailAddress()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetUri` <a name="ResetUri" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.resetUri"></a>

```csharp
private void ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.emailAddressInput">EmailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.emailAddress">EmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee">S3BucketLoggingTargetGrantGrantee</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EmailAddressInput`<sup>Optional</sup> <a name="EmailAddressInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.emailAddressInput"></a>

```csharp
public string EmailAddressInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.emailAddress"></a>

```csharp
public string EmailAddress { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference.property.internalValue"></a>

```csharp
public S3BucketLoggingTargetGrantGrantee InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee">S3BucketLoggingTargetGrantGrantee</a>

---


### S3BucketLoggingTargetGrantList <a name="S3BucketLoggingTargetGrantList" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketLoggingTargetGrantList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.get"></a>

```csharp
private S3BucketLoggingTargetGrantOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### S3BucketLoggingTargetGrantOutputReference <a name="S3BucketLoggingTargetGrantOutputReference" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketLoggingTargetGrantOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.putGrantee">PutGrantee</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGrantee` <a name="PutGrantee" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.putGrantee"></a>

```csharp
private void PutGrantee(S3BucketLoggingTargetGrantGrantee Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.putGrantee.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee">S3BucketLoggingTargetGrantGrantee</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.grantee">Grantee</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference">S3BucketLoggingTargetGrantGranteeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.granteeInput">GranteeInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee">S3BucketLoggingTargetGrantGrantee</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Grantee`<sup>Required</sup> <a name="Grantee" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.grantee"></a>

```csharp
public S3BucketLoggingTargetGrantGranteeOutputReference Grantee { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGranteeOutputReference">S3BucketLoggingTargetGrantGranteeOutputReference</a>

---

##### `GranteeInput`<sup>Optional</sup> <a name="GranteeInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.granteeInput"></a>

```csharp
public S3BucketLoggingTargetGrantGrantee GranteeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantGrantee">S3BucketLoggingTargetGrantGrantee</a>

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetGrantOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### S3BucketLoggingTargetObjectKeyFormatOutputReference <a name="S3BucketLoggingTargetObjectKeyFormatOutputReference" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketLoggingTargetObjectKeyFormatOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.putPartitionedPrefix">PutPartitionedPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.putSimplePrefix">PutSimplePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.resetPartitionedPrefix">ResetPartitionedPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.resetSimplePrefix">ResetSimplePrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPartitionedPrefix` <a name="PutPartitionedPrefix" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.putPartitionedPrefix"></a>

```csharp
private void PutPartitionedPrefix(S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.putPartitionedPrefix.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix">S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix</a>

---

##### `PutSimplePrefix` <a name="PutSimplePrefix" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.putSimplePrefix"></a>

```csharp
private void PutSimplePrefix(S3BucketLoggingTargetObjectKeyFormatSimplePrefix Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.putSimplePrefix.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefix">S3BucketLoggingTargetObjectKeyFormatSimplePrefix</a>

---

##### `ResetPartitionedPrefix` <a name="ResetPartitionedPrefix" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.resetPartitionedPrefix"></a>

```csharp
private void ResetPartitionedPrefix()
```

##### `ResetSimplePrefix` <a name="ResetSimplePrefix" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.resetSimplePrefix"></a>

```csharp
private void ResetSimplePrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.partitionedPrefix">PartitionedPrefix</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference">S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.simplePrefix">SimplePrefix</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference">S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.partitionedPrefixInput">PartitionedPrefixInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix">S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.simplePrefixInput">SimplePrefixInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefix">S3BucketLoggingTargetObjectKeyFormatSimplePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat">S3BucketLoggingTargetObjectKeyFormat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PartitionedPrefix`<sup>Required</sup> <a name="PartitionedPrefix" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.partitionedPrefix"></a>

```csharp
public S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference PartitionedPrefix { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference">S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference</a>

---

##### `SimplePrefix`<sup>Required</sup> <a name="SimplePrefix" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.simplePrefix"></a>

```csharp
public S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference SimplePrefix { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference">S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference</a>

---

##### `PartitionedPrefixInput`<sup>Optional</sup> <a name="PartitionedPrefixInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.partitionedPrefixInput"></a>

```csharp
public S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix PartitionedPrefixInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix">S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix</a>

---

##### `SimplePrefixInput`<sup>Optional</sup> <a name="SimplePrefixInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.simplePrefixInput"></a>

```csharp
public S3BucketLoggingTargetObjectKeyFormatSimplePrefix SimplePrefixInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefix">S3BucketLoggingTargetObjectKeyFormatSimplePrefix</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatOutputReference.property.internalValue"></a>

```csharp
public S3BucketLoggingTargetObjectKeyFormat InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormat">S3BucketLoggingTargetObjectKeyFormat</a>

---


### S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference <a name="S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.property.partitionDateSourceInput">PartitionDateSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.property.partitionDateSource">PartitionDateSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix">S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PartitionDateSourceInput`<sup>Optional</sup> <a name="PartitionDateSourceInput" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.property.partitionDateSourceInput"></a>

```csharp
public string PartitionDateSourceInput { get; }
```

- *Type:* string

---

##### `PartitionDateSource`<sup>Required</sup> <a name="PartitionDateSource" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.property.partitionDateSource"></a>

```csharp
public string PartitionDateSource { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefixOutputReference.property.internalValue"></a>

```csharp
public S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix">S3BucketLoggingTargetObjectKeyFormatPartitionedPrefix</a>

---


### S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference <a name="S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefix">S3BucketLoggingTargetObjectKeyFormatSimplePrefix</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefixOutputReference.property.internalValue"></a>

```csharp
public S3BucketLoggingTargetObjectKeyFormatSimplePrefix InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketLogging.S3BucketLoggingTargetObjectKeyFormatSimplePrefix">S3BucketLoggingTargetObjectKeyFormatSimplePrefix</a>

---



