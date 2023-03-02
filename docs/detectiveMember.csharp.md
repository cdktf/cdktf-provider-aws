# `detectiveMember` Submodule <a name="`detectiveMember` Submodule" id="@cdktf/provider-aws.detectiveMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DetectiveMember <a name="DetectiveMember" id="@cdktf/provider-aws.detectiveMember.DetectiveMember"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/detective_member aws_detective_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DetectiveMember(Construct Scope, string Id, DetectiveMemberConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig">DetectiveMemberConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig">DetectiveMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.resetDisableEmailNotification">ResetDisableEmailNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.resetMessage">ResetMessage</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDisableEmailNotification` <a name="ResetDisableEmailNotification" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.resetDisableEmailNotification"></a>

```csharp
private void ResetDisableEmailNotification()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMessage` <a name="ResetMessage" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.resetMessage"></a>

```csharp
private void ResetMessage()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DetectiveMember.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DetectiveMember.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DetectiveMember.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.administratorId">AdministratorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.disabledReason">DisabledReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.invitedTime">InvitedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.updatedTime">UpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.volumeUsageInBytes">VolumeUsageInBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.disableEmailNotificationInput">DisableEmailNotificationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.emailAddressInput">EmailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.graphArnInput">GraphArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.messageInput">MessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.disableEmailNotification">DisableEmailNotification</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.emailAddress">EmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.graphArn">GraphArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.message">Message</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AdministratorId`<sup>Required</sup> <a name="AdministratorId" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.administratorId"></a>

```csharp
public string AdministratorId { get; }
```

- *Type:* string

---

##### `DisabledReason`<sup>Required</sup> <a name="DisabledReason" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.disabledReason"></a>

```csharp
public string DisabledReason { get; }
```

- *Type:* string

---

##### `InvitedTime`<sup>Required</sup> <a name="InvitedTime" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.invitedTime"></a>

```csharp
public string InvitedTime { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `UpdatedTime`<sup>Required</sup> <a name="UpdatedTime" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.updatedTime"></a>

```csharp
public string UpdatedTime { get; }
```

- *Type:* string

---

##### `VolumeUsageInBytes`<sup>Required</sup> <a name="VolumeUsageInBytes" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.volumeUsageInBytes"></a>

```csharp
public string VolumeUsageInBytes { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `DisableEmailNotificationInput`<sup>Optional</sup> <a name="DisableEmailNotificationInput" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.disableEmailNotificationInput"></a>

```csharp
public object DisableEmailNotificationInput { get; }
```

- *Type:* object

---

##### `EmailAddressInput`<sup>Optional</sup> <a name="EmailAddressInput" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.emailAddressInput"></a>

```csharp
public string EmailAddressInput { get; }
```

- *Type:* string

---

##### `GraphArnInput`<sup>Optional</sup> <a name="GraphArnInput" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.graphArnInput"></a>

```csharp
public string GraphArnInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.messageInput"></a>

```csharp
public string MessageInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `DisableEmailNotification`<sup>Required</sup> <a name="DisableEmailNotification" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.disableEmailNotification"></a>

```csharp
public object DisableEmailNotification { get; }
```

- *Type:* object

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.emailAddress"></a>

```csharp
public string EmailAddress { get; }
```

- *Type:* string

---

##### `GraphArn`<sup>Required</sup> <a name="GraphArn" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.graphArn"></a>

```csharp
public string GraphArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMember.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.detectiveMember.DetectiveMember.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DetectiveMemberConfig <a name="DetectiveMemberConfig" id="@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DetectiveMemberConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    string EmailAddress,
    string GraphArn,
    object DisableEmailNotification = null,
    string Id = null,
    string Message = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/detective_member#account_id DetectiveMember#account_id}. |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.emailAddress">EmailAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/detective_member#email_address DetectiveMember#email_address}. |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.graphArn">GraphArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/detective_member#graph_arn DetectiveMember#graph_arn}. |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.disableEmailNotification">DisableEmailNotification</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/detective_member#disable_email_notification DetectiveMember#disable_email_notification}. |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/detective_member#id DetectiveMember#id}. |
| <code><a href="#@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.message">Message</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/detective_member#message DetectiveMember#message}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/detective_member#account_id DetectiveMember#account_id}.

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.emailAddress"></a>

```csharp
public string EmailAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/detective_member#email_address DetectiveMember#email_address}.

---

##### `GraphArn`<sup>Required</sup> <a name="GraphArn" id="@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.graphArn"></a>

```csharp
public string GraphArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/detective_member#graph_arn DetectiveMember#graph_arn}.

---

##### `DisableEmailNotification`<sup>Optional</sup> <a name="DisableEmailNotification" id="@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.disableEmailNotification"></a>

```csharp
public object DisableEmailNotification { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/detective_member#disable_email_notification DetectiveMember#disable_email_notification}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/detective_member#id DetectiveMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Message`<sup>Optional</sup> <a name="Message" id="@cdktf/provider-aws.detectiveMember.DetectiveMemberConfig.property.message"></a>

```csharp
public string Message { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/detective_member#message DetectiveMember#message}.

---



