# `iamUserLoginProfile` Submodule <a name="`iamUserLoginProfile` Submodule" id="@cdktf/provider-aws.iamUserLoginProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamUserLoginProfile <a name="IamUserLoginProfile" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iam_user_login_profile aws_iam_user_login_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new IamUserLoginProfile(Construct Scope, string Id, IamUserLoginProfileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig">IamUserLoginProfileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig">IamUserLoginProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.resetPasswordLength">ResetPasswordLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.resetPasswordResetRequired">ResetPasswordResetRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.resetPgpKey">ResetPgpKey</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPasswordLength` <a name="ResetPasswordLength" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.resetPasswordLength"></a>

```csharp
private void ResetPasswordLength()
```

##### `ResetPasswordResetRequired` <a name="ResetPasswordResetRequired" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.resetPasswordResetRequired"></a>

```csharp
private void ResetPasswordResetRequired()
```

##### `ResetPgpKey` <a name="ResetPgpKey" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.resetPgpKey"></a>

```csharp
private void ResetPgpKey()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IamUserLoginProfile resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

IamUserLoginProfile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

IamUserLoginProfile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

IamUserLoginProfile.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

IamUserLoginProfile.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IamUserLoginProfile resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IamUserLoginProfile to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IamUserLoginProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iam_user_login_profile#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IamUserLoginProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.encryptedPassword">EncryptedPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.keyFingerprint">KeyFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.passwordLengthInput">PasswordLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.passwordResetRequiredInput">PasswordResetRequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.pgpKeyInput">PgpKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.userInput">UserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.passwordLength">PasswordLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.passwordResetRequired">PasswordResetRequired</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.pgpKey">PgpKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.user">User</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `EncryptedPassword`<sup>Required</sup> <a name="EncryptedPassword" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.encryptedPassword"></a>

```csharp
public string EncryptedPassword { get; }
```

- *Type:* string

---

##### `KeyFingerprint`<sup>Required</sup> <a name="KeyFingerprint" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.keyFingerprint"></a>

```csharp
public string KeyFingerprint { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PasswordLengthInput`<sup>Optional</sup> <a name="PasswordLengthInput" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.passwordLengthInput"></a>

```csharp
public double PasswordLengthInput { get; }
```

- *Type:* double

---

##### `PasswordResetRequiredInput`<sup>Optional</sup> <a name="PasswordResetRequiredInput" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.passwordResetRequiredInput"></a>

```csharp
public object PasswordResetRequiredInput { get; }
```

- *Type:* object

---

##### `PgpKeyInput`<sup>Optional</sup> <a name="PgpKeyInput" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.pgpKeyInput"></a>

```csharp
public string PgpKeyInput { get; }
```

- *Type:* string

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.userInput"></a>

```csharp
public string UserInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PasswordLength`<sup>Required</sup> <a name="PasswordLength" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.passwordLength"></a>

```csharp
public double PasswordLength { get; }
```

- *Type:* double

---

##### `PasswordResetRequired`<sup>Required</sup> <a name="PasswordResetRequired" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.passwordResetRequired"></a>

```csharp
public object PasswordResetRequired { get; }
```

- *Type:* object

---

##### `PgpKey`<sup>Required</sup> <a name="PgpKey" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.pgpKey"></a>

```csharp
public string PgpKey { get; }
```

- *Type:* string

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.user"></a>

```csharp
public string User { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IamUserLoginProfileConfig <a name="IamUserLoginProfileConfig" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new IamUserLoginProfileConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string User,
    string Id = null,
    double PasswordLength = null,
    object PasswordResetRequired = null,
    string PgpKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.user">User</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iam_user_login_profile#user IamUserLoginProfile#user}. |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iam_user_login_profile#id IamUserLoginProfile#id}. |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.passwordLength">PasswordLength</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iam_user_login_profile#password_length IamUserLoginProfile#password_length}. |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.passwordResetRequired">PasswordResetRequired</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iam_user_login_profile#password_reset_required IamUserLoginProfile#password_reset_required}. |
| <code><a href="#@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.pgpKey">PgpKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iam_user_login_profile#pgp_key IamUserLoginProfile#pgp_key}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.user"></a>

```csharp
public string User { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iam_user_login_profile#user IamUserLoginProfile#user}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iam_user_login_profile#id IamUserLoginProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PasswordLength`<sup>Optional</sup> <a name="PasswordLength" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.passwordLength"></a>

```csharp
public double PasswordLength { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iam_user_login_profile#password_length IamUserLoginProfile#password_length}.

---

##### `PasswordResetRequired`<sup>Optional</sup> <a name="PasswordResetRequired" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.passwordResetRequired"></a>

```csharp
public object PasswordResetRequired { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iam_user_login_profile#password_reset_required IamUserLoginProfile#password_reset_required}.

---

##### `PgpKey`<sup>Optional</sup> <a name="PgpKey" id="@cdktf/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.pgpKey"></a>

```csharp
public string PgpKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iam_user_login_profile#pgp_key IamUserLoginProfile#pgp_key}.

---



