# `s3BucketNotification` Submodule <a name="`s3BucketNotification` Submodule" id="@cdktf/provider-aws.s3BucketNotification"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3BucketNotification <a name="S3BucketNotification" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification aws_s3_bucket_notification}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketNotification(Construct Scope, string Id, S3BucketNotificationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig">S3BucketNotificationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig">S3BucketNotificationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.putLambdaFunction">PutLambdaFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.putQueue">PutQueue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.putTopic">PutTopic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.resetEventbridge">ResetEventbridge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.resetLambdaFunction">ResetLambdaFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.resetQueue">ResetQueue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.resetTopic">ResetTopic</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutLambdaFunction` <a name="PutLambdaFunction" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.putLambdaFunction"></a>

```csharp
private void PutLambdaFunction(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.putLambdaFunction.parameter.value"></a>

- *Type:* object

---

##### `PutQueue` <a name="PutQueue" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.putQueue"></a>

```csharp
private void PutQueue(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.putQueue.parameter.value"></a>

- *Type:* object

---

##### `PutTopic` <a name="PutTopic" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.putTopic"></a>

```csharp
private void PutTopic(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.putTopic.parameter.value"></a>

- *Type:* object

---

##### `ResetEventbridge` <a name="ResetEventbridge" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.resetEventbridge"></a>

```csharp
private void ResetEventbridge()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLambdaFunction` <a name="ResetLambdaFunction" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.resetLambdaFunction"></a>

```csharp
private void ResetLambdaFunction()
```

##### `ResetQueue` <a name="ResetQueue" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.resetQueue"></a>

```csharp
private void ResetQueue()
```

##### `ResetTopic` <a name="ResetTopic" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.resetTopic"></a>

```csharp
private void ResetTopic()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3BucketNotification.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3BucketNotification.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3BucketNotification.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.lambdaFunction">LambdaFunction</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList">S3BucketNotificationLambdaFunctionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.queue">Queue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList">S3BucketNotificationQueueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.topic">Topic</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList">S3BucketNotificationTopicList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.eventbridgeInput">EventbridgeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.lambdaFunctionInput">LambdaFunctionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.queueInput">QueueInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.topicInput">TopicInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.eventbridge">Eventbridge</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `LambdaFunction`<sup>Required</sup> <a name="LambdaFunction" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.lambdaFunction"></a>

```csharp
public S3BucketNotificationLambdaFunctionList LambdaFunction { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList">S3BucketNotificationLambdaFunctionList</a>

---

##### `Queue`<sup>Required</sup> <a name="Queue" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.queue"></a>

```csharp
public S3BucketNotificationQueueList Queue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList">S3BucketNotificationQueueList</a>

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.topic"></a>

```csharp
public S3BucketNotificationTopicList Topic { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList">S3BucketNotificationTopicList</a>

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `EventbridgeInput`<sup>Optional</sup> <a name="EventbridgeInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.eventbridgeInput"></a>

```csharp
public object EventbridgeInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LambdaFunctionInput`<sup>Optional</sup> <a name="LambdaFunctionInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.lambdaFunctionInput"></a>

```csharp
public object LambdaFunctionInput { get; }
```

- *Type:* object

---

##### `QueueInput`<sup>Optional</sup> <a name="QueueInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.queueInput"></a>

```csharp
public object QueueInput { get; }
```

- *Type:* object

---

##### `TopicInput`<sup>Optional</sup> <a name="TopicInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.topicInput"></a>

```csharp
public object TopicInput { get; }
```

- *Type:* object

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Eventbridge`<sup>Required</sup> <a name="Eventbridge" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.eventbridge"></a>

```csharp
public object Eventbridge { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3BucketNotificationConfig <a name="S3BucketNotificationConfig" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketNotificationConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Bucket,
    object Eventbridge = null,
    string Id = null,
    object LambdaFunction = null,
    object Queue = null,
    object Topic = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#bucket S3BucketNotification#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.eventbridge">Eventbridge</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#eventbridge S3BucketNotification#eventbridge}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#id S3BucketNotification#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.lambdaFunction">LambdaFunction</a></code> | <code>object</code> | lambda_function block. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.queue">Queue</a></code> | <code>object</code> | queue block. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.topic">Topic</a></code> | <code>object</code> | topic block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#bucket S3BucketNotification#bucket}.

---

##### `Eventbridge`<sup>Optional</sup> <a name="Eventbridge" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.eventbridge"></a>

```csharp
public object Eventbridge { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#eventbridge S3BucketNotification#eventbridge}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#id S3BucketNotification#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LambdaFunction`<sup>Optional</sup> <a name="LambdaFunction" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.lambdaFunction"></a>

```csharp
public object LambdaFunction { get; set; }
```

- *Type:* object

lambda_function block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#lambda_function S3BucketNotification#lambda_function}

---

##### `Queue`<sup>Optional</sup> <a name="Queue" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.queue"></a>

```csharp
public object Queue { get; set; }
```

- *Type:* object

queue block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#queue S3BucketNotification#queue}

---

##### `Topic`<sup>Optional</sup> <a name="Topic" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.topic"></a>

```csharp
public object Topic { get; set; }
```

- *Type:* object

topic block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#topic S3BucketNotification#topic}

---

### S3BucketNotificationLambdaFunction <a name="S3BucketNotificationLambdaFunction" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketNotificationLambdaFunction {
    string[] Events,
    string FilterPrefix = null,
    string FilterSuffix = null,
    string Id = null,
    string LambdaFunctionArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction.property.events">Events</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#events S3BucketNotification#events}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction.property.filterPrefix">FilterPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_prefix S3BucketNotification#filter_prefix}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction.property.filterSuffix">FilterSuffix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_suffix S3BucketNotification#filter_suffix}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#id S3BucketNotification#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction.property.lambdaFunctionArn">LambdaFunctionArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#lambda_function_arn S3BucketNotification#lambda_function_arn}. |

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction.property.events"></a>

```csharp
public string[] Events { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#events S3BucketNotification#events}.

---

##### `FilterPrefix`<sup>Optional</sup> <a name="FilterPrefix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction.property.filterPrefix"></a>

```csharp
public string FilterPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_prefix S3BucketNotification#filter_prefix}.

---

##### `FilterSuffix`<sup>Optional</sup> <a name="FilterSuffix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction.property.filterSuffix"></a>

```csharp
public string FilterSuffix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_suffix S3BucketNotification#filter_suffix}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#id S3BucketNotification#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LambdaFunctionArn`<sup>Optional</sup> <a name="LambdaFunctionArn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction.property.lambdaFunctionArn"></a>

```csharp
public string LambdaFunctionArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#lambda_function_arn S3BucketNotification#lambda_function_arn}.

---

### S3BucketNotificationQueue <a name="S3BucketNotificationQueue" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketNotificationQueue {
    string[] Events,
    string QueueArn,
    string FilterPrefix = null,
    string FilterSuffix = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue.property.events">Events</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#events S3BucketNotification#events}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue.property.queueArn">QueueArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#queue_arn S3BucketNotification#queue_arn}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue.property.filterPrefix">FilterPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_prefix S3BucketNotification#filter_prefix}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue.property.filterSuffix">FilterSuffix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_suffix S3BucketNotification#filter_suffix}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#id S3BucketNotification#id}. |

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue.property.events"></a>

```csharp
public string[] Events { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#events S3BucketNotification#events}.

---

##### `QueueArn`<sup>Required</sup> <a name="QueueArn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue.property.queueArn"></a>

```csharp
public string QueueArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#queue_arn S3BucketNotification#queue_arn}.

---

##### `FilterPrefix`<sup>Optional</sup> <a name="FilterPrefix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue.property.filterPrefix"></a>

```csharp
public string FilterPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_prefix S3BucketNotification#filter_prefix}.

---

##### `FilterSuffix`<sup>Optional</sup> <a name="FilterSuffix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue.property.filterSuffix"></a>

```csharp
public string FilterSuffix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_suffix S3BucketNotification#filter_suffix}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#id S3BucketNotification#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### S3BucketNotificationTopic <a name="S3BucketNotificationTopic" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketNotificationTopic {
    string[] Events,
    string TopicArn,
    string FilterPrefix = null,
    string FilterSuffix = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic.property.events">Events</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#events S3BucketNotification#events}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic.property.topicArn">TopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#topic_arn S3BucketNotification#topic_arn}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic.property.filterPrefix">FilterPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_prefix S3BucketNotification#filter_prefix}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic.property.filterSuffix">FilterSuffix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_suffix S3BucketNotification#filter_suffix}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#id S3BucketNotification#id}. |

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic.property.events"></a>

```csharp
public string[] Events { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#events S3BucketNotification#events}.

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic.property.topicArn"></a>

```csharp
public string TopicArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#topic_arn S3BucketNotification#topic_arn}.

---

##### `FilterPrefix`<sup>Optional</sup> <a name="FilterPrefix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic.property.filterPrefix"></a>

```csharp
public string FilterPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_prefix S3BucketNotification#filter_prefix}.

---

##### `FilterSuffix`<sup>Optional</sup> <a name="FilterSuffix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic.property.filterSuffix"></a>

```csharp
public string FilterSuffix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_suffix S3BucketNotification#filter_suffix}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#id S3BucketNotification#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### S3BucketNotificationLambdaFunctionList <a name="S3BucketNotificationLambdaFunctionList" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketNotificationLambdaFunctionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.get"></a>

```csharp
private S3BucketNotificationLambdaFunctionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### S3BucketNotificationLambdaFunctionOutputReference <a name="S3BucketNotificationLambdaFunctionOutputReference" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketNotificationLambdaFunctionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.resetFilterPrefix">ResetFilterPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.resetFilterSuffix">ResetFilterSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.resetLambdaFunctionArn">ResetLambdaFunctionArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilterPrefix` <a name="ResetFilterPrefix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.resetFilterPrefix"></a>

```csharp
private void ResetFilterPrefix()
```

##### `ResetFilterSuffix` <a name="ResetFilterSuffix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.resetFilterSuffix"></a>

```csharp
private void ResetFilterSuffix()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLambdaFunctionArn` <a name="ResetLambdaFunctionArn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.resetLambdaFunctionArn"></a>

```csharp
private void ResetLambdaFunctionArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.eventsInput">EventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.filterPrefixInput">FilterPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.filterSuffixInput">FilterSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.lambdaFunctionArnInput">LambdaFunctionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.events">Events</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.filterPrefix">FilterPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.filterSuffix">FilterSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.lambdaFunctionArn">LambdaFunctionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventsInput`<sup>Optional</sup> <a name="EventsInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.eventsInput"></a>

```csharp
public string[] EventsInput { get; }
```

- *Type:* string[]

---

##### `FilterPrefixInput`<sup>Optional</sup> <a name="FilterPrefixInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.filterPrefixInput"></a>

```csharp
public string FilterPrefixInput { get; }
```

- *Type:* string

---

##### `FilterSuffixInput`<sup>Optional</sup> <a name="FilterSuffixInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.filterSuffixInput"></a>

```csharp
public string FilterSuffixInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LambdaFunctionArnInput`<sup>Optional</sup> <a name="LambdaFunctionArnInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.lambdaFunctionArnInput"></a>

```csharp
public string LambdaFunctionArnInput { get; }
```

- *Type:* string

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.events"></a>

```csharp
public string[] Events { get; }
```

- *Type:* string[]

---

##### `FilterPrefix`<sup>Required</sup> <a name="FilterPrefix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.filterPrefix"></a>

```csharp
public string FilterPrefix { get; }
```

- *Type:* string

---

##### `FilterSuffix`<sup>Required</sup> <a name="FilterSuffix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.filterSuffix"></a>

```csharp
public string FilterSuffix { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LambdaFunctionArn`<sup>Required</sup> <a name="LambdaFunctionArn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.lambdaFunctionArn"></a>

```csharp
public string LambdaFunctionArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### S3BucketNotificationQueueList <a name="S3BucketNotificationQueueList" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketNotificationQueueList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.get"></a>

```csharp
private S3BucketNotificationQueueOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### S3BucketNotificationQueueOutputReference <a name="S3BucketNotificationQueueOutputReference" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketNotificationQueueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.resetFilterPrefix">ResetFilterPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.resetFilterSuffix">ResetFilterSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.resetId">ResetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilterPrefix` <a name="ResetFilterPrefix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.resetFilterPrefix"></a>

```csharp
private void ResetFilterPrefix()
```

##### `ResetFilterSuffix` <a name="ResetFilterSuffix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.resetFilterSuffix"></a>

```csharp
private void ResetFilterSuffix()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.resetId"></a>

```csharp
private void ResetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.eventsInput">EventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.filterPrefixInput">FilterPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.filterSuffixInput">FilterSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.queueArnInput">QueueArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.events">Events</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.filterPrefix">FilterPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.filterSuffix">FilterSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.queueArn">QueueArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventsInput`<sup>Optional</sup> <a name="EventsInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.eventsInput"></a>

```csharp
public string[] EventsInput { get; }
```

- *Type:* string[]

---

##### `FilterPrefixInput`<sup>Optional</sup> <a name="FilterPrefixInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.filterPrefixInput"></a>

```csharp
public string FilterPrefixInput { get; }
```

- *Type:* string

---

##### `FilterSuffixInput`<sup>Optional</sup> <a name="FilterSuffixInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.filterSuffixInput"></a>

```csharp
public string FilterSuffixInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `QueueArnInput`<sup>Optional</sup> <a name="QueueArnInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.queueArnInput"></a>

```csharp
public string QueueArnInput { get; }
```

- *Type:* string

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.events"></a>

```csharp
public string[] Events { get; }
```

- *Type:* string[]

---

##### `FilterPrefix`<sup>Required</sup> <a name="FilterPrefix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.filterPrefix"></a>

```csharp
public string FilterPrefix { get; }
```

- *Type:* string

---

##### `FilterSuffix`<sup>Required</sup> <a name="FilterSuffix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.filterSuffix"></a>

```csharp
public string FilterSuffix { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `QueueArn`<sup>Required</sup> <a name="QueueArn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.queueArn"></a>

```csharp
public string QueueArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### S3BucketNotificationTopicList <a name="S3BucketNotificationTopicList" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketNotificationTopicList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.get"></a>

```csharp
private S3BucketNotificationTopicOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### S3BucketNotificationTopicOutputReference <a name="S3BucketNotificationTopicOutputReference" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3BucketNotificationTopicOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.resetFilterPrefix">ResetFilterPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.resetFilterSuffix">ResetFilterSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.resetId">ResetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilterPrefix` <a name="ResetFilterPrefix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.resetFilterPrefix"></a>

```csharp
private void ResetFilterPrefix()
```

##### `ResetFilterSuffix` <a name="ResetFilterSuffix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.resetFilterSuffix"></a>

```csharp
private void ResetFilterSuffix()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.resetId"></a>

```csharp
private void ResetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.eventsInput">EventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.filterPrefixInput">FilterPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.filterSuffixInput">FilterSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.topicArnInput">TopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.events">Events</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.filterPrefix">FilterPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.filterSuffix">FilterSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.topicArn">TopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventsInput`<sup>Optional</sup> <a name="EventsInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.eventsInput"></a>

```csharp
public string[] EventsInput { get; }
```

- *Type:* string[]

---

##### `FilterPrefixInput`<sup>Optional</sup> <a name="FilterPrefixInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.filterPrefixInput"></a>

```csharp
public string FilterPrefixInput { get; }
```

- *Type:* string

---

##### `FilterSuffixInput`<sup>Optional</sup> <a name="FilterSuffixInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.filterSuffixInput"></a>

```csharp
public string FilterSuffixInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TopicArnInput`<sup>Optional</sup> <a name="TopicArnInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.topicArnInput"></a>

```csharp
public string TopicArnInput { get; }
```

- *Type:* string

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.events"></a>

```csharp
public string[] Events { get; }
```

- *Type:* string[]

---

##### `FilterPrefix`<sup>Required</sup> <a name="FilterPrefix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.filterPrefix"></a>

```csharp
public string FilterPrefix { get; }
```

- *Type:* string

---

##### `FilterSuffix`<sup>Required</sup> <a name="FilterSuffix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.filterSuffix"></a>

```csharp
public string FilterSuffix { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.topicArn"></a>

```csharp
public string TopicArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



