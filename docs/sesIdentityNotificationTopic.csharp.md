# `sesIdentityNotificationTopic` Submodule <a name="`sesIdentityNotificationTopic` Submodule" id="@cdktf/provider-aws.sesIdentityNotificationTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SesIdentityNotificationTopic <a name="SesIdentityNotificationTopic" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_identity_notification_topic aws_ses_identity_notification_topic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SesIdentityNotificationTopic(Construct Scope, string Id, SesIdentityNotificationTopicConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig">SesIdentityNotificationTopicConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig">SesIdentityNotificationTopicConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.resetIncludeOriginalHeaders">ResetIncludeOriginalHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.resetTopicArn">ResetTopicArn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIncludeOriginalHeaders` <a name="ResetIncludeOriginalHeaders" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.resetIncludeOriginalHeaders"></a>

```csharp
private void ResetIncludeOriginalHeaders()
```

##### `ResetTopicArn` <a name="ResetTopicArn" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.resetTopicArn"></a>

```csharp
private void ResetTopicArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SesIdentityNotificationTopic.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SesIdentityNotificationTopic.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SesIdentityNotificationTopic.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.identityInput">IdentityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.includeOriginalHeadersInput">IncludeOriginalHeadersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.notificationTypeInput">NotificationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.topicArnInput">TopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.identity">Identity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.includeOriginalHeaders">IncludeOriginalHeaders</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.notificationType">NotificationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.topicArn">TopicArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.identityInput"></a>

```csharp
public string IdentityInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncludeOriginalHeadersInput`<sup>Optional</sup> <a name="IncludeOriginalHeadersInput" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.includeOriginalHeadersInput"></a>

```csharp
public object IncludeOriginalHeadersInput { get; }
```

- *Type:* object

---

##### `NotificationTypeInput`<sup>Optional</sup> <a name="NotificationTypeInput" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.notificationTypeInput"></a>

```csharp
public string NotificationTypeInput { get; }
```

- *Type:* string

---

##### `TopicArnInput`<sup>Optional</sup> <a name="TopicArnInput" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.topicArnInput"></a>

```csharp
public string TopicArnInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.identity"></a>

```csharp
public string Identity { get; }
```

- *Type:* string

---

##### `IncludeOriginalHeaders`<sup>Required</sup> <a name="IncludeOriginalHeaders" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.includeOriginalHeaders"></a>

```csharp
public object IncludeOriginalHeaders { get; }
```

- *Type:* object

---

##### `NotificationType`<sup>Required</sup> <a name="NotificationType" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.notificationType"></a>

```csharp
public string NotificationType { get; }
```

- *Type:* string

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.topicArn"></a>

```csharp
public string TopicArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopic.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SesIdentityNotificationTopicConfig <a name="SesIdentityNotificationTopicConfig" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SesIdentityNotificationTopicConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Identity,
    string NotificationType,
    string Id = null,
    object IncludeOriginalHeaders = null,
    string TopicArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.identity">Identity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_identity_notification_topic#identity SesIdentityNotificationTopic#identity}. |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.notificationType">NotificationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_identity_notification_topic#notification_type SesIdentityNotificationTopic#notification_type}. |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_identity_notification_topic#id SesIdentityNotificationTopic#id}. |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.includeOriginalHeaders">IncludeOriginalHeaders</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_identity_notification_topic#include_original_headers SesIdentityNotificationTopic#include_original_headers}. |
| <code><a href="#@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.topicArn">TopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_identity_notification_topic#topic_arn SesIdentityNotificationTopic#topic_arn}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.identity"></a>

```csharp
public string Identity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_identity_notification_topic#identity SesIdentityNotificationTopic#identity}.

---

##### `NotificationType`<sup>Required</sup> <a name="NotificationType" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.notificationType"></a>

```csharp
public string NotificationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_identity_notification_topic#notification_type SesIdentityNotificationTopic#notification_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_identity_notification_topic#id SesIdentityNotificationTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludeOriginalHeaders`<sup>Optional</sup> <a name="IncludeOriginalHeaders" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.includeOriginalHeaders"></a>

```csharp
public object IncludeOriginalHeaders { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_identity_notification_topic#include_original_headers SesIdentityNotificationTopic#include_original_headers}.

---

##### `TopicArn`<sup>Optional</sup> <a name="TopicArn" id="@cdktf/provider-aws.sesIdentityNotificationTopic.SesIdentityNotificationTopicConfig.property.topicArn"></a>

```csharp
public string TopicArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_identity_notification_topic#topic_arn SesIdentityNotificationTopic#topic_arn}.

---



