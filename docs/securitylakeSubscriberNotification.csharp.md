# `securitylakeSubscriberNotification` Submodule <a name="`securitylakeSubscriberNotification` Submodule" id="@cdktf/provider-aws.securitylakeSubscriberNotification"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecuritylakeSubscriberNotification <a name="SecuritylakeSubscriberNotification" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber_notification aws_securitylake_subscriber_notification}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecuritylakeSubscriberNotification(Construct Scope, string Id, SecuritylakeSubscriberNotificationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig">SecuritylakeSubscriberNotificationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig">SecuritylakeSubscriberNotificationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.resetConfiguration">ResetConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.putConfiguration"></a>

```csharp
private void PutConfiguration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.putConfiguration.parameter.value"></a>

- *Type:* object

---

##### `ResetConfiguration` <a name="ResetConfiguration" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.resetConfiguration"></a>

```csharp
private void ResetConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SecuritylakeSubscriberNotification resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SecuritylakeSubscriberNotification.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SecuritylakeSubscriberNotification.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SecuritylakeSubscriberNotification.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SecuritylakeSubscriberNotification.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SecuritylakeSubscriberNotification resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecuritylakeSubscriberNotification to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecuritylakeSubscriberNotification that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber_notification#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SecuritylakeSubscriberNotification to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.configuration">Configuration</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList">SecuritylakeSubscriberNotificationConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.endpointId">EndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.configurationInput">ConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.subscriberIdInput">SubscriberIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.subscriberId">SubscriberId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.configuration"></a>

```csharp
public SecuritylakeSubscriberNotificationConfigurationList Configuration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList">SecuritylakeSubscriberNotificationConfigurationList</a>

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.endpointId"></a>

```csharp
public string EndpointId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.configurationInput"></a>

```csharp
public object ConfigurationInput { get; }
```

- *Type:* object

---

##### `SubscriberIdInput`<sup>Optional</sup> <a name="SubscriberIdInput" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.subscriberIdInput"></a>

```csharp
public string SubscriberIdInput { get; }
```

- *Type:* string

---

##### `SubscriberId`<sup>Required</sup> <a name="SubscriberId" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.subscriberId"></a>

```csharp
public string SubscriberId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecuritylakeSubscriberNotificationConfig <a name="SecuritylakeSubscriberNotificationConfig" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecuritylakeSubscriberNotificationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string SubscriberId,
    object Configuration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.subscriberId">SubscriberId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber_notification#subscriber_id SecuritylakeSubscriberNotification#subscriber_id}. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.configuration">Configuration</a></code> | <code>object</code> | configuration block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `SubscriberId`<sup>Required</sup> <a name="SubscriberId" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.subscriberId"></a>

```csharp
public string SubscriberId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber_notification#subscriber_id SecuritylakeSubscriberNotification#subscriber_id}.

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.configuration"></a>

```csharp
public object Configuration { get; set; }
```

- *Type:* object

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber_notification#configuration SecuritylakeSubscriberNotification#configuration}

---

### SecuritylakeSubscriberNotificationConfiguration <a name="SecuritylakeSubscriberNotificationConfiguration" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecuritylakeSubscriberNotificationConfiguration {
    object HttpsNotificationConfiguration = null,
    object SqsNotificationConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfiguration.property.httpsNotificationConfiguration">HttpsNotificationConfiguration</a></code> | <code>object</code> | https_notification_configuration block. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfiguration.property.sqsNotificationConfiguration">SqsNotificationConfiguration</a></code> | <code>object</code> | sqs_notification_configuration block. |

---

##### `HttpsNotificationConfiguration`<sup>Optional</sup> <a name="HttpsNotificationConfiguration" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfiguration.property.httpsNotificationConfiguration"></a>

```csharp
public object HttpsNotificationConfiguration { get; set; }
```

- *Type:* object

https_notification_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber_notification#https_notification_configuration SecuritylakeSubscriberNotification#https_notification_configuration}

---

##### `SqsNotificationConfiguration`<sup>Optional</sup> <a name="SqsNotificationConfiguration" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfiguration.property.sqsNotificationConfiguration"></a>

```csharp
public object SqsNotificationConfiguration { get; set; }
```

- *Type:* object

sqs_notification_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber_notification#sqs_notification_configuration SecuritylakeSubscriberNotification#sqs_notification_configuration}

---

### SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfiguration <a name="SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfiguration" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfiguration {
    string AuthorizationApiKeyName = null,
    string AuthorizationApiKeyValue = null,
    string Endpoint = null,
    string HttpMethod = null,
    string TargetRoleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfiguration.property.authorizationApiKeyName">AuthorizationApiKeyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber_notification#authorization_api_key_name SecuritylakeSubscriberNotification#authorization_api_key_name}. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfiguration.property.authorizationApiKeyValue">AuthorizationApiKeyValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber_notification#authorization_api_key_value SecuritylakeSubscriberNotification#authorization_api_key_value}. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfiguration.property.endpoint">Endpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber_notification#endpoint SecuritylakeSubscriberNotification#endpoint}. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfiguration.property.httpMethod">HttpMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber_notification#http_method SecuritylakeSubscriberNotification#http_method}. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfiguration.property.targetRoleArn">TargetRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber_notification#target_role_arn SecuritylakeSubscriberNotification#target_role_arn}. |

---

##### `AuthorizationApiKeyName`<sup>Optional</sup> <a name="AuthorizationApiKeyName" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfiguration.property.authorizationApiKeyName"></a>

```csharp
public string AuthorizationApiKeyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber_notification#authorization_api_key_name SecuritylakeSubscriberNotification#authorization_api_key_name}.

---

##### `AuthorizationApiKeyValue`<sup>Optional</sup> <a name="AuthorizationApiKeyValue" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfiguration.property.authorizationApiKeyValue"></a>

```csharp
public string AuthorizationApiKeyValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber_notification#authorization_api_key_value SecuritylakeSubscriberNotification#authorization_api_key_value}.

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfiguration.property.endpoint"></a>

```csharp
public string Endpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber_notification#endpoint SecuritylakeSubscriberNotification#endpoint}.

---

##### `HttpMethod`<sup>Optional</sup> <a name="HttpMethod" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfiguration.property.httpMethod"></a>

```csharp
public string HttpMethod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber_notification#http_method SecuritylakeSubscriberNotification#http_method}.

---

##### `TargetRoleArn`<sup>Optional</sup> <a name="TargetRoleArn" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfiguration.property.targetRoleArn"></a>

```csharp
public string TargetRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/securitylake_subscriber_notification#target_role_arn SecuritylakeSubscriberNotification#target_role_arn}.

---

### SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfiguration <a name="SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfiguration" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfiguration {

};
```


## Classes <a name="Classes" id="Classes"></a>

### SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList <a name="SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.get"></a>

```csharp
private SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference <a name="SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.resetAuthorizationApiKeyName">ResetAuthorizationApiKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.resetAuthorizationApiKeyValue">ResetAuthorizationApiKeyValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.resetHttpMethod">ResetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.resetTargetRoleArn">ResetTargetRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorizationApiKeyName` <a name="ResetAuthorizationApiKeyName" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.resetAuthorizationApiKeyName"></a>

```csharp
private void ResetAuthorizationApiKeyName()
```

##### `ResetAuthorizationApiKeyValue` <a name="ResetAuthorizationApiKeyValue" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.resetAuthorizationApiKeyValue"></a>

```csharp
private void ResetAuthorizationApiKeyValue()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.resetEndpoint"></a>

```csharp
private void ResetEndpoint()
```

##### `ResetHttpMethod` <a name="ResetHttpMethod" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.resetHttpMethod"></a>

```csharp
private void ResetHttpMethod()
```

##### `ResetTargetRoleArn` <a name="ResetTargetRoleArn" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.resetTargetRoleArn"></a>

```csharp
private void ResetTargetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.authorizationApiKeyNameInput">AuthorizationApiKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.authorizationApiKeyValueInput">AuthorizationApiKeyValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.endpointInput">EndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.httpMethodInput">HttpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.targetRoleArnInput">TargetRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.authorizationApiKeyName">AuthorizationApiKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.authorizationApiKeyValue">AuthorizationApiKeyValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.httpMethod">HttpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.targetRoleArn">TargetRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationApiKeyNameInput`<sup>Optional</sup> <a name="AuthorizationApiKeyNameInput" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.authorizationApiKeyNameInput"></a>

```csharp
public string AuthorizationApiKeyNameInput { get; }
```

- *Type:* string

---

##### `AuthorizationApiKeyValueInput`<sup>Optional</sup> <a name="AuthorizationApiKeyValueInput" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.authorizationApiKeyValueInput"></a>

```csharp
public string AuthorizationApiKeyValueInput { get; }
```

- *Type:* string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.endpointInput"></a>

```csharp
public string EndpointInput { get; }
```

- *Type:* string

---

##### `HttpMethodInput`<sup>Optional</sup> <a name="HttpMethodInput" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.httpMethodInput"></a>

```csharp
public string HttpMethodInput { get; }
```

- *Type:* string

---

##### `TargetRoleArnInput`<sup>Optional</sup> <a name="TargetRoleArnInput" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.targetRoleArnInput"></a>

```csharp
public string TargetRoleArnInput { get; }
```

- *Type:* string

---

##### `AuthorizationApiKeyName`<sup>Required</sup> <a name="AuthorizationApiKeyName" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.authorizationApiKeyName"></a>

```csharp
public string AuthorizationApiKeyName { get; }
```

- *Type:* string

---

##### `AuthorizationApiKeyValue`<sup>Required</sup> <a name="AuthorizationApiKeyValue" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.authorizationApiKeyValue"></a>

```csharp
public string AuthorizationApiKeyValue { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.httpMethod"></a>

```csharp
public string HttpMethod { get; }
```

- *Type:* string

---

##### `TargetRoleArn`<sup>Required</sup> <a name="TargetRoleArn" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.targetRoleArn"></a>

```csharp
public string TargetRoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecuritylakeSubscriberNotificationConfigurationList <a name="SecuritylakeSubscriberNotificationConfigurationList" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecuritylakeSubscriberNotificationConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.get"></a>

```csharp
private SecuritylakeSubscriberNotificationConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecuritylakeSubscriberNotificationConfigurationOutputReference <a name="SecuritylakeSubscriberNotificationConfigurationOutputReference" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecuritylakeSubscriberNotificationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.putHttpsNotificationConfiguration">PutHttpsNotificationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.putSqsNotificationConfiguration">PutSqsNotificationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.resetHttpsNotificationConfiguration">ResetHttpsNotificationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.resetSqsNotificationConfiguration">ResetSqsNotificationConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHttpsNotificationConfiguration` <a name="PutHttpsNotificationConfiguration" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.putHttpsNotificationConfiguration"></a>

```csharp
private void PutHttpsNotificationConfiguration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.putHttpsNotificationConfiguration.parameter.value"></a>

- *Type:* object

---

##### `PutSqsNotificationConfiguration` <a name="PutSqsNotificationConfiguration" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.putSqsNotificationConfiguration"></a>

```csharp
private void PutSqsNotificationConfiguration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.putSqsNotificationConfiguration.parameter.value"></a>

- *Type:* object

---

##### `ResetHttpsNotificationConfiguration` <a name="ResetHttpsNotificationConfiguration" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.resetHttpsNotificationConfiguration"></a>

```csharp
private void ResetHttpsNotificationConfiguration()
```

##### `ResetSqsNotificationConfiguration` <a name="ResetSqsNotificationConfiguration" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.resetSqsNotificationConfiguration"></a>

```csharp
private void ResetSqsNotificationConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.property.httpsNotificationConfiguration">HttpsNotificationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList">SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.property.sqsNotificationConfiguration">SqsNotificationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList">SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.property.httpsNotificationConfigurationInput">HttpsNotificationConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.property.sqsNotificationConfigurationInput">SqsNotificationConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HttpsNotificationConfiguration`<sup>Required</sup> <a name="HttpsNotificationConfiguration" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.property.httpsNotificationConfiguration"></a>

```csharp
public SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList HttpsNotificationConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList">SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList</a>

---

##### `SqsNotificationConfiguration`<sup>Required</sup> <a name="SqsNotificationConfiguration" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.property.sqsNotificationConfiguration"></a>

```csharp
public SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList SqsNotificationConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList">SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList</a>

---

##### `HttpsNotificationConfigurationInput`<sup>Optional</sup> <a name="HttpsNotificationConfigurationInput" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.property.httpsNotificationConfigurationInput"></a>

```csharp
public object HttpsNotificationConfigurationInput { get; }
```

- *Type:* object

---

##### `SqsNotificationConfigurationInput`<sup>Optional</sup> <a name="SqsNotificationConfigurationInput" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.property.sqsNotificationConfigurationInput"></a>

```csharp
public object SqsNotificationConfigurationInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList <a name="SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.get"></a>

```csharp
private SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference <a name="SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



