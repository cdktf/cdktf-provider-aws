# `sqsQueueRedrivePolicy` Submodule <a name="`sqsQueueRedrivePolicy` Submodule" id="@cdktf/provider-aws.sqsQueueRedrivePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqsQueueRedrivePolicy <a name="SqsQueueRedrivePolicy" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue_redrive_policy aws_sqs_queue_redrive_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SqsQueueRedrivePolicy(Construct Scope, string Id, SqsQueueRedrivePolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicyConfig">SqsQueueRedrivePolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicyConfig">SqsQueueRedrivePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SqsQueueRedrivePolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SqsQueueRedrivePolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SqsQueueRedrivePolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.property.queueUrlInput">QueueUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.property.redrivePolicyInput">RedrivePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.property.queueUrl">QueueUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.property.redrivePolicy">RedrivePolicy</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `QueueUrlInput`<sup>Optional</sup> <a name="QueueUrlInput" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.property.queueUrlInput"></a>

```csharp
public string QueueUrlInput { get; }
```

- *Type:* string

---

##### `RedrivePolicyInput`<sup>Optional</sup> <a name="RedrivePolicyInput" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.property.redrivePolicyInput"></a>

```csharp
public string RedrivePolicyInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `QueueUrl`<sup>Required</sup> <a name="QueueUrl" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.property.queueUrl"></a>

```csharp
public string QueueUrl { get; }
```

- *Type:* string

---

##### `RedrivePolicy`<sup>Required</sup> <a name="RedrivePolicy" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.property.redrivePolicy"></a>

```csharp
public string RedrivePolicy { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SqsQueueRedrivePolicyConfig <a name="SqsQueueRedrivePolicyConfig" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SqsQueueRedrivePolicyConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string QueueUrl,
    string RedrivePolicy,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicyConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicyConfig.property.queueUrl">QueueUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue_redrive_policy#queue_url SqsQueueRedrivePolicy#queue_url}. |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicyConfig.property.redrivePolicy">RedrivePolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue_redrive_policy#redrive_policy SqsQueueRedrivePolicy#redrive_policy}. |
| <code><a href="#@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue_redrive_policy#id SqsQueueRedrivePolicy#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicyConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `QueueUrl`<sup>Required</sup> <a name="QueueUrl" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicyConfig.property.queueUrl"></a>

```csharp
public string QueueUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue_redrive_policy#queue_url SqsQueueRedrivePolicy#queue_url}.

---

##### `RedrivePolicy`<sup>Required</sup> <a name="RedrivePolicy" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicyConfig.property.redrivePolicy"></a>

```csharp
public string RedrivePolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue_redrive_policy#redrive_policy SqsQueueRedrivePolicy#redrive_policy}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.sqsQueueRedrivePolicy.SqsQueueRedrivePolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue_redrive_policy#id SqsQueueRedrivePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



