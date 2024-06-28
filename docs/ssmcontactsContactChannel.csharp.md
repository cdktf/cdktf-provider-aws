# `ssmcontactsContactChannel` Submodule <a name="`ssmcontactsContactChannel` Submodule" id="@cdktf/provider-aws.ssmcontactsContactChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmcontactsContactChannel <a name="SsmcontactsContactChannel" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/ssmcontacts_contact_channel aws_ssmcontacts_contact_channel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmcontactsContactChannel(Construct Scope, string Id, SsmcontactsContactChannelConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelConfig">SsmcontactsContactChannelConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelConfig">SsmcontactsContactChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.putDeliveryAddress">PutDeliveryAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDeliveryAddress` <a name="PutDeliveryAddress" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.putDeliveryAddress"></a>

```csharp
private void PutDeliveryAddress(SsmcontactsContactChannelDeliveryAddress Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.putDeliveryAddress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddress">SsmcontactsContactChannelDeliveryAddress</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SsmcontactsContactChannel resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SsmcontactsContactChannel.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SsmcontactsContactChannel.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SsmcontactsContactChannel.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SsmcontactsContactChannel.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SsmcontactsContactChannel resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SsmcontactsContactChannel to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SsmcontactsContactChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/ssmcontacts_contact_channel#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SsmcontactsContactChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.activationStatus">ActivationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.deliveryAddress">DeliveryAddress</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference">SsmcontactsContactChannelDeliveryAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.contactIdInput">ContactIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.deliveryAddressInput">DeliveryAddressInput</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddress">SsmcontactsContactChannelDeliveryAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.contactId">ContactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ActivationStatus`<sup>Required</sup> <a name="ActivationStatus" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.activationStatus"></a>

```csharp
public string ActivationStatus { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DeliveryAddress`<sup>Required</sup> <a name="DeliveryAddress" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.deliveryAddress"></a>

```csharp
public SsmcontactsContactChannelDeliveryAddressOutputReference DeliveryAddress { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference">SsmcontactsContactChannelDeliveryAddressOutputReference</a>

---

##### `ContactIdInput`<sup>Optional</sup> <a name="ContactIdInput" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.contactIdInput"></a>

```csharp
public string ContactIdInput { get; }
```

- *Type:* string

---

##### `DeliveryAddressInput`<sup>Optional</sup> <a name="DeliveryAddressInput" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.deliveryAddressInput"></a>

```csharp
public SsmcontactsContactChannelDeliveryAddress DeliveryAddressInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddress">SsmcontactsContactChannelDeliveryAddress</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ContactId`<sup>Required</sup> <a name="ContactId" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.contactId"></a>

```csharp
public string ContactId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannel.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmcontactsContactChannelConfig <a name="SsmcontactsContactChannelConfig" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmcontactsContactChannelConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ContactId,
    SsmcontactsContactChannelDeliveryAddress DeliveryAddress,
    string Name,
    string Type,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.contactId">ContactId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/ssmcontacts_contact_channel#contact_id SsmcontactsContactChannel#contact_id}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.deliveryAddress">DeliveryAddress</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddress">SsmcontactsContactChannelDeliveryAddress</a></code> | delivery_address block. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/ssmcontacts_contact_channel#name SsmcontactsContactChannel#name}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/ssmcontacts_contact_channel#type SsmcontactsContactChannel#type}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/ssmcontacts_contact_channel#id SsmcontactsContactChannel#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ContactId`<sup>Required</sup> <a name="ContactId" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.contactId"></a>

```csharp
public string ContactId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/ssmcontacts_contact_channel#contact_id SsmcontactsContactChannel#contact_id}.

---

##### `DeliveryAddress`<sup>Required</sup> <a name="DeliveryAddress" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.deliveryAddress"></a>

```csharp
public SsmcontactsContactChannelDeliveryAddress DeliveryAddress { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddress">SsmcontactsContactChannelDeliveryAddress</a>

delivery_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/ssmcontacts_contact_channel#delivery_address SsmcontactsContactChannel#delivery_address}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/ssmcontacts_contact_channel#name SsmcontactsContactChannel#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/ssmcontacts_contact_channel#type SsmcontactsContactChannel#type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/ssmcontacts_contact_channel#id SsmcontactsContactChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### SsmcontactsContactChannelDeliveryAddress <a name="SsmcontactsContactChannelDeliveryAddress" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmcontactsContactChannelDeliveryAddress {
    string SimpleAddress
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddress.property.simpleAddress">SimpleAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/ssmcontacts_contact_channel#simple_address SsmcontactsContactChannel#simple_address}. |

---

##### `SimpleAddress`<sup>Required</sup> <a name="SimpleAddress" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddress.property.simpleAddress"></a>

```csharp
public string SimpleAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/ssmcontacts_contact_channel#simple_address SsmcontactsContactChannel#simple_address}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsmcontactsContactChannelDeliveryAddressOutputReference <a name="SsmcontactsContactChannelDeliveryAddressOutputReference" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmcontactsContactChannelDeliveryAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.property.simpleAddressInput">SimpleAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.property.simpleAddress">SimpleAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddress">SsmcontactsContactChannelDeliveryAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SimpleAddressInput`<sup>Optional</sup> <a name="SimpleAddressInput" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.property.simpleAddressInput"></a>

```csharp
public string SimpleAddressInput { get; }
```

- *Type:* string

---

##### `SimpleAddress`<sup>Required</sup> <a name="SimpleAddress" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.property.simpleAddress"></a>

```csharp
public string SimpleAddress { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddressOutputReference.property.internalValue"></a>

```csharp
public SsmcontactsContactChannelDeliveryAddress InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsContactChannel.SsmcontactsContactChannelDeliveryAddress">SsmcontactsContactChannelDeliveryAddress</a>

---



