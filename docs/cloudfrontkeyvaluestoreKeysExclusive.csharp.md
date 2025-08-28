# `cloudfrontkeyvaluestoreKeysExclusive` Submodule <a name="`cloudfrontkeyvaluestoreKeysExclusive` Submodule" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontkeyvaluestoreKeysExclusive <a name="CloudfrontkeyvaluestoreKeysExclusive" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/cloudfrontkeyvaluestore_keys_exclusive aws_cloudfrontkeyvaluestore_keys_exclusive}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontkeyvaluestoreKeysExclusive(Construct Scope, string Id, CloudfrontkeyvaluestoreKeysExclusiveConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveConfig">CloudfrontkeyvaluestoreKeysExclusiveConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveConfig">CloudfrontkeyvaluestoreKeysExclusiveConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.putResourceKeyValuePair">PutResourceKeyValuePair</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.resetMaxBatchSize">ResetMaxBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.resetResourceKeyValuePair">ResetResourceKeyValuePair</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutResourceKeyValuePair` <a name="PutResourceKeyValuePair" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.putResourceKeyValuePair"></a>

```csharp
private void PutResourceKeyValuePair(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.putResourceKeyValuePair.parameter.value"></a>

- *Type:* object

---

##### `ResetMaxBatchSize` <a name="ResetMaxBatchSize" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.resetMaxBatchSize"></a>

```csharp
private void ResetMaxBatchSize()
```

##### `ResetResourceKeyValuePair` <a name="ResetResourceKeyValuePair" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.resetResourceKeyValuePair"></a>

```csharp
private void ResetResourceKeyValuePair()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CloudfrontkeyvaluestoreKeysExclusive resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudfrontkeyvaluestoreKeysExclusive.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudfrontkeyvaluestoreKeysExclusive.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudfrontkeyvaluestoreKeysExclusive.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudfrontkeyvaluestoreKeysExclusive.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CloudfrontkeyvaluestoreKeysExclusive resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudfrontkeyvaluestoreKeysExclusive to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudfrontkeyvaluestoreKeysExclusive that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/cloudfrontkeyvaluestore_keys_exclusive#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CloudfrontkeyvaluestoreKeysExclusive to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.resourceKeyValuePair">ResourceKeyValuePair</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList">CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.totalSizeInBytes">TotalSizeInBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.keyValueStoreArnInput">KeyValueStoreArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.maxBatchSizeInput">MaxBatchSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.resourceKeyValuePairInput">ResourceKeyValuePairInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.keyValueStoreArn">KeyValueStoreArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.maxBatchSize">MaxBatchSize</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ResourceKeyValuePair`<sup>Required</sup> <a name="ResourceKeyValuePair" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.resourceKeyValuePair"></a>

```csharp
public CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList ResourceKeyValuePair { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList">CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList</a>

---

##### `TotalSizeInBytes`<sup>Required</sup> <a name="TotalSizeInBytes" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.totalSizeInBytes"></a>

```csharp
public double TotalSizeInBytes { get; }
```

- *Type:* double

---

##### `KeyValueStoreArnInput`<sup>Optional</sup> <a name="KeyValueStoreArnInput" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.keyValueStoreArnInput"></a>

```csharp
public string KeyValueStoreArnInput { get; }
```

- *Type:* string

---

##### `MaxBatchSizeInput`<sup>Optional</sup> <a name="MaxBatchSizeInput" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.maxBatchSizeInput"></a>

```csharp
public double MaxBatchSizeInput { get; }
```

- *Type:* double

---

##### `ResourceKeyValuePairInput`<sup>Optional</sup> <a name="ResourceKeyValuePairInput" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.resourceKeyValuePairInput"></a>

```csharp
public object ResourceKeyValuePairInput { get; }
```

- *Type:* object

---

##### `KeyValueStoreArn`<sup>Required</sup> <a name="KeyValueStoreArn" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.keyValueStoreArn"></a>

```csharp
public string KeyValueStoreArn { get; }
```

- *Type:* string

---

##### `MaxBatchSize`<sup>Required</sup> <a name="MaxBatchSize" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.maxBatchSize"></a>

```csharp
public double MaxBatchSize { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusive.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontkeyvaluestoreKeysExclusiveConfig <a name="CloudfrontkeyvaluestoreKeysExclusiveConfig" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontkeyvaluestoreKeysExclusiveConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string KeyValueStoreArn,
    double MaxBatchSize = null,
    object ResourceKeyValuePair = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveConfig.property.keyValueStoreArn">KeyValueStoreArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the Key Value Store. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveConfig.property.maxBatchSize">MaxBatchSize</a></code> | <code>double</code> | Maximum resource key values pairs that you wills update in a single API request. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveConfig.property.resourceKeyValuePair">ResourceKeyValuePair</a></code> | <code>object</code> | resource_key_value_pair block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `KeyValueStoreArn`<sup>Required</sup> <a name="KeyValueStoreArn" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveConfig.property.keyValueStoreArn"></a>

```csharp
public string KeyValueStoreArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the Key Value Store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/cloudfrontkeyvaluestore_keys_exclusive#key_value_store_arn CloudfrontkeyvaluestoreKeysExclusive#key_value_store_arn}

---

##### `MaxBatchSize`<sup>Optional</sup> <a name="MaxBatchSize" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveConfig.property.maxBatchSize"></a>

```csharp
public double MaxBatchSize { get; set; }
```

- *Type:* double

Maximum resource key values pairs that you wills update in a single API request.

AWS has a default quota of 50 keys or a 3 MB payload, whichever is reached first

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/cloudfrontkeyvaluestore_keys_exclusive#max_batch_size CloudfrontkeyvaluestoreKeysExclusive#max_batch_size}

---

##### `ResourceKeyValuePair`<sup>Optional</sup> <a name="ResourceKeyValuePair" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveConfig.property.resourceKeyValuePair"></a>

```csharp
public object ResourceKeyValuePair { get; set; }
```

- *Type:* object

resource_key_value_pair block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/cloudfrontkeyvaluestore_keys_exclusive#resource_key_value_pair CloudfrontkeyvaluestoreKeysExclusive#resource_key_value_pair}

---

### CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair <a name="CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair {
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair.property.key">Key</a></code> | <code>string</code> | The key to put. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair.property.value">Value</a></code> | <code>string</code> | The value to put. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key to put.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/cloudfrontkeyvaluestore_keys_exclusive#key CloudfrontkeyvaluestoreKeysExclusive#key}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value to put.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/cloudfrontkeyvaluestore_keys_exclusive#value CloudfrontkeyvaluestoreKeysExclusive#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList <a name="CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.get"></a>

```csharp
private CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference <a name="CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontkeyvaluestoreKeysExclusive.CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



