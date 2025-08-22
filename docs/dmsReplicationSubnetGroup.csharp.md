# `dmsReplicationSubnetGroup` Submodule <a name="`dmsReplicationSubnetGroup` Submodule" id="@cdktf/provider-aws.dmsReplicationSubnetGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsReplicationSubnetGroup <a name="DmsReplicationSubnetGroup" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dms_replication_subnet_group aws_dms_replication_subnet_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DmsReplicationSubnetGroup(Construct Scope, string Id, DmsReplicationSubnetGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig">DmsReplicationSubnetGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig">DmsReplicationSubnetGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DmsReplicationSubnetGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DmsReplicationSubnetGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DmsReplicationSubnetGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DmsReplicationSubnetGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DmsReplicationSubnetGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DmsReplicationSubnetGroup resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DmsReplicationSubnetGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DmsReplicationSubnetGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dms_replication_subnet_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DmsReplicationSubnetGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.replicationSubnetGroupArn">ReplicationSubnetGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.replicationSubnetGroupDescriptionInput">ReplicationSubnetGroupDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.replicationSubnetGroupIdInput">ReplicationSubnetGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.replicationSubnetGroupDescription">ReplicationSubnetGroupDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.replicationSubnetGroupId">ReplicationSubnetGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ReplicationSubnetGroupArn`<sup>Required</sup> <a name="ReplicationSubnetGroupArn" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.replicationSubnetGroupArn"></a>

```csharp
public string ReplicationSubnetGroupArn { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ReplicationSubnetGroupDescriptionInput`<sup>Optional</sup> <a name="ReplicationSubnetGroupDescriptionInput" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.replicationSubnetGroupDescriptionInput"></a>

```csharp
public string ReplicationSubnetGroupDescriptionInput { get; }
```

- *Type:* string

---

##### `ReplicationSubnetGroupIdInput`<sup>Optional</sup> <a name="ReplicationSubnetGroupIdInput" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.replicationSubnetGroupIdInput"></a>

```csharp
public string ReplicationSubnetGroupIdInput { get; }
```

- *Type:* string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ReplicationSubnetGroupDescription`<sup>Required</sup> <a name="ReplicationSubnetGroupDescription" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.replicationSubnetGroupDescription"></a>

```csharp
public string ReplicationSubnetGroupDescription { get; }
```

- *Type:* string

---

##### `ReplicationSubnetGroupId`<sup>Required</sup> <a name="ReplicationSubnetGroupId" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.replicationSubnetGroupId"></a>

```csharp
public string ReplicationSubnetGroupId { get; }
```

- *Type:* string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DmsReplicationSubnetGroupConfig <a name="DmsReplicationSubnetGroupConfig" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DmsReplicationSubnetGroupConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ReplicationSubnetGroupDescription,
    string ReplicationSubnetGroupId,
    string[] SubnetIds,
    string Id = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.replicationSubnetGroupDescription">ReplicationSubnetGroupDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dms_replication_subnet_group#replication_subnet_group_description DmsReplicationSubnetGroup#replication_subnet_group_description}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.replicationSubnetGroupId">ReplicationSubnetGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dms_replication_subnet_group#replication_subnet_group_id DmsReplicationSubnetGroup#replication_subnet_group_id}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dms_replication_subnet_group#subnet_ids DmsReplicationSubnetGroup#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dms_replication_subnet_group#id DmsReplicationSubnetGroup#id}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dms_replication_subnet_group#tags DmsReplicationSubnetGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dms_replication_subnet_group#tags_all DmsReplicationSubnetGroup#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ReplicationSubnetGroupDescription`<sup>Required</sup> <a name="ReplicationSubnetGroupDescription" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.replicationSubnetGroupDescription"></a>

```csharp
public string ReplicationSubnetGroupDescription { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dms_replication_subnet_group#replication_subnet_group_description DmsReplicationSubnetGroup#replication_subnet_group_description}.

---

##### `ReplicationSubnetGroupId`<sup>Required</sup> <a name="ReplicationSubnetGroupId" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.replicationSubnetGroupId"></a>

```csharp
public string ReplicationSubnetGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dms_replication_subnet_group#replication_subnet_group_id DmsReplicationSubnetGroup#replication_subnet_group_id}.

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dms_replication_subnet_group#subnet_ids DmsReplicationSubnetGroup#subnet_ids}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dms_replication_subnet_group#id DmsReplicationSubnetGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dms_replication_subnet_group#region DmsReplicationSubnetGroup#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dms_replication_subnet_group#tags DmsReplicationSubnetGroup#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.dmsReplicationSubnetGroup.DmsReplicationSubnetGroupConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/dms_replication_subnet_group#tags_all DmsReplicationSubnetGroup#tags_all}.

---



