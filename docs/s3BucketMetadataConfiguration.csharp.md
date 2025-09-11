# `s3BucketMetadataConfiguration` Submodule <a name="`s3BucketMetadataConfiguration` Submodule" id="@cdktf/provider-aws.s3BucketMetadataConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3BucketMetadataConfiguration <a name="S3BucketMetadataConfiguration" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/s3_bucket_metadata_configuration aws_s3_bucket_metadata_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketMetadataConfiguration(Construct Scope, string Id, S3BucketMetadataConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationConfig">S3BucketMetadataConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationConfig">S3BucketMetadataConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.putMetadataConfiguration">PutMetadataConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.resetExpectedBucketOwner">ResetExpectedBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.resetMetadataConfiguration">ResetMetadataConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMetadataConfiguration` <a name="PutMetadataConfiguration" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.putMetadataConfiguration"></a>

```csharp
private void PutMetadataConfiguration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.putMetadataConfiguration.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.putTimeouts"></a>

```csharp
private void PutTimeouts(S3BucketMetadataConfigurationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeouts">S3BucketMetadataConfigurationTimeouts</a>

---

##### `ResetExpectedBucketOwner` <a name="ResetExpectedBucketOwner" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.resetExpectedBucketOwner"></a>

```csharp
private void ResetExpectedBucketOwner()
```

##### `ResetMetadataConfiguration` <a name="ResetMetadataConfiguration" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.resetMetadataConfiguration"></a>

```csharp
private void ResetMetadataConfiguration()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a S3BucketMetadataConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3BucketMetadataConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3BucketMetadataConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3BucketMetadataConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3BucketMetadataConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a S3BucketMetadataConfiguration resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the S3BucketMetadataConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing S3BucketMetadataConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/s3_bucket_metadata_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the S3BucketMetadataConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.property.metadataConfiguration">MetadataConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationList">S3BucketMetadataConfigurationMetadataConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference">S3BucketMetadataConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.property.expectedBucketOwnerInput">ExpectedBucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.property.metadataConfigurationInput">MetadataConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `MetadataConfiguration`<sup>Required</sup> <a name="MetadataConfiguration" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.property.metadataConfiguration"></a>

```csharp
public S3BucketMetadataConfigurationMetadataConfigurationList MetadataConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationList">S3BucketMetadataConfigurationMetadataConfigurationList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.property.timeouts"></a>

```csharp
public S3BucketMetadataConfigurationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference">S3BucketMetadataConfigurationTimeoutsOutputReference</a>

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `ExpectedBucketOwnerInput`<sup>Optional</sup> <a name="ExpectedBucketOwnerInput" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.property.expectedBucketOwnerInput"></a>

```csharp
public string ExpectedBucketOwnerInput { get; }
```

- *Type:* string

---

##### `MetadataConfigurationInput`<sup>Optional</sup> <a name="MetadataConfigurationInput" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.property.metadataConfigurationInput"></a>

```csharp
public object MetadataConfigurationInput { get; }
```

- *Type:* object

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `ExpectedBucketOwner`<sup>Required</sup> <a name="ExpectedBucketOwner" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.property.expectedBucketOwner"></a>

```csharp
public string ExpectedBucketOwner { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3BucketMetadataConfigurationConfig <a name="S3BucketMetadataConfigurationConfig" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketMetadataConfigurationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Bucket,
    string ExpectedBucketOwner = null,
    object MetadataConfiguration = null,
    string Region = null,
    S3BucketMetadataConfigurationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationConfig.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/s3_bucket_metadata_configuration#bucket S3BucketMetadataConfiguration#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationConfig.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/s3_bucket_metadata_configuration#expected_bucket_owner S3BucketMetadataConfiguration#expected_bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationConfig.property.metadataConfiguration">MetadataConfiguration</a></code> | <code>object</code> | metadata_configuration block. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeouts">S3BucketMetadataConfigurationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/s3_bucket_metadata_configuration#bucket S3BucketMetadataConfiguration#bucket}.

---

##### `ExpectedBucketOwner`<sup>Optional</sup> <a name="ExpectedBucketOwner" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationConfig.property.expectedBucketOwner"></a>

```csharp
public string ExpectedBucketOwner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/s3_bucket_metadata_configuration#expected_bucket_owner S3BucketMetadataConfiguration#expected_bucket_owner}.

---

##### `MetadataConfiguration`<sup>Optional</sup> <a name="MetadataConfiguration" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationConfig.property.metadataConfiguration"></a>

```csharp
public object MetadataConfiguration { get; set; }
```

- *Type:* object

metadata_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/s3_bucket_metadata_configuration#metadata_configuration S3BucketMetadataConfiguration#metadata_configuration}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/s3_bucket_metadata_configuration#region S3BucketMetadataConfiguration#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationConfig.property.timeouts"></a>

```csharp
public S3BucketMetadataConfigurationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeouts">S3BucketMetadataConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/s3_bucket_metadata_configuration#timeouts S3BucketMetadataConfiguration#timeouts}

---

### S3BucketMetadataConfigurationMetadataConfiguration <a name="S3BucketMetadataConfigurationMetadataConfiguration" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketMetadataConfigurationMetadataConfiguration {
    object InventoryTableConfiguration = null,
    object JournalTableConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfiguration.property.inventoryTableConfiguration">InventoryTableConfiguration</a></code> | <code>object</code> | inventory_table_configuration block. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfiguration.property.journalTableConfiguration">JournalTableConfiguration</a></code> | <code>object</code> | journal_table_configuration block. |

---

##### `InventoryTableConfiguration`<sup>Optional</sup> <a name="InventoryTableConfiguration" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfiguration.property.inventoryTableConfiguration"></a>

```csharp
public object InventoryTableConfiguration { get; set; }
```

- *Type:* object

inventory_table_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/s3_bucket_metadata_configuration#inventory_table_configuration S3BucketMetadataConfiguration#inventory_table_configuration}

---

##### `JournalTableConfiguration`<sup>Optional</sup> <a name="JournalTableConfiguration" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfiguration.property.journalTableConfiguration"></a>

```csharp
public object JournalTableConfiguration { get; set; }
```

- *Type:* object

journal_table_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/s3_bucket_metadata_configuration#journal_table_configuration S3BucketMetadataConfiguration#journal_table_configuration}

---

### S3BucketMetadataConfigurationMetadataConfigurationDestination <a name="S3BucketMetadataConfigurationMetadataConfigurationDestination" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestination.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketMetadataConfigurationMetadataConfigurationDestination {

};
```


### S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfiguration <a name="S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfiguration" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfiguration {
    string ConfigurationState,
    object EncryptionConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfiguration.property.configurationState">ConfigurationState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/s3_bucket_metadata_configuration#configuration_state S3BucketMetadataConfiguration#configuration_state}. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfiguration.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code>object</code> | encryption_configuration block. |

---

##### `ConfigurationState`<sup>Required</sup> <a name="ConfigurationState" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfiguration.property.configurationState"></a>

```csharp
public string ConfigurationState { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/s3_bucket_metadata_configuration#configuration_state S3BucketMetadataConfiguration#configuration_state}.

---

##### `EncryptionConfiguration`<sup>Optional</sup> <a name="EncryptionConfiguration" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfiguration.property.encryptionConfiguration"></a>

```csharp
public object EncryptionConfiguration { get; set; }
```

- *Type:* object

encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/s3_bucket_metadata_configuration#encryption_configuration S3BucketMetadataConfiguration#encryption_configuration}

---

### S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfiguration <a name="S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfiguration" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfiguration {
    string SseAlgorithm,
    string KmsKeyArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfiguration.property.sseAlgorithm">SseAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/s3_bucket_metadata_configuration#sse_algorithm S3BucketMetadataConfiguration#sse_algorithm}. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfiguration.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/s3_bucket_metadata_configuration#kms_key_arn S3BucketMetadataConfiguration#kms_key_arn}. |

---

##### `SseAlgorithm`<sup>Required</sup> <a name="SseAlgorithm" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfiguration.property.sseAlgorithm"></a>

```csharp
public string SseAlgorithm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/s3_bucket_metadata_configuration#sse_algorithm S3BucketMetadataConfiguration#sse_algorithm}.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfiguration.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/s3_bucket_metadata_configuration#kms_key_arn S3BucketMetadataConfiguration#kms_key_arn}.

---

### S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfiguration <a name="S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfiguration" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfiguration {
    object EncryptionConfiguration = null,
    object RecordExpiration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfiguration.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code>object</code> | encryption_configuration block. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfiguration.property.recordExpiration">RecordExpiration</a></code> | <code>object</code> | record_expiration block. |

---

##### `EncryptionConfiguration`<sup>Optional</sup> <a name="EncryptionConfiguration" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfiguration.property.encryptionConfiguration"></a>

```csharp
public object EncryptionConfiguration { get; set; }
```

- *Type:* object

encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/s3_bucket_metadata_configuration#encryption_configuration S3BucketMetadataConfiguration#encryption_configuration}

---

##### `RecordExpiration`<sup>Optional</sup> <a name="RecordExpiration" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfiguration.property.recordExpiration"></a>

```csharp
public object RecordExpiration { get; set; }
```

- *Type:* object

record_expiration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/s3_bucket_metadata_configuration#record_expiration S3BucketMetadataConfiguration#record_expiration}

---

### S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfiguration <a name="S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfiguration" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfiguration {
    string SseAlgorithm,
    string KmsKeyArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfiguration.property.sseAlgorithm">SseAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/s3_bucket_metadata_configuration#sse_algorithm S3BucketMetadataConfiguration#sse_algorithm}. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfiguration.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/s3_bucket_metadata_configuration#kms_key_arn S3BucketMetadataConfiguration#kms_key_arn}. |

---

##### `SseAlgorithm`<sup>Required</sup> <a name="SseAlgorithm" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfiguration.property.sseAlgorithm"></a>

```csharp
public string SseAlgorithm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/s3_bucket_metadata_configuration#sse_algorithm S3BucketMetadataConfiguration#sse_algorithm}.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfiguration.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/s3_bucket_metadata_configuration#kms_key_arn S3BucketMetadataConfiguration#kms_key_arn}.

---

### S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpiration <a name="S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpiration" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpiration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpiration {
    string Expiration,
    double Days = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpiration.property.expiration">Expiration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/s3_bucket_metadata_configuration#expiration S3BucketMetadataConfiguration#expiration}. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpiration.property.days">Days</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/s3_bucket_metadata_configuration#days S3BucketMetadataConfiguration#days}. |

---

##### `Expiration`<sup>Required</sup> <a name="Expiration" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpiration.property.expiration"></a>

```csharp
public string Expiration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/s3_bucket_metadata_configuration#expiration S3BucketMetadataConfiguration#expiration}.

---

##### `Days`<sup>Optional</sup> <a name="Days" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpiration.property.days"></a>

```csharp
public double Days { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/s3_bucket_metadata_configuration#days S3BucketMetadataConfiguration#days}.

---

### S3BucketMetadataConfigurationTimeouts <a name="S3BucketMetadataConfigurationTimeouts" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketMetadataConfigurationTimeouts {
    string Create = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/s3_bucket_metadata_configuration#create S3BucketMetadataConfiguration#create}

---

## Classes <a name="Classes" id="Classes"></a>

### S3BucketMetadataConfigurationMetadataConfigurationDestinationList <a name="S3BucketMetadataConfigurationMetadataConfigurationDestinationList" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketMetadataConfigurationMetadataConfigurationDestinationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationList.get"></a>

```csharp
private S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference <a name="S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.property.tableBucketArn">TableBucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.property.tableBucketType">TableBucketType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.property.tableNamespace">TableNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestination">S3BucketMetadataConfigurationMetadataConfigurationDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TableBucketArn`<sup>Required</sup> <a name="TableBucketArn" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.property.tableBucketArn"></a>

```csharp
public string TableBucketArn { get; }
```

- *Type:* string

---

##### `TableBucketType`<sup>Required</sup> <a name="TableBucketType" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.property.tableBucketType"></a>

```csharp
public string TableBucketType { get; }
```

- *Type:* string

---

##### `TableNamespace`<sup>Required</sup> <a name="TableNamespace" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.property.tableNamespace"></a>

```csharp
public string TableNamespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationOutputReference.property.internalValue"></a>

```csharp
public S3BucketMetadataConfigurationMetadataConfigurationDestination InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestination">S3BucketMetadataConfigurationMetadataConfigurationDestination</a>

---


### S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationList <a name="S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationList" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationList.get"></a>

```csharp
private S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference <a name="S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.property.sseAlgorithmInput">SseAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.property.sseAlgorithm">SseAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `SseAlgorithmInput`<sup>Optional</sup> <a name="SseAlgorithmInput" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.property.sseAlgorithmInput"></a>

```csharp
public string SseAlgorithmInput { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `SseAlgorithm`<sup>Required</sup> <a name="SseAlgorithm" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.property.sseAlgorithm"></a>

```csharp
public string SseAlgorithm { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationList <a name="S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationList" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationList.get"></a>

```csharp
private S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference <a name="S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.putEncryptionConfiguration">PutEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.resetEncryptionConfiguration">ResetEncryptionConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryptionConfiguration` <a name="PutEncryptionConfiguration" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.putEncryptionConfiguration"></a>

```csharp
private void PutEncryptionConfiguration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.putEncryptionConfiguration.parameter.value"></a>

- *Type:* object

---

##### `ResetEncryptionConfiguration` <a name="ResetEncryptionConfiguration" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.resetEncryptionConfiguration"></a>

```csharp
private void ResetEncryptionConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationList">S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.property.tableArn">TableArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.property.configurationStateInput">ConfigurationStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.property.encryptionConfigurationInput">EncryptionConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.property.configurationState">ConfigurationState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.property.encryptionConfiguration"></a>

```csharp
public S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationList EncryptionConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationList">S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationEncryptionConfigurationList</a>

---

##### `TableArn`<sup>Required</sup> <a name="TableArn" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.property.tableArn"></a>

```csharp
public string TableArn { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `ConfigurationStateInput`<sup>Optional</sup> <a name="ConfigurationStateInput" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.property.configurationStateInput"></a>

```csharp
public string ConfigurationStateInput { get; }
```

- *Type:* string

---

##### `EncryptionConfigurationInput`<sup>Optional</sup> <a name="EncryptionConfigurationInput" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.property.encryptionConfigurationInput"></a>

```csharp
public object EncryptionConfigurationInput { get; }
```

- *Type:* object

---

##### `ConfigurationState`<sup>Required</sup> <a name="ConfigurationState" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.property.configurationState"></a>

```csharp
public string ConfigurationState { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationList <a name="S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationList" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationList.get"></a>

```csharp
private S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference <a name="S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.property.sseAlgorithmInput">SseAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.property.sseAlgorithm">SseAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `SseAlgorithmInput`<sup>Optional</sup> <a name="SseAlgorithmInput" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.property.sseAlgorithmInput"></a>

```csharp
public string SseAlgorithmInput { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `SseAlgorithm`<sup>Required</sup> <a name="SseAlgorithm" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.property.sseAlgorithm"></a>

```csharp
public string SseAlgorithm { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationList <a name="S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationList" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationList.get"></a>

```csharp
private S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference <a name="S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.putEncryptionConfiguration">PutEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.putRecordExpiration">PutRecordExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.resetEncryptionConfiguration">ResetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.resetRecordExpiration">ResetRecordExpiration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryptionConfiguration` <a name="PutEncryptionConfiguration" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.putEncryptionConfiguration"></a>

```csharp
private void PutEncryptionConfiguration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.putEncryptionConfiguration.parameter.value"></a>

- *Type:* object

---

##### `PutRecordExpiration` <a name="PutRecordExpiration" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.putRecordExpiration"></a>

```csharp
private void PutRecordExpiration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.putRecordExpiration.parameter.value"></a>

- *Type:* object

---

##### `ResetEncryptionConfiguration` <a name="ResetEncryptionConfiguration" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.resetEncryptionConfiguration"></a>

```csharp
private void ResetEncryptionConfiguration()
```

##### `ResetRecordExpiration` <a name="ResetRecordExpiration" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.resetRecordExpiration"></a>

```csharp
private void ResetRecordExpiration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationList">S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.property.recordExpiration">RecordExpiration</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationList">S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.property.tableArn">TableArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.property.encryptionConfigurationInput">EncryptionConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.property.recordExpirationInput">RecordExpirationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.property.encryptionConfiguration"></a>

```csharp
public S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationList EncryptionConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationList">S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationEncryptionConfigurationList</a>

---

##### `RecordExpiration`<sup>Required</sup> <a name="RecordExpiration" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.property.recordExpiration"></a>

```csharp
public S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationList RecordExpiration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationList">S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationList</a>

---

##### `TableArn`<sup>Required</sup> <a name="TableArn" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.property.tableArn"></a>

```csharp
public string TableArn { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `EncryptionConfigurationInput`<sup>Optional</sup> <a name="EncryptionConfigurationInput" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.property.encryptionConfigurationInput"></a>

```csharp
public object EncryptionConfigurationInput { get; }
```

- *Type:* object

---

##### `RecordExpirationInput`<sup>Optional</sup> <a name="RecordExpirationInput" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.property.recordExpirationInput"></a>

```csharp
public object RecordExpirationInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationList <a name="S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationList" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationList.get"></a>

```csharp
private S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference <a name="S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.resetDays">ResetDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDays` <a name="ResetDays" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.resetDays"></a>

```csharp
private void ResetDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.property.daysInput">DaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.property.expirationInput">ExpirationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.property.days">Days</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.property.expiration">Expiration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysInput`<sup>Optional</sup> <a name="DaysInput" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.property.daysInput"></a>

```csharp
public double DaysInput { get; }
```

- *Type:* double

---

##### `ExpirationInput`<sup>Optional</sup> <a name="ExpirationInput" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.property.expirationInput"></a>

```csharp
public string ExpirationInput { get; }
```

- *Type:* string

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.property.days"></a>

```csharp
public double Days { get; }
```

- *Type:* double

---

##### `Expiration`<sup>Required</sup> <a name="Expiration" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.property.expiration"></a>

```csharp
public string Expiration { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationRecordExpirationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### S3BucketMetadataConfigurationMetadataConfigurationList <a name="S3BucketMetadataConfigurationMetadataConfigurationList" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketMetadataConfigurationMetadataConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationList.get"></a>

```csharp
private S3BucketMetadataConfigurationMetadataConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### S3BucketMetadataConfigurationMetadataConfigurationOutputReference <a name="S3BucketMetadataConfigurationMetadataConfigurationOutputReference" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketMetadataConfigurationMetadataConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.putInventoryTableConfiguration">PutInventoryTableConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.putJournalTableConfiguration">PutJournalTableConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.resetInventoryTableConfiguration">ResetInventoryTableConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.resetJournalTableConfiguration">ResetJournalTableConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInventoryTableConfiguration` <a name="PutInventoryTableConfiguration" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.putInventoryTableConfiguration"></a>

```csharp
private void PutInventoryTableConfiguration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.putInventoryTableConfiguration.parameter.value"></a>

- *Type:* object

---

##### `PutJournalTableConfiguration` <a name="PutJournalTableConfiguration" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.putJournalTableConfiguration"></a>

```csharp
private void PutJournalTableConfiguration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.putJournalTableConfiguration.parameter.value"></a>

- *Type:* object

---

##### `ResetInventoryTableConfiguration` <a name="ResetInventoryTableConfiguration" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.resetInventoryTableConfiguration"></a>

```csharp
private void ResetInventoryTableConfiguration()
```

##### `ResetJournalTableConfiguration` <a name="ResetJournalTableConfiguration" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.resetJournalTableConfiguration"></a>

```csharp
private void ResetJournalTableConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.property.destination">Destination</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationList">S3BucketMetadataConfigurationMetadataConfigurationDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.property.inventoryTableConfiguration">InventoryTableConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationList">S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.property.journalTableConfiguration">JournalTableConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationList">S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.property.inventoryTableConfigurationInput">InventoryTableConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.property.journalTableConfigurationInput">JournalTableConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.property.destination"></a>

```csharp
public S3BucketMetadataConfigurationMetadataConfigurationDestinationList Destination { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationDestinationList">S3BucketMetadataConfigurationMetadataConfigurationDestinationList</a>

---

##### `InventoryTableConfiguration`<sup>Required</sup> <a name="InventoryTableConfiguration" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.property.inventoryTableConfiguration"></a>

```csharp
public S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationList InventoryTableConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationList">S3BucketMetadataConfigurationMetadataConfigurationInventoryTableConfigurationList</a>

---

##### `JournalTableConfiguration`<sup>Required</sup> <a name="JournalTableConfiguration" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.property.journalTableConfiguration"></a>

```csharp
public S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationList JournalTableConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationList">S3BucketMetadataConfigurationMetadataConfigurationJournalTableConfigurationList</a>

---

##### `InventoryTableConfigurationInput`<sup>Optional</sup> <a name="InventoryTableConfigurationInput" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.property.inventoryTableConfigurationInput"></a>

```csharp
public object InventoryTableConfigurationInput { get; }
```

- *Type:* object

---

##### `JournalTableConfigurationInput`<sup>Optional</sup> <a name="JournalTableConfigurationInput" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.property.journalTableConfigurationInput"></a>

```csharp
public object JournalTableConfigurationInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationMetadataConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### S3BucketMetadataConfigurationTimeoutsOutputReference <a name="S3BucketMetadataConfigurationTimeoutsOutputReference" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketMetadataConfigurationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketMetadataConfiguration.S3BucketMetadataConfigurationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



