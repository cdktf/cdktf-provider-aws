# `s3ControlAccessGrant` Submodule <a name="`s3ControlAccessGrant` Submodule" id="@cdktf/provider-aws.s3ControlAccessGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3ControlAccessGrant <a name="S3ControlAccessGrant" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/s3control_access_grant aws_s3control_access_grant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ControlAccessGrant(Construct Scope, string Id, S3ControlAccessGrantConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig">S3ControlAccessGrantConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig">S3ControlAccessGrantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.putAccessGrantsLocationConfiguration">PutAccessGrantsLocationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.putGrantee">PutGrantee</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.resetAccessGrantsLocationConfiguration">ResetAccessGrantsLocationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.resetGrantee">ResetGrantee</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.resetS3PrefixType">ResetS3PrefixType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessGrantsLocationConfiguration` <a name="PutAccessGrantsLocationConfiguration" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.putAccessGrantsLocationConfiguration"></a>

```csharp
private void PutAccessGrantsLocationConfiguration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.putAccessGrantsLocationConfiguration.parameter.value"></a>

- *Type:* object

---

##### `PutGrantee` <a name="PutGrantee" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.putGrantee"></a>

```csharp
private void PutGrantee(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.putGrantee.parameter.value"></a>

- *Type:* object

---

##### `ResetAccessGrantsLocationConfiguration` <a name="ResetAccessGrantsLocationConfiguration" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.resetAccessGrantsLocationConfiguration"></a>

```csharp
private void ResetAccessGrantsLocationConfiguration()
```

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetGrantee` <a name="ResetGrantee" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.resetGrantee"></a>

```csharp
private void ResetGrantee()
```

##### `ResetS3PrefixType` <a name="ResetS3PrefixType" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.resetS3PrefixType"></a>

```csharp
private void ResetS3PrefixType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a S3ControlAccessGrant resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3ControlAccessGrant.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3ControlAccessGrant.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3ControlAccessGrant.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3ControlAccessGrant.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a S3ControlAccessGrant resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the S3ControlAccessGrant to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing S3ControlAccessGrant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/s3control_access_grant#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the S3ControlAccessGrant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accessGrantArn">AccessGrantArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accessGrantId">AccessGrantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accessGrantsLocationConfiguration">AccessGrantsLocationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList">S3ControlAccessGrantAccessGrantsLocationConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.grantee">Grantee</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList">S3ControlAccessGrantGranteeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.grantScope">GrantScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.tagsAll">TagsAll</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accessGrantsLocationConfigurationInput">AccessGrantsLocationConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accessGrantsLocationIdInput">AccessGrantsLocationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.granteeInput">GranteeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.s3PrefixTypeInput">S3PrefixTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accessGrantsLocationId">AccessGrantsLocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.s3PrefixType">S3PrefixType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccessGrantArn`<sup>Required</sup> <a name="AccessGrantArn" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accessGrantArn"></a>

```csharp
public string AccessGrantArn { get; }
```

- *Type:* string

---

##### `AccessGrantId`<sup>Required</sup> <a name="AccessGrantId" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accessGrantId"></a>

```csharp
public string AccessGrantId { get; }
```

- *Type:* string

---

##### `AccessGrantsLocationConfiguration`<sup>Required</sup> <a name="AccessGrantsLocationConfiguration" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accessGrantsLocationConfiguration"></a>

```csharp
public S3ControlAccessGrantAccessGrantsLocationConfigurationList AccessGrantsLocationConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList">S3ControlAccessGrantAccessGrantsLocationConfigurationList</a>

---

##### `Grantee`<sup>Required</sup> <a name="Grantee" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.grantee"></a>

```csharp
public S3ControlAccessGrantGranteeList Grantee { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList">S3ControlAccessGrantGranteeList</a>

---

##### `GrantScope`<sup>Required</sup> <a name="GrantScope" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.grantScope"></a>

```csharp
public string GrantScope { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `AccessGrantsLocationConfigurationInput`<sup>Optional</sup> <a name="AccessGrantsLocationConfigurationInput" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accessGrantsLocationConfigurationInput"></a>

```csharp
public object AccessGrantsLocationConfigurationInput { get; }
```

- *Type:* object

---

##### `AccessGrantsLocationIdInput`<sup>Optional</sup> <a name="AccessGrantsLocationIdInput" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accessGrantsLocationIdInput"></a>

```csharp
public string AccessGrantsLocationIdInput { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `GranteeInput`<sup>Optional</sup> <a name="GranteeInput" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.granteeInput"></a>

```csharp
public object GranteeInput { get; }
```

- *Type:* object

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `S3PrefixTypeInput`<sup>Optional</sup> <a name="S3PrefixTypeInput" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.s3PrefixTypeInput"></a>

```csharp
public string S3PrefixTypeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AccessGrantsLocationId`<sup>Required</sup> <a name="AccessGrantsLocationId" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accessGrantsLocationId"></a>

```csharp
public string AccessGrantsLocationId { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `S3PrefixType`<sup>Required</sup> <a name="S3PrefixType" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.s3PrefixType"></a>

```csharp
public string S3PrefixType { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3ControlAccessGrantAccessGrantsLocationConfiguration <a name="S3ControlAccessGrantAccessGrantsLocationConfiguration" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ControlAccessGrantAccessGrantsLocationConfiguration {
    string S3SubPrefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfiguration.property.s3SubPrefix">S3SubPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/s3control_access_grant#s3_sub_prefix S3ControlAccessGrant#s3_sub_prefix}. |

---

##### `S3SubPrefix`<sup>Optional</sup> <a name="S3SubPrefix" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfiguration.property.s3SubPrefix"></a>

```csharp
public string S3SubPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/s3control_access_grant#s3_sub_prefix S3ControlAccessGrant#s3_sub_prefix}.

---

### S3ControlAccessGrantConfig <a name="S3ControlAccessGrantConfig" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ControlAccessGrantConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccessGrantsLocationId,
    string Permission,
    object AccessGrantsLocationConfiguration = null,
    string AccountId = null,
    object Grantee = null,
    string S3PrefixType = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.accessGrantsLocationId">AccessGrantsLocationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/s3control_access_grant#access_grants_location_id S3ControlAccessGrant#access_grants_location_id}. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/s3control_access_grant#permission S3ControlAccessGrant#permission}. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.accessGrantsLocationConfiguration">AccessGrantsLocationConfiguration</a></code> | <code>object</code> | access_grants_location_configuration block. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/s3control_access_grant#account_id S3ControlAccessGrant#account_id}. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.grantee">Grantee</a></code> | <code>object</code> | grantee block. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.s3PrefixType">S3PrefixType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/s3control_access_grant#s3_prefix_type S3ControlAccessGrant#s3_prefix_type}. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/s3control_access_grant#tags S3ControlAccessGrant#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccessGrantsLocationId`<sup>Required</sup> <a name="AccessGrantsLocationId" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.accessGrantsLocationId"></a>

```csharp
public string AccessGrantsLocationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/s3control_access_grant#access_grants_location_id S3ControlAccessGrant#access_grants_location_id}.

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/s3control_access_grant#permission S3ControlAccessGrant#permission}.

---

##### `AccessGrantsLocationConfiguration`<sup>Optional</sup> <a name="AccessGrantsLocationConfiguration" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.accessGrantsLocationConfiguration"></a>

```csharp
public object AccessGrantsLocationConfiguration { get; set; }
```

- *Type:* object

access_grants_location_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/s3control_access_grant#access_grants_location_configuration S3ControlAccessGrant#access_grants_location_configuration}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/s3control_access_grant#account_id S3ControlAccessGrant#account_id}.

---

##### `Grantee`<sup>Optional</sup> <a name="Grantee" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.grantee"></a>

```csharp
public object Grantee { get; set; }
```

- *Type:* object

grantee block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/s3control_access_grant#grantee S3ControlAccessGrant#grantee}

---

##### `S3PrefixType`<sup>Optional</sup> <a name="S3PrefixType" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.s3PrefixType"></a>

```csharp
public string S3PrefixType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/s3control_access_grant#s3_prefix_type S3ControlAccessGrant#s3_prefix_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/s3control_access_grant#tags S3ControlAccessGrant#tags}.

---

### S3ControlAccessGrantGrantee <a name="S3ControlAccessGrantGrantee" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGrantee"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGrantee.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ControlAccessGrantGrantee {
    string GranteeIdentifier,
    string GranteeType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGrantee.property.granteeIdentifier">GranteeIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/s3control_access_grant#grantee_identifier S3ControlAccessGrant#grantee_identifier}. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGrantee.property.granteeType">GranteeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/s3control_access_grant#grantee_type S3ControlAccessGrant#grantee_type}. |

---

##### `GranteeIdentifier`<sup>Required</sup> <a name="GranteeIdentifier" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGrantee.property.granteeIdentifier"></a>

```csharp
public string GranteeIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/s3control_access_grant#grantee_identifier S3ControlAccessGrant#grantee_identifier}.

---

##### `GranteeType`<sup>Required</sup> <a name="GranteeType" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGrantee.property.granteeType"></a>

```csharp
public string GranteeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.1/docs/resources/s3control_access_grant#grantee_type S3ControlAccessGrant#grantee_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3ControlAccessGrantAccessGrantsLocationConfigurationList <a name="S3ControlAccessGrantAccessGrantsLocationConfigurationList" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ControlAccessGrantAccessGrantsLocationConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.get"></a>

```csharp
private S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference <a name="S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.resetS3SubPrefix">ResetS3SubPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetS3SubPrefix` <a name="ResetS3SubPrefix" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.resetS3SubPrefix"></a>

```csharp
private void ResetS3SubPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.property.s3SubPrefixInput">S3SubPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.property.s3SubPrefix">S3SubPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3SubPrefixInput`<sup>Optional</sup> <a name="S3SubPrefixInput" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.property.s3SubPrefixInput"></a>

```csharp
public string S3SubPrefixInput { get; }
```

- *Type:* string

---

##### `S3SubPrefix`<sup>Required</sup> <a name="S3SubPrefix" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.property.s3SubPrefix"></a>

```csharp
public string S3SubPrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### S3ControlAccessGrantGranteeList <a name="S3ControlAccessGrantGranteeList" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ControlAccessGrantGranteeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.get"></a>

```csharp
private S3ControlAccessGrantGranteeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### S3ControlAccessGrantGranteeOutputReference <a name="S3ControlAccessGrantGranteeOutputReference" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ControlAccessGrantGranteeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.granteeIdentifierInput">GranteeIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.granteeTypeInput">GranteeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.granteeIdentifier">GranteeIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.granteeType">GranteeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GranteeIdentifierInput`<sup>Optional</sup> <a name="GranteeIdentifierInput" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.granteeIdentifierInput"></a>

```csharp
public string GranteeIdentifierInput { get; }
```

- *Type:* string

---

##### `GranteeTypeInput`<sup>Optional</sup> <a name="GranteeTypeInput" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.granteeTypeInput"></a>

```csharp
public string GranteeTypeInput { get; }
```

- *Type:* string

---

##### `GranteeIdentifier`<sup>Required</sup> <a name="GranteeIdentifier" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.granteeIdentifier"></a>

```csharp
public string GranteeIdentifier { get; }
```

- *Type:* string

---

##### `GranteeType`<sup>Required</sup> <a name="GranteeType" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.granteeType"></a>

```csharp
public string GranteeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



