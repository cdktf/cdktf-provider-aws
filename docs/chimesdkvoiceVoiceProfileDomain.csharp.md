# `chimesdkvoiceVoiceProfileDomain` Submodule <a name="`chimesdkvoiceVoiceProfileDomain` Submodule" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimesdkvoiceVoiceProfileDomain <a name="ChimesdkvoiceVoiceProfileDomain" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/chimesdkvoice_voice_profile_domain aws_chimesdkvoice_voice_profile_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ChimesdkvoiceVoiceProfileDomain(Construct Scope, string Id, ChimesdkvoiceVoiceProfileDomainConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig">ChimesdkvoiceVoiceProfileDomainConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig">ChimesdkvoiceVoiceProfileDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.putServerSideEncryptionConfiguration">PutServerSideEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutServerSideEncryptionConfiguration` <a name="PutServerSideEncryptionConfiguration" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.putServerSideEncryptionConfiguration"></a>

```csharp
private void PutServerSideEncryptionConfiguration(ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.putServerSideEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration">ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.putTimeouts"></a>

```csharp
private void PutTimeouts(ChimesdkvoiceVoiceProfileDomainTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts">ChimesdkvoiceVoiceProfileDomainTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ChimesdkvoiceVoiceProfileDomain resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ChimesdkvoiceVoiceProfileDomain.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ChimesdkvoiceVoiceProfileDomain.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ChimesdkvoiceVoiceProfileDomain.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ChimesdkvoiceVoiceProfileDomain.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ChimesdkvoiceVoiceProfileDomain resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ChimesdkvoiceVoiceProfileDomain to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ChimesdkvoiceVoiceProfileDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/chimesdkvoice_voice_profile_domain#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ChimesdkvoiceVoiceProfileDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.serverSideEncryptionConfiguration">ServerSideEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference">ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference">ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.serverSideEncryptionConfigurationInput">ServerSideEncryptionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration">ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ServerSideEncryptionConfiguration`<sup>Required</sup> <a name="ServerSideEncryptionConfiguration" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.serverSideEncryptionConfiguration"></a>

```csharp
public ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference ServerSideEncryptionConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference">ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.timeouts"></a>

```csharp
public ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference">ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ServerSideEncryptionConfigurationInput`<sup>Optional</sup> <a name="ServerSideEncryptionConfigurationInput" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.serverSideEncryptionConfigurationInput"></a>

```csharp
public ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration ServerSideEncryptionConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration">ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomain.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChimesdkvoiceVoiceProfileDomainConfig <a name="ChimesdkvoiceVoiceProfileDomainConfig" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ChimesdkvoiceVoiceProfileDomainConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration ServerSideEncryptionConfiguration,
    string Description = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    ChimesdkvoiceVoiceProfileDomainTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/chimesdkvoice_voice_profile_domain#name ChimesdkvoiceVoiceProfileDomain#name}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.serverSideEncryptionConfiguration">ServerSideEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration">ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration</a></code> | server_side_encryption_configuration block. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/chimesdkvoice_voice_profile_domain#description ChimesdkvoiceVoiceProfileDomain#description}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/chimesdkvoice_voice_profile_domain#tags ChimesdkvoiceVoiceProfileDomain#tags}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/chimesdkvoice_voice_profile_domain#tags_all ChimesdkvoiceVoiceProfileDomain#tags_all}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts">ChimesdkvoiceVoiceProfileDomainTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/chimesdkvoice_voice_profile_domain#name ChimesdkvoiceVoiceProfileDomain#name}.

---

##### `ServerSideEncryptionConfiguration`<sup>Required</sup> <a name="ServerSideEncryptionConfiguration" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.serverSideEncryptionConfiguration"></a>

```csharp
public ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration ServerSideEncryptionConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration">ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration</a>

server_side_encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/chimesdkvoice_voice_profile_domain#server_side_encryption_configuration ChimesdkvoiceVoiceProfileDomain#server_side_encryption_configuration}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/chimesdkvoice_voice_profile_domain#description ChimesdkvoiceVoiceProfileDomain#description}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/chimesdkvoice_voice_profile_domain#tags ChimesdkvoiceVoiceProfileDomain#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/chimesdkvoice_voice_profile_domain#tags_all ChimesdkvoiceVoiceProfileDomain#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainConfig.property.timeouts"></a>

```csharp
public ChimesdkvoiceVoiceProfileDomainTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts">ChimesdkvoiceVoiceProfileDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/chimesdkvoice_voice_profile_domain#timeouts ChimesdkvoiceVoiceProfileDomain#timeouts}

---

### ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration <a name="ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration {
    string KmsKeyArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/chimesdkvoice_voice_profile_domain#kms_key_arn ChimesdkvoiceVoiceProfileDomain#kms_key_arn}. |

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/chimesdkvoice_voice_profile_domain#kms_key_arn ChimesdkvoiceVoiceProfileDomain#kms_key_arn}.

---

### ChimesdkvoiceVoiceProfileDomainTimeouts <a name="ChimesdkvoiceVoiceProfileDomainTimeouts" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ChimesdkvoiceVoiceProfileDomainTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/chimesdkvoice_voice_profile_domain#create ChimesdkvoiceVoiceProfileDomain#create}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/chimesdkvoice_voice_profile_domain#delete ChimesdkvoiceVoiceProfileDomain#delete}. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/chimesdkvoice_voice_profile_domain#update ChimesdkvoiceVoiceProfileDomain#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/chimesdkvoice_voice_profile_domain#create ChimesdkvoiceVoiceProfileDomain#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/chimesdkvoice_voice_profile_domain#delete ChimesdkvoiceVoiceProfileDomain#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/chimesdkvoice_voice_profile_domain#update ChimesdkvoiceVoiceProfileDomain#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference <a name="ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration">ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference.property.internalValue"></a>

```csharp
public ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration">ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration</a>

---


### ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference <a name="ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.chimesdkvoiceVoiceProfileDomain.ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



