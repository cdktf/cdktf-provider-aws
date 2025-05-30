# `s3TablesTableBucket` Submodule <a name="`s3TablesTableBucket` Submodule" id="@cdktf/provider-aws.s3TablesTableBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3TablesTableBucket <a name="S3TablesTableBucket" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/s3tables_table_bucket aws_s3tables_table_bucket}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3TablesTableBucket(Construct Scope, string Id, S3TablesTableBucketConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketConfig">S3TablesTableBucketConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketConfig">S3TablesTableBucketConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.putEncryptionConfiguration">PutEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.putMaintenanceConfiguration">PutMaintenanceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.resetEncryptionConfiguration">ResetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.resetMaintenanceConfiguration">ResetMaintenanceConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionConfiguration` <a name="PutEncryptionConfiguration" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.putEncryptionConfiguration"></a>

```csharp
private void PutEncryptionConfiguration(S3TablesTableBucketEncryptionConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration">S3TablesTableBucketEncryptionConfiguration</a>

---

##### `PutMaintenanceConfiguration` <a name="PutMaintenanceConfiguration" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.putMaintenanceConfiguration"></a>

```csharp
private void PutMaintenanceConfiguration(S3TablesTableBucketMaintenanceConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.putMaintenanceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfiguration">S3TablesTableBucketMaintenanceConfiguration</a>

---

##### `ResetEncryptionConfiguration` <a name="ResetEncryptionConfiguration" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.resetEncryptionConfiguration"></a>

```csharp
private void ResetEncryptionConfiguration()
```

##### `ResetMaintenanceConfiguration` <a name="ResetMaintenanceConfiguration" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.resetMaintenanceConfiguration"></a>

```csharp
private void ResetMaintenanceConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a S3TablesTableBucket resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3TablesTableBucket.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3TablesTableBucket.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3TablesTableBucket.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3TablesTableBucket.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a S3TablesTableBucket resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the S3TablesTableBucket to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing S3TablesTableBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/s3tables_table_bucket#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the S3TablesTableBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference">S3TablesTableBucketEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.maintenanceConfiguration">MaintenanceConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference">S3TablesTableBucketMaintenanceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.ownerAccountId">OwnerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.encryptionConfigurationInput">EncryptionConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.maintenanceConfigurationInput">MaintenanceConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.encryptionConfiguration"></a>

```csharp
public S3TablesTableBucketEncryptionConfigurationOutputReference EncryptionConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference">S3TablesTableBucketEncryptionConfigurationOutputReference</a>

---

##### `MaintenanceConfiguration`<sup>Required</sup> <a name="MaintenanceConfiguration" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.maintenanceConfiguration"></a>

```csharp
public S3TablesTableBucketMaintenanceConfigurationOutputReference MaintenanceConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference">S3TablesTableBucketMaintenanceConfigurationOutputReference</a>

---

##### `OwnerAccountId`<sup>Required</sup> <a name="OwnerAccountId" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.ownerAccountId"></a>

```csharp
public string OwnerAccountId { get; }
```

- *Type:* string

---

##### `EncryptionConfigurationInput`<sup>Optional</sup> <a name="EncryptionConfigurationInput" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.encryptionConfigurationInput"></a>

```csharp
public object EncryptionConfigurationInput { get; }
```

- *Type:* object

---

##### `MaintenanceConfigurationInput`<sup>Optional</sup> <a name="MaintenanceConfigurationInput" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.maintenanceConfigurationInput"></a>

```csharp
public object MaintenanceConfigurationInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucket.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3TablesTableBucketConfig <a name="S3TablesTableBucketConfig" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3TablesTableBucketConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    S3TablesTableBucketEncryptionConfiguration EncryptionConfiguration = null,
    S3TablesTableBucketMaintenanceConfiguration MaintenanceConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/s3tables_table_bucket#name S3TablesTableBucket#name}. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketConfig.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration">S3TablesTableBucketEncryptionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/s3tables_table_bucket#encryption_configuration S3TablesTableBucket#encryption_configuration}. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketConfig.property.maintenanceConfiguration">MaintenanceConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfiguration">S3TablesTableBucketMaintenanceConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/s3tables_table_bucket#maintenance_configuration S3TablesTableBucket#maintenance_configuration}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/s3tables_table_bucket#name S3TablesTableBucket#name}.

---

##### `EncryptionConfiguration`<sup>Optional</sup> <a name="EncryptionConfiguration" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketConfig.property.encryptionConfiguration"></a>

```csharp
public S3TablesTableBucketEncryptionConfiguration EncryptionConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration">S3TablesTableBucketEncryptionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/s3tables_table_bucket#encryption_configuration S3TablesTableBucket#encryption_configuration}.

---

##### `MaintenanceConfiguration`<sup>Optional</sup> <a name="MaintenanceConfiguration" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketConfig.property.maintenanceConfiguration"></a>

```csharp
public S3TablesTableBucketMaintenanceConfiguration MaintenanceConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfiguration">S3TablesTableBucketMaintenanceConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/s3tables_table_bucket#maintenance_configuration S3TablesTableBucket#maintenance_configuration}.

---

### S3TablesTableBucketEncryptionConfiguration <a name="S3TablesTableBucketEncryptionConfiguration" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3TablesTableBucketEncryptionConfiguration {
    string KmsKeyArn = null,
    string SseAlgorithm = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/s3tables_table_bucket#kms_key_arn S3TablesTableBucket#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration.property.sseAlgorithm">SseAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/s3tables_table_bucket#sse_algorithm S3TablesTableBucket#sse_algorithm}. |

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/s3tables_table_bucket#kms_key_arn S3TablesTableBucket#kms_key_arn}.

---

##### `SseAlgorithm`<sup>Optional</sup> <a name="SseAlgorithm" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfiguration.property.sseAlgorithm"></a>

```csharp
public string SseAlgorithm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/s3tables_table_bucket#sse_algorithm S3TablesTableBucket#sse_algorithm}.

---

### S3TablesTableBucketMaintenanceConfiguration <a name="S3TablesTableBucketMaintenanceConfiguration" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3TablesTableBucketMaintenanceConfiguration {
    S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval IcebergUnreferencedFileRemoval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfiguration.property.icebergUnreferencedFileRemoval">IcebergUnreferencedFileRemoval</a></code> | <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval">S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/s3tables_table_bucket#iceberg_unreferenced_file_removal S3TablesTableBucket#iceberg_unreferenced_file_removal}. |

---

##### `IcebergUnreferencedFileRemoval`<sup>Optional</sup> <a name="IcebergUnreferencedFileRemoval" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfiguration.property.icebergUnreferencedFileRemoval"></a>

```csharp
public S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval IcebergUnreferencedFileRemoval { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval">S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/s3tables_table_bucket#iceberg_unreferenced_file_removal S3TablesTableBucket#iceberg_unreferenced_file_removal}.

---

### S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval <a name="S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval {
    S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings Settings = null,
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval.property.settings">Settings</a></code> | <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings">S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/s3tables_table_bucket#settings S3TablesTableBucket#settings}. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/s3tables_table_bucket#status S3TablesTableBucket#status}. |

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval.property.settings"></a>

```csharp
public S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings Settings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings">S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/s3tables_table_bucket#settings S3TablesTableBucket#settings}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/s3tables_table_bucket#status S3TablesTableBucket#status}.

---

### S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings <a name="S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings {
    double NonCurrentDays = null,
    double UnreferencedDays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings.property.nonCurrentDays">NonCurrentDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/s3tables_table_bucket#non_current_days S3TablesTableBucket#non_current_days}. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings.property.unreferencedDays">UnreferencedDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/s3tables_table_bucket#unreferenced_days S3TablesTableBucket#unreferenced_days}. |

---

##### `NonCurrentDays`<sup>Optional</sup> <a name="NonCurrentDays" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings.property.nonCurrentDays"></a>

```csharp
public double NonCurrentDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/s3tables_table_bucket#non_current_days S3TablesTableBucket#non_current_days}.

---

##### `UnreferencedDays`<sup>Optional</sup> <a name="UnreferencedDays" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings.property.unreferencedDays"></a>

```csharp
public double UnreferencedDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/s3tables_table_bucket#unreferenced_days S3TablesTableBucket#unreferenced_days}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3TablesTableBucketEncryptionConfigurationOutputReference <a name="S3TablesTableBucketEncryptionConfigurationOutputReference" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3TablesTableBucketEncryptionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.resetSseAlgorithm">ResetSseAlgorithm</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```

##### `ResetSseAlgorithm` <a name="ResetSseAlgorithm" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.resetSseAlgorithm"></a>

```csharp
private void ResetSseAlgorithm()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.sseAlgorithmInput">SseAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.sseAlgorithm">SseAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `SseAlgorithmInput`<sup>Optional</sup> <a name="SseAlgorithmInput" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.sseAlgorithmInput"></a>

```csharp
public string SseAlgorithmInput { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `SseAlgorithm`<sup>Required</sup> <a name="SseAlgorithm" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.sseAlgorithm"></a>

```csharp
public string SseAlgorithm { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketEncryptionConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference <a name="S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.putSettings">PutSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.resetSettings">ResetSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSettings` <a name="PutSettings" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.putSettings"></a>

```csharp
private void PutSettings(S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings">S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettings</a>

---

##### `ResetSettings` <a name="ResetSettings" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.resetSettings"></a>

```csharp
private void ResetSettings()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.resetStatus"></a>

```csharp
private void ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.property.settings">Settings</a></code> | <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference">S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.property.settingsInput">SettingsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.property.settings"></a>

```csharp
public S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference Settings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference">S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference</a>

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.property.settingsInput"></a>

```csharp
public object SettingsInput { get; }
```

- *Type:* object

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference <a name="S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.resetNonCurrentDays">ResetNonCurrentDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.resetUnreferencedDays">ResetUnreferencedDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNonCurrentDays` <a name="ResetNonCurrentDays" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.resetNonCurrentDays"></a>

```csharp
private void ResetNonCurrentDays()
```

##### `ResetUnreferencedDays` <a name="ResetUnreferencedDays" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.resetUnreferencedDays"></a>

```csharp
private void ResetUnreferencedDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.property.nonCurrentDaysInput">NonCurrentDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.property.unreferencedDaysInput">UnreferencedDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.property.nonCurrentDays">NonCurrentDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.property.unreferencedDays">UnreferencedDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NonCurrentDaysInput`<sup>Optional</sup> <a name="NonCurrentDaysInput" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.property.nonCurrentDaysInput"></a>

```csharp
public double NonCurrentDaysInput { get; }
```

- *Type:* double

---

##### `UnreferencedDaysInput`<sup>Optional</sup> <a name="UnreferencedDaysInput" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.property.unreferencedDaysInput"></a>

```csharp
public double UnreferencedDaysInput { get; }
```

- *Type:* double

---

##### `NonCurrentDays`<sup>Required</sup> <a name="NonCurrentDays" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.property.nonCurrentDays"></a>

```csharp
public double NonCurrentDays { get; }
```

- *Type:* double

---

##### `UnreferencedDays`<sup>Required</sup> <a name="UnreferencedDays" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.property.unreferencedDays"></a>

```csharp
public double UnreferencedDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalSettingsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### S3TablesTableBucketMaintenanceConfigurationOutputReference <a name="S3TablesTableBucketMaintenanceConfigurationOutputReference" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3TablesTableBucketMaintenanceConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.putIcebergUnreferencedFileRemoval">PutIcebergUnreferencedFileRemoval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.resetIcebergUnreferencedFileRemoval">ResetIcebergUnreferencedFileRemoval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIcebergUnreferencedFileRemoval` <a name="PutIcebergUnreferencedFileRemoval" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.putIcebergUnreferencedFileRemoval"></a>

```csharp
private void PutIcebergUnreferencedFileRemoval(S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.putIcebergUnreferencedFileRemoval.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval">S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemoval</a>

---

##### `ResetIcebergUnreferencedFileRemoval` <a name="ResetIcebergUnreferencedFileRemoval" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.resetIcebergUnreferencedFileRemoval"></a>

```csharp
private void ResetIcebergUnreferencedFileRemoval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.property.icebergUnreferencedFileRemoval">IcebergUnreferencedFileRemoval</a></code> | <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference">S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.property.icebergUnreferencedFileRemovalInput">IcebergUnreferencedFileRemovalInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IcebergUnreferencedFileRemoval`<sup>Required</sup> <a name="IcebergUnreferencedFileRemoval" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.property.icebergUnreferencedFileRemoval"></a>

```csharp
public S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference IcebergUnreferencedFileRemoval { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference">S3TablesTableBucketMaintenanceConfigurationIcebergUnreferencedFileRemovalOutputReference</a>

---

##### `IcebergUnreferencedFileRemovalInput`<sup>Optional</sup> <a name="IcebergUnreferencedFileRemovalInput" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.property.icebergUnreferencedFileRemovalInput"></a>

```csharp
public object IcebergUnreferencedFileRemovalInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3TablesTableBucket.S3TablesTableBucketMaintenanceConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



