# `customerprofilesDomain` Submodule <a name="`customerprofilesDomain` Submodule" id="@cdktf/provider-aws.customerprofilesDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomerprofilesDomain <a name="CustomerprofilesDomain" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain aws_customerprofiles_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CustomerprofilesDomain(Construct Scope, string Id, CustomerprofilesDomainConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig">CustomerprofilesDomainConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig">CustomerprofilesDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.putMatching">PutMatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.putRuleBasedMatching">PutRuleBasedMatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetDeadLetterQueueUrl">ResetDeadLetterQueueUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetDefaultEncryptionKey">ResetDefaultEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetMatching">ResetMatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetRuleBasedMatching">ResetRuleBasedMatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMatching` <a name="PutMatching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.putMatching"></a>

```csharp
private void PutMatching(CustomerprofilesDomainMatching Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.putMatching.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching">CustomerprofilesDomainMatching</a>

---

##### `PutRuleBasedMatching` <a name="PutRuleBasedMatching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.putRuleBasedMatching"></a>

```csharp
private void PutRuleBasedMatching(CustomerprofilesDomainRuleBasedMatching Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.putRuleBasedMatching.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching">CustomerprofilesDomainRuleBasedMatching</a>

---

##### `ResetDeadLetterQueueUrl` <a name="ResetDeadLetterQueueUrl" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetDeadLetterQueueUrl"></a>

```csharp
private void ResetDeadLetterQueueUrl()
```

##### `ResetDefaultEncryptionKey` <a name="ResetDefaultEncryptionKey" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetDefaultEncryptionKey"></a>

```csharp
private void ResetDefaultEncryptionKey()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMatching` <a name="ResetMatching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetMatching"></a>

```csharp
private void ResetMatching()
```

##### `ResetRuleBasedMatching` <a name="ResetRuleBasedMatching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetRuleBasedMatching"></a>

```csharp
private void ResetRuleBasedMatching()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CustomerprofilesDomain resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CustomerprofilesDomain.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CustomerprofilesDomain.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CustomerprofilesDomain.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CustomerprofilesDomain.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CustomerprofilesDomain resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CustomerprofilesDomain to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CustomerprofilesDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CustomerprofilesDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.matching">Matching</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference">CustomerprofilesDomainMatchingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.ruleBasedMatching">RuleBasedMatching</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference">CustomerprofilesDomainRuleBasedMatchingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.deadLetterQueueUrlInput">DeadLetterQueueUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.defaultEncryptionKeyInput">DefaultEncryptionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.defaultExpirationDaysInput">DefaultExpirationDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.matchingInput">MatchingInput</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching">CustomerprofilesDomainMatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.ruleBasedMatchingInput">RuleBasedMatchingInput</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching">CustomerprofilesDomainRuleBasedMatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.deadLetterQueueUrl">DeadLetterQueueUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.defaultEncryptionKey">DefaultEncryptionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.defaultExpirationDays">DefaultExpirationDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Matching`<sup>Required</sup> <a name="Matching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.matching"></a>

```csharp
public CustomerprofilesDomainMatchingOutputReference Matching { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference">CustomerprofilesDomainMatchingOutputReference</a>

---

##### `RuleBasedMatching`<sup>Required</sup> <a name="RuleBasedMatching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.ruleBasedMatching"></a>

```csharp
public CustomerprofilesDomainRuleBasedMatchingOutputReference RuleBasedMatching { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference">CustomerprofilesDomainRuleBasedMatchingOutputReference</a>

---

##### `DeadLetterQueueUrlInput`<sup>Optional</sup> <a name="DeadLetterQueueUrlInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.deadLetterQueueUrlInput"></a>

```csharp
public string DeadLetterQueueUrlInput { get; }
```

- *Type:* string

---

##### `DefaultEncryptionKeyInput`<sup>Optional</sup> <a name="DefaultEncryptionKeyInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.defaultEncryptionKeyInput"></a>

```csharp
public string DefaultEncryptionKeyInput { get; }
```

- *Type:* string

---

##### `DefaultExpirationDaysInput`<sup>Optional</sup> <a name="DefaultExpirationDaysInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.defaultExpirationDaysInput"></a>

```csharp
public double DefaultExpirationDaysInput { get; }
```

- *Type:* double

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MatchingInput`<sup>Optional</sup> <a name="MatchingInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.matchingInput"></a>

```csharp
public CustomerprofilesDomainMatching MatchingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching">CustomerprofilesDomainMatching</a>

---

##### `RuleBasedMatchingInput`<sup>Optional</sup> <a name="RuleBasedMatchingInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.ruleBasedMatchingInput"></a>

```csharp
public CustomerprofilesDomainRuleBasedMatching RuleBasedMatchingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching">CustomerprofilesDomainRuleBasedMatching</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeadLetterQueueUrl`<sup>Required</sup> <a name="DeadLetterQueueUrl" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.deadLetterQueueUrl"></a>

```csharp
public string DeadLetterQueueUrl { get; }
```

- *Type:* string

---

##### `DefaultEncryptionKey`<sup>Required</sup> <a name="DefaultEncryptionKey" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.defaultEncryptionKey"></a>

```csharp
public string DefaultEncryptionKey { get; }
```

- *Type:* string

---

##### `DefaultExpirationDays`<sup>Required</sup> <a name="DefaultExpirationDays" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.defaultExpirationDays"></a>

```csharp
public double DefaultExpirationDays { get; }
```

- *Type:* double

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CustomerprofilesDomainConfig <a name="CustomerprofilesDomainConfig" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CustomerprofilesDomainConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    double DefaultExpirationDays,
    string DomainName,
    string DeadLetterQueueUrl = null,
    string DefaultEncryptionKey = null,
    string Id = null,
    CustomerprofilesDomainMatching Matching = null,
    CustomerprofilesDomainRuleBasedMatching RuleBasedMatching = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.defaultExpirationDays">DefaultExpirationDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#default_expiration_days CustomerprofilesDomain#default_expiration_days}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.domainName">DomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#domain_name CustomerprofilesDomain#domain_name}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.deadLetterQueueUrl">DeadLetterQueueUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#dead_letter_queue_url CustomerprofilesDomain#dead_letter_queue_url}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.defaultEncryptionKey">DefaultEncryptionKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#default_encryption_key CustomerprofilesDomain#default_encryption_key}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#id CustomerprofilesDomain#id}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.matching">Matching</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching">CustomerprofilesDomainMatching</a></code> | matching block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.ruleBasedMatching">RuleBasedMatching</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching">CustomerprofilesDomainRuleBasedMatching</a></code> | rule_based_matching block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#tags CustomerprofilesDomain#tags}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#tags_all CustomerprofilesDomain#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DefaultExpirationDays`<sup>Required</sup> <a name="DefaultExpirationDays" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.defaultExpirationDays"></a>

```csharp
public double DefaultExpirationDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#default_expiration_days CustomerprofilesDomain#default_expiration_days}.

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#domain_name CustomerprofilesDomain#domain_name}.

---

##### `DeadLetterQueueUrl`<sup>Optional</sup> <a name="DeadLetterQueueUrl" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.deadLetterQueueUrl"></a>

```csharp
public string DeadLetterQueueUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#dead_letter_queue_url CustomerprofilesDomain#dead_letter_queue_url}.

---

##### `DefaultEncryptionKey`<sup>Optional</sup> <a name="DefaultEncryptionKey" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.defaultEncryptionKey"></a>

```csharp
public string DefaultEncryptionKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#default_encryption_key CustomerprofilesDomain#default_encryption_key}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#id CustomerprofilesDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Matching`<sup>Optional</sup> <a name="Matching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.matching"></a>

```csharp
public CustomerprofilesDomainMatching Matching { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching">CustomerprofilesDomainMatching</a>

matching block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#matching CustomerprofilesDomain#matching}

---

##### `RuleBasedMatching`<sup>Optional</sup> <a name="RuleBasedMatching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.ruleBasedMatching"></a>

```csharp
public CustomerprofilesDomainRuleBasedMatching RuleBasedMatching { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching">CustomerprofilesDomainRuleBasedMatching</a>

rule_based_matching block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#rule_based_matching CustomerprofilesDomain#rule_based_matching}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#tags CustomerprofilesDomain#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#tags_all CustomerprofilesDomain#tags_all}.

---

### CustomerprofilesDomainMatching <a name="CustomerprofilesDomainMatching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CustomerprofilesDomainMatching {
    object Enabled,
    CustomerprofilesDomainMatchingAutoMerging AutoMerging = null,
    CustomerprofilesDomainMatchingExportingConfig ExportingConfig = null,
    CustomerprofilesDomainMatchingJobSchedule JobSchedule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#enabled CustomerprofilesDomain#enabled}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching.property.autoMerging">AutoMerging</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging">CustomerprofilesDomainMatchingAutoMerging</a></code> | auto_merging block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching.property.exportingConfig">ExportingConfig</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfig">CustomerprofilesDomainMatchingExportingConfig</a></code> | exporting_config block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching.property.jobSchedule">JobSchedule</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule">CustomerprofilesDomainMatchingJobSchedule</a></code> | job_schedule block. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#enabled CustomerprofilesDomain#enabled}.

---

##### `AutoMerging`<sup>Optional</sup> <a name="AutoMerging" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching.property.autoMerging"></a>

```csharp
public CustomerprofilesDomainMatchingAutoMerging AutoMerging { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging">CustomerprofilesDomainMatchingAutoMerging</a>

auto_merging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#auto_merging CustomerprofilesDomain#auto_merging}

---

##### `ExportingConfig`<sup>Optional</sup> <a name="ExportingConfig" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching.property.exportingConfig"></a>

```csharp
public CustomerprofilesDomainMatchingExportingConfig ExportingConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfig">CustomerprofilesDomainMatchingExportingConfig</a>

exporting_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#exporting_config CustomerprofilesDomain#exporting_config}

---

##### `JobSchedule`<sup>Optional</sup> <a name="JobSchedule" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching.property.jobSchedule"></a>

```csharp
public CustomerprofilesDomainMatchingJobSchedule JobSchedule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule">CustomerprofilesDomainMatchingJobSchedule</a>

job_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#job_schedule CustomerprofilesDomain#job_schedule}

---

### CustomerprofilesDomainMatchingAutoMerging <a name="CustomerprofilesDomainMatchingAutoMerging" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CustomerprofilesDomainMatchingAutoMerging {
    object Enabled,
    CustomerprofilesDomainMatchingAutoMergingConflictResolution ConflictResolution = null,
    CustomerprofilesDomainMatchingAutoMergingConsolidation Consolidation = null,
    double MinAllowedConfidenceScoreForMerging = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#enabled CustomerprofilesDomain#enabled}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging.property.conflictResolution">ConflictResolution</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution">CustomerprofilesDomainMatchingAutoMergingConflictResolution</a></code> | conflict_resolution block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging.property.consolidation">Consolidation</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidation">CustomerprofilesDomainMatchingAutoMergingConsolidation</a></code> | consolidation block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging.property.minAllowedConfidenceScoreForMerging">MinAllowedConfidenceScoreForMerging</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#min_allowed_confidence_score_for_merging CustomerprofilesDomain#min_allowed_confidence_score_for_merging}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#enabled CustomerprofilesDomain#enabled}.

---

##### `ConflictResolution`<sup>Optional</sup> <a name="ConflictResolution" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging.property.conflictResolution"></a>

```csharp
public CustomerprofilesDomainMatchingAutoMergingConflictResolution ConflictResolution { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution">CustomerprofilesDomainMatchingAutoMergingConflictResolution</a>

conflict_resolution block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#conflict_resolution CustomerprofilesDomain#conflict_resolution}

---

##### `Consolidation`<sup>Optional</sup> <a name="Consolidation" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging.property.consolidation"></a>

```csharp
public CustomerprofilesDomainMatchingAutoMergingConsolidation Consolidation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidation">CustomerprofilesDomainMatchingAutoMergingConsolidation</a>

consolidation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#consolidation CustomerprofilesDomain#consolidation}

---

##### `MinAllowedConfidenceScoreForMerging`<sup>Optional</sup> <a name="MinAllowedConfidenceScoreForMerging" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging.property.minAllowedConfidenceScoreForMerging"></a>

```csharp
public double MinAllowedConfidenceScoreForMerging { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#min_allowed_confidence_score_for_merging CustomerprofilesDomain#min_allowed_confidence_score_for_merging}.

---

### CustomerprofilesDomainMatchingAutoMergingConflictResolution <a name="CustomerprofilesDomainMatchingAutoMergingConflictResolution" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CustomerprofilesDomainMatchingAutoMergingConflictResolution {
    string ConflictResolvingModel,
    string SourceName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution.property.conflictResolvingModel">ConflictResolvingModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#conflict_resolving_model CustomerprofilesDomain#conflict_resolving_model}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution.property.sourceName">SourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#source_name CustomerprofilesDomain#source_name}. |

---

##### `ConflictResolvingModel`<sup>Required</sup> <a name="ConflictResolvingModel" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution.property.conflictResolvingModel"></a>

```csharp
public string ConflictResolvingModel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#conflict_resolving_model CustomerprofilesDomain#conflict_resolving_model}.

---

##### `SourceName`<sup>Optional</sup> <a name="SourceName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution.property.sourceName"></a>

```csharp
public string SourceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#source_name CustomerprofilesDomain#source_name}.

---

### CustomerprofilesDomainMatchingAutoMergingConsolidation <a name="CustomerprofilesDomainMatchingAutoMergingConsolidation" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CustomerprofilesDomainMatchingAutoMergingConsolidation {
    object MatchingAttributesList
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidation.property.matchingAttributesList">MatchingAttributesList</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#matching_attributes_list CustomerprofilesDomain#matching_attributes_list}. |

---

##### `MatchingAttributesList`<sup>Required</sup> <a name="MatchingAttributesList" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidation.property.matchingAttributesList"></a>

```csharp
public object MatchingAttributesList { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#matching_attributes_list CustomerprofilesDomain#matching_attributes_list}.

---

### CustomerprofilesDomainMatchingExportingConfig <a name="CustomerprofilesDomainMatchingExportingConfig" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CustomerprofilesDomainMatchingExportingConfig {
    CustomerprofilesDomainMatchingExportingConfigS3Exporting S3Exporting = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfig.property.s3Exporting">S3Exporting</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting">CustomerprofilesDomainMatchingExportingConfigS3Exporting</a></code> | s3_exporting block. |

---

##### `S3Exporting`<sup>Optional</sup> <a name="S3Exporting" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfig.property.s3Exporting"></a>

```csharp
public CustomerprofilesDomainMatchingExportingConfigS3Exporting S3Exporting { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting">CustomerprofilesDomainMatchingExportingConfigS3Exporting</a>

s3_exporting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#s3_exporting CustomerprofilesDomain#s3_exporting}

---

### CustomerprofilesDomainMatchingExportingConfigS3Exporting <a name="CustomerprofilesDomainMatchingExportingConfigS3Exporting" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CustomerprofilesDomainMatchingExportingConfigS3Exporting {
    string S3BucketName,
    string S3KeyName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting.property.s3BucketName">S3BucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#s3_bucket_name CustomerprofilesDomain#s3_bucket_name}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting.property.s3KeyName">S3KeyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#s3_key_name CustomerprofilesDomain#s3_key_name}. |

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting.property.s3BucketName"></a>

```csharp
public string S3BucketName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#s3_bucket_name CustomerprofilesDomain#s3_bucket_name}.

---

##### `S3KeyName`<sup>Optional</sup> <a name="S3KeyName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting.property.s3KeyName"></a>

```csharp
public string S3KeyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#s3_key_name CustomerprofilesDomain#s3_key_name}.

---

### CustomerprofilesDomainMatchingJobSchedule <a name="CustomerprofilesDomainMatchingJobSchedule" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CustomerprofilesDomainMatchingJobSchedule {
    string DayOfTheWeek,
    string Time
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule.property.dayOfTheWeek">DayOfTheWeek</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#day_of_the_week CustomerprofilesDomain#day_of_the_week}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule.property.time">Time</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#time CustomerprofilesDomain#time}. |

---

##### `DayOfTheWeek`<sup>Required</sup> <a name="DayOfTheWeek" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule.property.dayOfTheWeek"></a>

```csharp
public string DayOfTheWeek { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#day_of_the_week CustomerprofilesDomain#day_of_the_week}.

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule.property.time"></a>

```csharp
public string Time { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#time CustomerprofilesDomain#time}.

---

### CustomerprofilesDomainRuleBasedMatching <a name="CustomerprofilesDomainRuleBasedMatching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CustomerprofilesDomainRuleBasedMatching {
    object Enabled,
    CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector AttributeTypesSelector = null,
    CustomerprofilesDomainRuleBasedMatchingConflictResolution ConflictResolution = null,
    CustomerprofilesDomainRuleBasedMatchingExportingConfig ExportingConfig = null,
    object MatchingRules = null,
    double MaxAllowedRuleLevelForMatching = null,
    double MaxAllowedRuleLevelForMerging = null,
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#enabled CustomerprofilesDomain#enabled}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.attributeTypesSelector">AttributeTypesSelector</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector">CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector</a></code> | attribute_types_selector block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.conflictResolution">ConflictResolution</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution">CustomerprofilesDomainRuleBasedMatchingConflictResolution</a></code> | conflict_resolution block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.exportingConfig">ExportingConfig</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfig">CustomerprofilesDomainRuleBasedMatchingExportingConfig</a></code> | exporting_config block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.matchingRules">MatchingRules</a></code> | <code>object</code> | matching_rules block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.maxAllowedRuleLevelForMatching">MaxAllowedRuleLevelForMatching</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#max_allowed_rule_level_for_matching CustomerprofilesDomain#max_allowed_rule_level_for_matching}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.maxAllowedRuleLevelForMerging">MaxAllowedRuleLevelForMerging</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#max_allowed_rule_level_for_merging CustomerprofilesDomain#max_allowed_rule_level_for_merging}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#status CustomerprofilesDomain#status}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#enabled CustomerprofilesDomain#enabled}.

---

##### `AttributeTypesSelector`<sup>Optional</sup> <a name="AttributeTypesSelector" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.attributeTypesSelector"></a>

```csharp
public CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector AttributeTypesSelector { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector">CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector</a>

attribute_types_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#attribute_types_selector CustomerprofilesDomain#attribute_types_selector}

---

##### `ConflictResolution`<sup>Optional</sup> <a name="ConflictResolution" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.conflictResolution"></a>

```csharp
public CustomerprofilesDomainRuleBasedMatchingConflictResolution ConflictResolution { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution">CustomerprofilesDomainRuleBasedMatchingConflictResolution</a>

conflict_resolution block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#conflict_resolution CustomerprofilesDomain#conflict_resolution}

---

##### `ExportingConfig`<sup>Optional</sup> <a name="ExportingConfig" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.exportingConfig"></a>

```csharp
public CustomerprofilesDomainRuleBasedMatchingExportingConfig ExportingConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfig">CustomerprofilesDomainRuleBasedMatchingExportingConfig</a>

exporting_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#exporting_config CustomerprofilesDomain#exporting_config}

---

##### `MatchingRules`<sup>Optional</sup> <a name="MatchingRules" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.matchingRules"></a>

```csharp
public object MatchingRules { get; set; }
```

- *Type:* object

matching_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#matching_rules CustomerprofilesDomain#matching_rules}

---

##### `MaxAllowedRuleLevelForMatching`<sup>Optional</sup> <a name="MaxAllowedRuleLevelForMatching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.maxAllowedRuleLevelForMatching"></a>

```csharp
public double MaxAllowedRuleLevelForMatching { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#max_allowed_rule_level_for_matching CustomerprofilesDomain#max_allowed_rule_level_for_matching}.

---

##### `MaxAllowedRuleLevelForMerging`<sup>Optional</sup> <a name="MaxAllowedRuleLevelForMerging" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.maxAllowedRuleLevelForMerging"></a>

```csharp
public double MaxAllowedRuleLevelForMerging { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#max_allowed_rule_level_for_merging CustomerprofilesDomain#max_allowed_rule_level_for_merging}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#status CustomerprofilesDomain#status}.

---

### CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector <a name="CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector {
    string AttributeMatchingModel,
    string[] Address = null,
    string[] EmailAddress = null,
    string[] PhoneNumber = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector.property.attributeMatchingModel">AttributeMatchingModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#attribute_matching_model CustomerprofilesDomain#attribute_matching_model}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector.property.address">Address</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#address CustomerprofilesDomain#address}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector.property.emailAddress">EmailAddress</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#email_address CustomerprofilesDomain#email_address}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector.property.phoneNumber">PhoneNumber</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#phone_number CustomerprofilesDomain#phone_number}. |

---

##### `AttributeMatchingModel`<sup>Required</sup> <a name="AttributeMatchingModel" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector.property.attributeMatchingModel"></a>

```csharp
public string AttributeMatchingModel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#attribute_matching_model CustomerprofilesDomain#attribute_matching_model}.

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector.property.address"></a>

```csharp
public string[] Address { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#address CustomerprofilesDomain#address}.

---

##### `EmailAddress`<sup>Optional</sup> <a name="EmailAddress" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector.property.emailAddress"></a>

```csharp
public string[] EmailAddress { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#email_address CustomerprofilesDomain#email_address}.

---

##### `PhoneNumber`<sup>Optional</sup> <a name="PhoneNumber" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector.property.phoneNumber"></a>

```csharp
public string[] PhoneNumber { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#phone_number CustomerprofilesDomain#phone_number}.

---

### CustomerprofilesDomainRuleBasedMatchingConflictResolution <a name="CustomerprofilesDomainRuleBasedMatchingConflictResolution" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CustomerprofilesDomainRuleBasedMatchingConflictResolution {
    string ConflictResolvingModel,
    string SourceName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution.property.conflictResolvingModel">ConflictResolvingModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#conflict_resolving_model CustomerprofilesDomain#conflict_resolving_model}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution.property.sourceName">SourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#source_name CustomerprofilesDomain#source_name}. |

---

##### `ConflictResolvingModel`<sup>Required</sup> <a name="ConflictResolvingModel" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution.property.conflictResolvingModel"></a>

```csharp
public string ConflictResolvingModel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#conflict_resolving_model CustomerprofilesDomain#conflict_resolving_model}.

---

##### `SourceName`<sup>Optional</sup> <a name="SourceName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution.property.sourceName"></a>

```csharp
public string SourceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#source_name CustomerprofilesDomain#source_name}.

---

### CustomerprofilesDomainRuleBasedMatchingExportingConfig <a name="CustomerprofilesDomainRuleBasedMatchingExportingConfig" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CustomerprofilesDomainRuleBasedMatchingExportingConfig {
    CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting S3Exporting = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfig.property.s3Exporting">S3Exporting</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting">CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting</a></code> | s3_exporting block. |

---

##### `S3Exporting`<sup>Optional</sup> <a name="S3Exporting" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfig.property.s3Exporting"></a>

```csharp
public CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting S3Exporting { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting">CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting</a>

s3_exporting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#s3_exporting CustomerprofilesDomain#s3_exporting}

---

### CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting <a name="CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting {
    string S3BucketName,
    string S3KeyName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting.property.s3BucketName">S3BucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#s3_bucket_name CustomerprofilesDomain#s3_bucket_name}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting.property.s3KeyName">S3KeyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#s3_key_name CustomerprofilesDomain#s3_key_name}. |

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting.property.s3BucketName"></a>

```csharp
public string S3BucketName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#s3_bucket_name CustomerprofilesDomain#s3_bucket_name}.

---

##### `S3KeyName`<sup>Optional</sup> <a name="S3KeyName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting.property.s3KeyName"></a>

```csharp
public string S3KeyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#s3_key_name CustomerprofilesDomain#s3_key_name}.

---

### CustomerprofilesDomainRuleBasedMatchingMatchingRules <a name="CustomerprofilesDomainRuleBasedMatchingMatchingRules" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CustomerprofilesDomainRuleBasedMatchingMatchingRules {
    string[] Rule
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRules.property.rule">Rule</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#rule CustomerprofilesDomain#rule}. |

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRules.property.rule"></a>

```csharp
public string[] Rule { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/customerprofiles_domain#rule CustomerprofilesDomain#rule}.

---

## Classes <a name="Classes" id="Classes"></a>

### CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference <a name="CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.resetSourceName">ResetSourceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSourceName` <a name="ResetSourceName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.resetSourceName"></a>

```csharp
private void ResetSourceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.conflictResolvingModelInput">ConflictResolvingModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.sourceNameInput">SourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.conflictResolvingModel">ConflictResolvingModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.sourceName">SourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution">CustomerprofilesDomainMatchingAutoMergingConflictResolution</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConflictResolvingModelInput`<sup>Optional</sup> <a name="ConflictResolvingModelInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.conflictResolvingModelInput"></a>

```csharp
public string ConflictResolvingModelInput { get; }
```

- *Type:* string

---

##### `SourceNameInput`<sup>Optional</sup> <a name="SourceNameInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.sourceNameInput"></a>

```csharp
public string SourceNameInput { get; }
```

- *Type:* string

---

##### `ConflictResolvingModel`<sup>Required</sup> <a name="ConflictResolvingModel" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.conflictResolvingModel"></a>

```csharp
public string ConflictResolvingModel { get; }
```

- *Type:* string

---

##### `SourceName`<sup>Required</sup> <a name="SourceName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.sourceName"></a>

```csharp
public string SourceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.internalValue"></a>

```csharp
public CustomerprofilesDomainMatchingAutoMergingConflictResolution InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution">CustomerprofilesDomainMatchingAutoMergingConflictResolution</a>

---


### CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference <a name="CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.property.matchingAttributesListInput">MatchingAttributesListInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.property.matchingAttributesList">MatchingAttributesList</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidation">CustomerprofilesDomainMatchingAutoMergingConsolidation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MatchingAttributesListInput`<sup>Optional</sup> <a name="MatchingAttributesListInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.property.matchingAttributesListInput"></a>

```csharp
public object MatchingAttributesListInput { get; }
```

- *Type:* object

---

##### `MatchingAttributesList`<sup>Required</sup> <a name="MatchingAttributesList" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.property.matchingAttributesList"></a>

```csharp
public object MatchingAttributesList { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.property.internalValue"></a>

```csharp
public CustomerprofilesDomainMatchingAutoMergingConsolidation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidation">CustomerprofilesDomainMatchingAutoMergingConsolidation</a>

---


### CustomerprofilesDomainMatchingAutoMergingOutputReference <a name="CustomerprofilesDomainMatchingAutoMergingOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CustomerprofilesDomainMatchingAutoMergingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.putConflictResolution">PutConflictResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.putConsolidation">PutConsolidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.resetConflictResolution">ResetConflictResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.resetConsolidation">ResetConsolidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.resetMinAllowedConfidenceScoreForMerging">ResetMinAllowedConfidenceScoreForMerging</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConflictResolution` <a name="PutConflictResolution" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.putConflictResolution"></a>

```csharp
private void PutConflictResolution(CustomerprofilesDomainMatchingAutoMergingConflictResolution Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.putConflictResolution.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution">CustomerprofilesDomainMatchingAutoMergingConflictResolution</a>

---

##### `PutConsolidation` <a name="PutConsolidation" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.putConsolidation"></a>

```csharp
private void PutConsolidation(CustomerprofilesDomainMatchingAutoMergingConsolidation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.putConsolidation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidation">CustomerprofilesDomainMatchingAutoMergingConsolidation</a>

---

##### `ResetConflictResolution` <a name="ResetConflictResolution" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.resetConflictResolution"></a>

```csharp
private void ResetConflictResolution()
```

##### `ResetConsolidation` <a name="ResetConsolidation" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.resetConsolidation"></a>

```csharp
private void ResetConsolidation()
```

##### `ResetMinAllowedConfidenceScoreForMerging` <a name="ResetMinAllowedConfidenceScoreForMerging" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.resetMinAllowedConfidenceScoreForMerging"></a>

```csharp
private void ResetMinAllowedConfidenceScoreForMerging()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.conflictResolution">ConflictResolution</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference">CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.consolidation">Consolidation</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference">CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.conflictResolutionInput">ConflictResolutionInput</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution">CustomerprofilesDomainMatchingAutoMergingConflictResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.consolidationInput">ConsolidationInput</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidation">CustomerprofilesDomainMatchingAutoMergingConsolidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.minAllowedConfidenceScoreForMergingInput">MinAllowedConfidenceScoreForMergingInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.minAllowedConfidenceScoreForMerging">MinAllowedConfidenceScoreForMerging</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging">CustomerprofilesDomainMatchingAutoMerging</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConflictResolution`<sup>Required</sup> <a name="ConflictResolution" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.conflictResolution"></a>

```csharp
public CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference ConflictResolution { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference">CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference</a>

---

##### `Consolidation`<sup>Required</sup> <a name="Consolidation" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.consolidation"></a>

```csharp
public CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference Consolidation { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference">CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference</a>

---

##### `ConflictResolutionInput`<sup>Optional</sup> <a name="ConflictResolutionInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.conflictResolutionInput"></a>

```csharp
public CustomerprofilesDomainMatchingAutoMergingConflictResolution ConflictResolutionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution">CustomerprofilesDomainMatchingAutoMergingConflictResolution</a>

---

##### `ConsolidationInput`<sup>Optional</sup> <a name="ConsolidationInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.consolidationInput"></a>

```csharp
public CustomerprofilesDomainMatchingAutoMergingConsolidation ConsolidationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidation">CustomerprofilesDomainMatchingAutoMergingConsolidation</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `MinAllowedConfidenceScoreForMergingInput`<sup>Optional</sup> <a name="MinAllowedConfidenceScoreForMergingInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.minAllowedConfidenceScoreForMergingInput"></a>

```csharp
public double MinAllowedConfidenceScoreForMergingInput { get; }
```

- *Type:* double

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `MinAllowedConfidenceScoreForMerging`<sup>Required</sup> <a name="MinAllowedConfidenceScoreForMerging" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.minAllowedConfidenceScoreForMerging"></a>

```csharp
public double MinAllowedConfidenceScoreForMerging { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.internalValue"></a>

```csharp
public CustomerprofilesDomainMatchingAutoMerging InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging">CustomerprofilesDomainMatchingAutoMerging</a>

---


### CustomerprofilesDomainMatchingExportingConfigOutputReference <a name="CustomerprofilesDomainMatchingExportingConfigOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CustomerprofilesDomainMatchingExportingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.putS3Exporting">PutS3Exporting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.resetS3Exporting">ResetS3Exporting</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3Exporting` <a name="PutS3Exporting" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.putS3Exporting"></a>

```csharp
private void PutS3Exporting(CustomerprofilesDomainMatchingExportingConfigS3Exporting Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.putS3Exporting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting">CustomerprofilesDomainMatchingExportingConfigS3Exporting</a>

---

##### `ResetS3Exporting` <a name="ResetS3Exporting" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.resetS3Exporting"></a>

```csharp
private void ResetS3Exporting()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.property.s3Exporting">S3Exporting</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference">CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.property.s3ExportingInput">S3ExportingInput</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting">CustomerprofilesDomainMatchingExportingConfigS3Exporting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfig">CustomerprofilesDomainMatchingExportingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3Exporting`<sup>Required</sup> <a name="S3Exporting" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.property.s3Exporting"></a>

```csharp
public CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference S3Exporting { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference">CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference</a>

---

##### `S3ExportingInput`<sup>Optional</sup> <a name="S3ExportingInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.property.s3ExportingInput"></a>

```csharp
public CustomerprofilesDomainMatchingExportingConfigS3Exporting S3ExportingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting">CustomerprofilesDomainMatchingExportingConfigS3Exporting</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.property.internalValue"></a>

```csharp
public CustomerprofilesDomainMatchingExportingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfig">CustomerprofilesDomainMatchingExportingConfig</a>

---


### CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference <a name="CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.resetS3KeyName">ResetS3KeyName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetS3KeyName` <a name="ResetS3KeyName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.resetS3KeyName"></a>

```csharp
private void ResetS3KeyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.s3BucketNameInput">S3BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.s3KeyNameInput">S3KeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.s3BucketName">S3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.s3KeyName">S3KeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting">CustomerprofilesDomainMatchingExportingConfigS3Exporting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3BucketNameInput`<sup>Optional</sup> <a name="S3BucketNameInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.s3BucketNameInput"></a>

```csharp
public string S3BucketNameInput { get; }
```

- *Type:* string

---

##### `S3KeyNameInput`<sup>Optional</sup> <a name="S3KeyNameInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.s3KeyNameInput"></a>

```csharp
public string S3KeyNameInput { get; }
```

- *Type:* string

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.s3BucketName"></a>

```csharp
public string S3BucketName { get; }
```

- *Type:* string

---

##### `S3KeyName`<sup>Required</sup> <a name="S3KeyName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.s3KeyName"></a>

```csharp
public string S3KeyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.internalValue"></a>

```csharp
public CustomerprofilesDomainMatchingExportingConfigS3Exporting InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting">CustomerprofilesDomainMatchingExportingConfigS3Exporting</a>

---


### CustomerprofilesDomainMatchingJobScheduleOutputReference <a name="CustomerprofilesDomainMatchingJobScheduleOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CustomerprofilesDomainMatchingJobScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.dayOfTheWeekInput">DayOfTheWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.timeInput">TimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.dayOfTheWeek">DayOfTheWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.time">Time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule">CustomerprofilesDomainMatchingJobSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayOfTheWeekInput`<sup>Optional</sup> <a name="DayOfTheWeekInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.dayOfTheWeekInput"></a>

```csharp
public string DayOfTheWeekInput { get; }
```

- *Type:* string

---

##### `TimeInput`<sup>Optional</sup> <a name="TimeInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.timeInput"></a>

```csharp
public string TimeInput { get; }
```

- *Type:* string

---

##### `DayOfTheWeek`<sup>Required</sup> <a name="DayOfTheWeek" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.dayOfTheWeek"></a>

```csharp
public string DayOfTheWeek { get; }
```

- *Type:* string

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.time"></a>

```csharp
public string Time { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.internalValue"></a>

```csharp
public CustomerprofilesDomainMatchingJobSchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule">CustomerprofilesDomainMatchingJobSchedule</a>

---


### CustomerprofilesDomainMatchingOutputReference <a name="CustomerprofilesDomainMatchingOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CustomerprofilesDomainMatchingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.putAutoMerging">PutAutoMerging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.putExportingConfig">PutExportingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.putJobSchedule">PutJobSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.resetAutoMerging">ResetAutoMerging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.resetExportingConfig">ResetExportingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.resetJobSchedule">ResetJobSchedule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoMerging` <a name="PutAutoMerging" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.putAutoMerging"></a>

```csharp
private void PutAutoMerging(CustomerprofilesDomainMatchingAutoMerging Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.putAutoMerging.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging">CustomerprofilesDomainMatchingAutoMerging</a>

---

##### `PutExportingConfig` <a name="PutExportingConfig" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.putExportingConfig"></a>

```csharp
private void PutExportingConfig(CustomerprofilesDomainMatchingExportingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.putExportingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfig">CustomerprofilesDomainMatchingExportingConfig</a>

---

##### `PutJobSchedule` <a name="PutJobSchedule" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.putJobSchedule"></a>

```csharp
private void PutJobSchedule(CustomerprofilesDomainMatchingJobSchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.putJobSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule">CustomerprofilesDomainMatchingJobSchedule</a>

---

##### `ResetAutoMerging` <a name="ResetAutoMerging" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.resetAutoMerging"></a>

```csharp
private void ResetAutoMerging()
```

##### `ResetExportingConfig` <a name="ResetExportingConfig" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.resetExportingConfig"></a>

```csharp
private void ResetExportingConfig()
```

##### `ResetJobSchedule` <a name="ResetJobSchedule" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.resetJobSchedule"></a>

```csharp
private void ResetJobSchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.autoMerging">AutoMerging</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference">CustomerprofilesDomainMatchingAutoMergingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.exportingConfig">ExportingConfig</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference">CustomerprofilesDomainMatchingExportingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.jobSchedule">JobSchedule</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference">CustomerprofilesDomainMatchingJobScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.autoMergingInput">AutoMergingInput</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging">CustomerprofilesDomainMatchingAutoMerging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.exportingConfigInput">ExportingConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfig">CustomerprofilesDomainMatchingExportingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.jobScheduleInput">JobScheduleInput</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule">CustomerprofilesDomainMatchingJobSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching">CustomerprofilesDomainMatching</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoMerging`<sup>Required</sup> <a name="AutoMerging" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.autoMerging"></a>

```csharp
public CustomerprofilesDomainMatchingAutoMergingOutputReference AutoMerging { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference">CustomerprofilesDomainMatchingAutoMergingOutputReference</a>

---

##### `ExportingConfig`<sup>Required</sup> <a name="ExportingConfig" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.exportingConfig"></a>

```csharp
public CustomerprofilesDomainMatchingExportingConfigOutputReference ExportingConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference">CustomerprofilesDomainMatchingExportingConfigOutputReference</a>

---

##### `JobSchedule`<sup>Required</sup> <a name="JobSchedule" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.jobSchedule"></a>

```csharp
public CustomerprofilesDomainMatchingJobScheduleOutputReference JobSchedule { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference">CustomerprofilesDomainMatchingJobScheduleOutputReference</a>

---

##### `AutoMergingInput`<sup>Optional</sup> <a name="AutoMergingInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.autoMergingInput"></a>

```csharp
public CustomerprofilesDomainMatchingAutoMerging AutoMergingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging">CustomerprofilesDomainMatchingAutoMerging</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `ExportingConfigInput`<sup>Optional</sup> <a name="ExportingConfigInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.exportingConfigInput"></a>

```csharp
public CustomerprofilesDomainMatchingExportingConfig ExportingConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfig">CustomerprofilesDomainMatchingExportingConfig</a>

---

##### `JobScheduleInput`<sup>Optional</sup> <a name="JobScheduleInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.jobScheduleInput"></a>

```csharp
public CustomerprofilesDomainMatchingJobSchedule JobScheduleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule">CustomerprofilesDomainMatchingJobSchedule</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.internalValue"></a>

```csharp
public CustomerprofilesDomainMatching InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching">CustomerprofilesDomainMatching</a>

---


### CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference <a name="CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.resetAddress">ResetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.resetEmailAddress">ResetEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.resetPhoneNumber">ResetPhoneNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress` <a name="ResetAddress" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.resetAddress"></a>

```csharp
private void ResetAddress()
```

##### `ResetEmailAddress` <a name="ResetEmailAddress" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.resetEmailAddress"></a>

```csharp
private void ResetEmailAddress()
```

##### `ResetPhoneNumber` <a name="ResetPhoneNumber" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.resetPhoneNumber"></a>

```csharp
private void ResetPhoneNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.addressInput">AddressInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.attributeMatchingModelInput">AttributeMatchingModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.emailAddressInput">EmailAddressInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.address">Address</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.attributeMatchingModel">AttributeMatchingModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.emailAddress">EmailAddress</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector">CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.addressInput"></a>

```csharp
public string[] AddressInput { get; }
```

- *Type:* string[]

---

##### `AttributeMatchingModelInput`<sup>Optional</sup> <a name="AttributeMatchingModelInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.attributeMatchingModelInput"></a>

```csharp
public string AttributeMatchingModelInput { get; }
```

- *Type:* string

---

##### `EmailAddressInput`<sup>Optional</sup> <a name="EmailAddressInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.emailAddressInput"></a>

```csharp
public string[] EmailAddressInput { get; }
```

- *Type:* string[]

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.phoneNumberInput"></a>

```csharp
public string[] PhoneNumberInput { get; }
```

- *Type:* string[]

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.address"></a>

```csharp
public string[] Address { get; }
```

- *Type:* string[]

---

##### `AttributeMatchingModel`<sup>Required</sup> <a name="AttributeMatchingModel" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.attributeMatchingModel"></a>

```csharp
public string AttributeMatchingModel { get; }
```

- *Type:* string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.emailAddress"></a>

```csharp
public string[] EmailAddress { get; }
```

- *Type:* string[]

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.phoneNumber"></a>

```csharp
public string[] PhoneNumber { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.internalValue"></a>

```csharp
public CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector">CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector</a>

---


### CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference <a name="CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.resetSourceName">ResetSourceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSourceName` <a name="ResetSourceName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.resetSourceName"></a>

```csharp
private void ResetSourceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.conflictResolvingModelInput">ConflictResolvingModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.sourceNameInput">SourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.conflictResolvingModel">ConflictResolvingModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.sourceName">SourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution">CustomerprofilesDomainRuleBasedMatchingConflictResolution</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConflictResolvingModelInput`<sup>Optional</sup> <a name="ConflictResolvingModelInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.conflictResolvingModelInput"></a>

```csharp
public string ConflictResolvingModelInput { get; }
```

- *Type:* string

---

##### `SourceNameInput`<sup>Optional</sup> <a name="SourceNameInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.sourceNameInput"></a>

```csharp
public string SourceNameInput { get; }
```

- *Type:* string

---

##### `ConflictResolvingModel`<sup>Required</sup> <a name="ConflictResolvingModel" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.conflictResolvingModel"></a>

```csharp
public string ConflictResolvingModel { get; }
```

- *Type:* string

---

##### `SourceName`<sup>Required</sup> <a name="SourceName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.sourceName"></a>

```csharp
public string SourceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.internalValue"></a>

```csharp
public CustomerprofilesDomainRuleBasedMatchingConflictResolution InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution">CustomerprofilesDomainRuleBasedMatchingConflictResolution</a>

---


### CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference <a name="CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.putS3Exporting">PutS3Exporting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.resetS3Exporting">ResetS3Exporting</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3Exporting` <a name="PutS3Exporting" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.putS3Exporting"></a>

```csharp
private void PutS3Exporting(CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.putS3Exporting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting">CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting</a>

---

##### `ResetS3Exporting` <a name="ResetS3Exporting" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.resetS3Exporting"></a>

```csharp
private void ResetS3Exporting()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.property.s3Exporting">S3Exporting</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference">CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.property.s3ExportingInput">S3ExportingInput</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting">CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfig">CustomerprofilesDomainRuleBasedMatchingExportingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3Exporting`<sup>Required</sup> <a name="S3Exporting" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.property.s3Exporting"></a>

```csharp
public CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference S3Exporting { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference">CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference</a>

---

##### `S3ExportingInput`<sup>Optional</sup> <a name="S3ExportingInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.property.s3ExportingInput"></a>

```csharp
public CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting S3ExportingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting">CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.property.internalValue"></a>

```csharp
public CustomerprofilesDomainRuleBasedMatchingExportingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfig">CustomerprofilesDomainRuleBasedMatchingExportingConfig</a>

---


### CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference <a name="CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.resetS3KeyName">ResetS3KeyName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetS3KeyName` <a name="ResetS3KeyName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.resetS3KeyName"></a>

```csharp
private void ResetS3KeyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.s3BucketNameInput">S3BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.s3KeyNameInput">S3KeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.s3BucketName">S3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.s3KeyName">S3KeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting">CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3BucketNameInput`<sup>Optional</sup> <a name="S3BucketNameInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.s3BucketNameInput"></a>

```csharp
public string S3BucketNameInput { get; }
```

- *Type:* string

---

##### `S3KeyNameInput`<sup>Optional</sup> <a name="S3KeyNameInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.s3KeyNameInput"></a>

```csharp
public string S3KeyNameInput { get; }
```

- *Type:* string

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.s3BucketName"></a>

```csharp
public string S3BucketName { get; }
```

- *Type:* string

---

##### `S3KeyName`<sup>Required</sup> <a name="S3KeyName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.s3KeyName"></a>

```csharp
public string S3KeyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.internalValue"></a>

```csharp
public CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting">CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting</a>

---


### CustomerprofilesDomainRuleBasedMatchingMatchingRulesList <a name="CustomerprofilesDomainRuleBasedMatchingMatchingRulesList" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CustomerprofilesDomainRuleBasedMatchingMatchingRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.get"></a>

```csharp
private CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference <a name="CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.property.ruleInput">RuleInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.property.rule">Rule</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.property.ruleInput"></a>

```csharp
public string[] RuleInput { get; }
```

- *Type:* string[]

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.property.rule"></a>

```csharp
public string[] Rule { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CustomerprofilesDomainRuleBasedMatchingOutputReference <a name="CustomerprofilesDomainRuleBasedMatchingOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CustomerprofilesDomainRuleBasedMatchingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putAttributeTypesSelector">PutAttributeTypesSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putConflictResolution">PutConflictResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putExportingConfig">PutExportingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putMatchingRules">PutMatchingRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetAttributeTypesSelector">ResetAttributeTypesSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetConflictResolution">ResetConflictResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetExportingConfig">ResetExportingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetMatchingRules">ResetMatchingRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetMaxAllowedRuleLevelForMatching">ResetMaxAllowedRuleLevelForMatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetMaxAllowedRuleLevelForMerging">ResetMaxAllowedRuleLevelForMerging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAttributeTypesSelector` <a name="PutAttributeTypesSelector" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putAttributeTypesSelector"></a>

```csharp
private void PutAttributeTypesSelector(CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putAttributeTypesSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector">CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector</a>

---

##### `PutConflictResolution` <a name="PutConflictResolution" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putConflictResolution"></a>

```csharp
private void PutConflictResolution(CustomerprofilesDomainRuleBasedMatchingConflictResolution Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putConflictResolution.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution">CustomerprofilesDomainRuleBasedMatchingConflictResolution</a>

---

##### `PutExportingConfig` <a name="PutExportingConfig" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putExportingConfig"></a>

```csharp
private void PutExportingConfig(CustomerprofilesDomainRuleBasedMatchingExportingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putExportingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfig">CustomerprofilesDomainRuleBasedMatchingExportingConfig</a>

---

##### `PutMatchingRules` <a name="PutMatchingRules" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putMatchingRules"></a>

```csharp
private void PutMatchingRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putMatchingRules.parameter.value"></a>

- *Type:* object

---

##### `ResetAttributeTypesSelector` <a name="ResetAttributeTypesSelector" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetAttributeTypesSelector"></a>

```csharp
private void ResetAttributeTypesSelector()
```

##### `ResetConflictResolution` <a name="ResetConflictResolution" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetConflictResolution"></a>

```csharp
private void ResetConflictResolution()
```

##### `ResetExportingConfig` <a name="ResetExportingConfig" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetExportingConfig"></a>

```csharp
private void ResetExportingConfig()
```

##### `ResetMatchingRules` <a name="ResetMatchingRules" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetMatchingRules"></a>

```csharp
private void ResetMatchingRules()
```

##### `ResetMaxAllowedRuleLevelForMatching` <a name="ResetMaxAllowedRuleLevelForMatching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetMaxAllowedRuleLevelForMatching"></a>

```csharp
private void ResetMaxAllowedRuleLevelForMatching()
```

##### `ResetMaxAllowedRuleLevelForMerging` <a name="ResetMaxAllowedRuleLevelForMerging" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetMaxAllowedRuleLevelForMerging"></a>

```csharp
private void ResetMaxAllowedRuleLevelForMerging()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetStatus"></a>

```csharp
private void ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.attributeTypesSelector">AttributeTypesSelector</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference">CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.conflictResolution">ConflictResolution</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference">CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.exportingConfig">ExportingConfig</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference">CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.matchingRules">MatchingRules</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList">CustomerprofilesDomainRuleBasedMatchingMatchingRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.attributeTypesSelectorInput">AttributeTypesSelectorInput</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector">CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.conflictResolutionInput">ConflictResolutionInput</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution">CustomerprofilesDomainRuleBasedMatchingConflictResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.exportingConfigInput">ExportingConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfig">CustomerprofilesDomainRuleBasedMatchingExportingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.matchingRulesInput">MatchingRulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.maxAllowedRuleLevelForMatchingInput">MaxAllowedRuleLevelForMatchingInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.maxAllowedRuleLevelForMergingInput">MaxAllowedRuleLevelForMergingInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.maxAllowedRuleLevelForMatching">MaxAllowedRuleLevelForMatching</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.maxAllowedRuleLevelForMerging">MaxAllowedRuleLevelForMerging</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching">CustomerprofilesDomainRuleBasedMatching</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeTypesSelector`<sup>Required</sup> <a name="AttributeTypesSelector" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.attributeTypesSelector"></a>

```csharp
public CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference AttributeTypesSelector { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference">CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference</a>

---

##### `ConflictResolution`<sup>Required</sup> <a name="ConflictResolution" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.conflictResolution"></a>

```csharp
public CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference ConflictResolution { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference">CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference</a>

---

##### `ExportingConfig`<sup>Required</sup> <a name="ExportingConfig" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.exportingConfig"></a>

```csharp
public CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference ExportingConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference">CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference</a>

---

##### `MatchingRules`<sup>Required</sup> <a name="MatchingRules" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.matchingRules"></a>

```csharp
public CustomerprofilesDomainRuleBasedMatchingMatchingRulesList MatchingRules { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList">CustomerprofilesDomainRuleBasedMatchingMatchingRulesList</a>

---

##### `AttributeTypesSelectorInput`<sup>Optional</sup> <a name="AttributeTypesSelectorInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.attributeTypesSelectorInput"></a>

```csharp
public CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector AttributeTypesSelectorInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector">CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector</a>

---

##### `ConflictResolutionInput`<sup>Optional</sup> <a name="ConflictResolutionInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.conflictResolutionInput"></a>

```csharp
public CustomerprofilesDomainRuleBasedMatchingConflictResolution ConflictResolutionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution">CustomerprofilesDomainRuleBasedMatchingConflictResolution</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `ExportingConfigInput`<sup>Optional</sup> <a name="ExportingConfigInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.exportingConfigInput"></a>

```csharp
public CustomerprofilesDomainRuleBasedMatchingExportingConfig ExportingConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfig">CustomerprofilesDomainRuleBasedMatchingExportingConfig</a>

---

##### `MatchingRulesInput`<sup>Optional</sup> <a name="MatchingRulesInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.matchingRulesInput"></a>

```csharp
public object MatchingRulesInput { get; }
```

- *Type:* object

---

##### `MaxAllowedRuleLevelForMatchingInput`<sup>Optional</sup> <a name="MaxAllowedRuleLevelForMatchingInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.maxAllowedRuleLevelForMatchingInput"></a>

```csharp
public double MaxAllowedRuleLevelForMatchingInput { get; }
```

- *Type:* double

---

##### `MaxAllowedRuleLevelForMergingInput`<sup>Optional</sup> <a name="MaxAllowedRuleLevelForMergingInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.maxAllowedRuleLevelForMergingInput"></a>

```csharp
public double MaxAllowedRuleLevelForMergingInput { get; }
```

- *Type:* double

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `MaxAllowedRuleLevelForMatching`<sup>Required</sup> <a name="MaxAllowedRuleLevelForMatching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.maxAllowedRuleLevelForMatching"></a>

```csharp
public double MaxAllowedRuleLevelForMatching { get; }
```

- *Type:* double

---

##### `MaxAllowedRuleLevelForMerging`<sup>Required</sup> <a name="MaxAllowedRuleLevelForMerging" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.maxAllowedRuleLevelForMerging"></a>

```csharp
public double MaxAllowedRuleLevelForMerging { get; }
```

- *Type:* double

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.internalValue"></a>

```csharp
public CustomerprofilesDomainRuleBasedMatching InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching">CustomerprofilesDomainRuleBasedMatching</a>

---



