# `sqsQueue` Submodule <a name="`sqsQueue` Submodule" id="@cdktf/provider-aws.sqsQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqsQueue <a name="SqsQueue" id="@cdktf/provider-aws.sqsQueue.SqsQueue"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue aws_sqs_queue}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SqsQueue(Construct Scope, string Id, SqsQueueConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig">SqsQueueConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig">SqsQueueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetContentBasedDeduplication">ResetContentBasedDeduplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetDeduplicationScope">ResetDeduplicationScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetDelaySeconds">ResetDelaySeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetFifoQueue">ResetFifoQueue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetFifoThroughputLimit">ResetFifoThroughputLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetKmsDataKeyReusePeriodSeconds">ResetKmsDataKeyReusePeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetKmsMasterKeyId">ResetKmsMasterKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetMaxMessageSize">ResetMaxMessageSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetMessageRetentionSeconds">ResetMessageRetentionSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetNamePrefix">ResetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetPolicy">ResetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetReceiveWaitTimeSeconds">ResetReceiveWaitTimeSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetRedriveAllowPolicy">ResetRedriveAllowPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetRedrivePolicy">ResetRedrivePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetSqsManagedSseEnabled">ResetSqsManagedSseEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetVisibilityTimeoutSeconds">ResetVisibilityTimeoutSeconds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sqsQueue.SqsQueue.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.sqsQueue.SqsQueue.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.sqsQueue.SqsQueue.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sqsQueue.SqsQueue.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.sqsQueue.SqsQueue.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.sqsQueue.SqsQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.sqsQueue.SqsQueue.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.sqsQueue.SqsQueue.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetContentBasedDeduplication` <a name="ResetContentBasedDeduplication" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetContentBasedDeduplication"></a>

```csharp
private void ResetContentBasedDeduplication()
```

##### `ResetDeduplicationScope` <a name="ResetDeduplicationScope" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetDeduplicationScope"></a>

```csharp
private void ResetDeduplicationScope()
```

##### `ResetDelaySeconds` <a name="ResetDelaySeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetDelaySeconds"></a>

```csharp
private void ResetDelaySeconds()
```

##### `ResetFifoQueue` <a name="ResetFifoQueue" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetFifoQueue"></a>

```csharp
private void ResetFifoQueue()
```

##### `ResetFifoThroughputLimit` <a name="ResetFifoThroughputLimit" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetFifoThroughputLimit"></a>

```csharp
private void ResetFifoThroughputLimit()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKmsDataKeyReusePeriodSeconds` <a name="ResetKmsDataKeyReusePeriodSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetKmsDataKeyReusePeriodSeconds"></a>

```csharp
private void ResetKmsDataKeyReusePeriodSeconds()
```

##### `ResetKmsMasterKeyId` <a name="ResetKmsMasterKeyId" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetKmsMasterKeyId"></a>

```csharp
private void ResetKmsMasterKeyId()
```

##### `ResetMaxMessageSize` <a name="ResetMaxMessageSize" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetMaxMessageSize"></a>

```csharp
private void ResetMaxMessageSize()
```

##### `ResetMessageRetentionSeconds` <a name="ResetMessageRetentionSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetMessageRetentionSeconds"></a>

```csharp
private void ResetMessageRetentionSeconds()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNamePrefix` <a name="ResetNamePrefix" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetNamePrefix"></a>

```csharp
private void ResetNamePrefix()
```

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetPolicy"></a>

```csharp
private void ResetPolicy()
```

##### `ResetReceiveWaitTimeSeconds` <a name="ResetReceiveWaitTimeSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetReceiveWaitTimeSeconds"></a>

```csharp
private void ResetReceiveWaitTimeSeconds()
```

##### `ResetRedriveAllowPolicy` <a name="ResetRedriveAllowPolicy" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetRedriveAllowPolicy"></a>

```csharp
private void ResetRedriveAllowPolicy()
```

##### `ResetRedrivePolicy` <a name="ResetRedrivePolicy" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetRedrivePolicy"></a>

```csharp
private void ResetRedrivePolicy()
```

##### `ResetSqsManagedSseEnabled` <a name="ResetSqsManagedSseEnabled" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetSqsManagedSseEnabled"></a>

```csharp
private void ResetSqsManagedSseEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetVisibilityTimeoutSeconds` <a name="ResetVisibilityTimeoutSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetVisibilityTimeoutSeconds"></a>

```csharp
private void ResetVisibilityTimeoutSeconds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.sqsQueue.SqsQueue.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SqsQueue.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sqsQueue.SqsQueue.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.sqsQueue.SqsQueue.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SqsQueue.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sqsQueue.SqsQueue.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.sqsQueue.SqsQueue.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SqsQueue.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sqsQueue.SqsQueue.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.contentBasedDeduplicationInput">ContentBasedDeduplicationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.deduplicationScopeInput">DeduplicationScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.delaySecondsInput">DelaySecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.fifoQueueInput">FifoQueueInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.fifoThroughputLimitInput">FifoThroughputLimitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.kmsDataKeyReusePeriodSecondsInput">KmsDataKeyReusePeriodSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.kmsMasterKeyIdInput">KmsMasterKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.maxMessageSizeInput">MaxMessageSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.messageRetentionSecondsInput">MessageRetentionSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.namePrefixInput">NamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.policyInput">PolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.receiveWaitTimeSecondsInput">ReceiveWaitTimeSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.redriveAllowPolicyInput">RedriveAllowPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.redrivePolicyInput">RedrivePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.sqsManagedSseEnabledInput">SqsManagedSseEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.visibilityTimeoutSecondsInput">VisibilityTimeoutSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.contentBasedDeduplication">ContentBasedDeduplication</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.deduplicationScope">DeduplicationScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.delaySeconds">DelaySeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.fifoQueue">FifoQueue</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.fifoThroughputLimit">FifoThroughputLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.kmsDataKeyReusePeriodSeconds">KmsDataKeyReusePeriodSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.kmsMasterKeyId">KmsMasterKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.maxMessageSize">MaxMessageSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.messageRetentionSeconds">MessageRetentionSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.namePrefix">NamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.policy">Policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.receiveWaitTimeSeconds">ReceiveWaitTimeSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.redriveAllowPolicy">RedriveAllowPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.redrivePolicy">RedrivePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.sqsManagedSseEnabled">SqsManagedSseEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.visibilityTimeoutSeconds">VisibilityTimeoutSeconds</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `ContentBasedDeduplicationInput`<sup>Optional</sup> <a name="ContentBasedDeduplicationInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.contentBasedDeduplicationInput"></a>

```csharp
public object ContentBasedDeduplicationInput { get; }
```

- *Type:* object

---

##### `DeduplicationScopeInput`<sup>Optional</sup> <a name="DeduplicationScopeInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.deduplicationScopeInput"></a>

```csharp
public string DeduplicationScopeInput { get; }
```

- *Type:* string

---

##### `DelaySecondsInput`<sup>Optional</sup> <a name="DelaySecondsInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.delaySecondsInput"></a>

```csharp
public double DelaySecondsInput { get; }
```

- *Type:* double

---

##### `FifoQueueInput`<sup>Optional</sup> <a name="FifoQueueInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.fifoQueueInput"></a>

```csharp
public object FifoQueueInput { get; }
```

- *Type:* object

---

##### `FifoThroughputLimitInput`<sup>Optional</sup> <a name="FifoThroughputLimitInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.fifoThroughputLimitInput"></a>

```csharp
public string FifoThroughputLimitInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KmsDataKeyReusePeriodSecondsInput`<sup>Optional</sup> <a name="KmsDataKeyReusePeriodSecondsInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.kmsDataKeyReusePeriodSecondsInput"></a>

```csharp
public double KmsDataKeyReusePeriodSecondsInput { get; }
```

- *Type:* double

---

##### `KmsMasterKeyIdInput`<sup>Optional</sup> <a name="KmsMasterKeyIdInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.kmsMasterKeyIdInput"></a>

```csharp
public string KmsMasterKeyIdInput { get; }
```

- *Type:* string

---

##### `MaxMessageSizeInput`<sup>Optional</sup> <a name="MaxMessageSizeInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.maxMessageSizeInput"></a>

```csharp
public double MaxMessageSizeInput { get; }
```

- *Type:* double

---

##### `MessageRetentionSecondsInput`<sup>Optional</sup> <a name="MessageRetentionSecondsInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.messageRetentionSecondsInput"></a>

```csharp
public double MessageRetentionSecondsInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamePrefixInput`<sup>Optional</sup> <a name="NamePrefixInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.namePrefixInput"></a>

```csharp
public string NamePrefixInput { get; }
```

- *Type:* string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.policyInput"></a>

```csharp
public string PolicyInput { get; }
```

- *Type:* string

---

##### `ReceiveWaitTimeSecondsInput`<sup>Optional</sup> <a name="ReceiveWaitTimeSecondsInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.receiveWaitTimeSecondsInput"></a>

```csharp
public double ReceiveWaitTimeSecondsInput { get; }
```

- *Type:* double

---

##### `RedriveAllowPolicyInput`<sup>Optional</sup> <a name="RedriveAllowPolicyInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.redriveAllowPolicyInput"></a>

```csharp
public string RedriveAllowPolicyInput { get; }
```

- *Type:* string

---

##### `RedrivePolicyInput`<sup>Optional</sup> <a name="RedrivePolicyInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.redrivePolicyInput"></a>

```csharp
public string RedrivePolicyInput { get; }
```

- *Type:* string

---

##### `SqsManagedSseEnabledInput`<sup>Optional</sup> <a name="SqsManagedSseEnabledInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.sqsManagedSseEnabledInput"></a>

```csharp
public object SqsManagedSseEnabledInput { get; }
```

- *Type:* object

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VisibilityTimeoutSecondsInput`<sup>Optional</sup> <a name="VisibilityTimeoutSecondsInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.visibilityTimeoutSecondsInput"></a>

```csharp
public double VisibilityTimeoutSecondsInput { get; }
```

- *Type:* double

---

##### `ContentBasedDeduplication`<sup>Required</sup> <a name="ContentBasedDeduplication" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.contentBasedDeduplication"></a>

```csharp
public object ContentBasedDeduplication { get; }
```

- *Type:* object

---

##### `DeduplicationScope`<sup>Required</sup> <a name="DeduplicationScope" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.deduplicationScope"></a>

```csharp
public string DeduplicationScope { get; }
```

- *Type:* string

---

##### `DelaySeconds`<sup>Required</sup> <a name="DelaySeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.delaySeconds"></a>

```csharp
public double DelaySeconds { get; }
```

- *Type:* double

---

##### `FifoQueue`<sup>Required</sup> <a name="FifoQueue" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.fifoQueue"></a>

```csharp
public object FifoQueue { get; }
```

- *Type:* object

---

##### `FifoThroughputLimit`<sup>Required</sup> <a name="FifoThroughputLimit" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.fifoThroughputLimit"></a>

```csharp
public string FifoThroughputLimit { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KmsDataKeyReusePeriodSeconds`<sup>Required</sup> <a name="KmsDataKeyReusePeriodSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.kmsDataKeyReusePeriodSeconds"></a>

```csharp
public double KmsDataKeyReusePeriodSeconds { get; }
```

- *Type:* double

---

##### `KmsMasterKeyId`<sup>Required</sup> <a name="KmsMasterKeyId" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.kmsMasterKeyId"></a>

```csharp
public string KmsMasterKeyId { get; }
```

- *Type:* string

---

##### `MaxMessageSize`<sup>Required</sup> <a name="MaxMessageSize" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.maxMessageSize"></a>

```csharp
public double MaxMessageSize { get; }
```

- *Type:* double

---

##### `MessageRetentionSeconds`<sup>Required</sup> <a name="MessageRetentionSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.messageRetentionSeconds"></a>

```csharp
public double MessageRetentionSeconds { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.namePrefix"></a>

```csharp
public string NamePrefix { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.policy"></a>

```csharp
public string Policy { get; }
```

- *Type:* string

---

##### `ReceiveWaitTimeSeconds`<sup>Required</sup> <a name="ReceiveWaitTimeSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.receiveWaitTimeSeconds"></a>

```csharp
public double ReceiveWaitTimeSeconds { get; }
```

- *Type:* double

---

##### `RedriveAllowPolicy`<sup>Required</sup> <a name="RedriveAllowPolicy" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.redriveAllowPolicy"></a>

```csharp
public string RedriveAllowPolicy { get; }
```

- *Type:* string

---

##### `RedrivePolicy`<sup>Required</sup> <a name="RedrivePolicy" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.redrivePolicy"></a>

```csharp
public string RedrivePolicy { get; }
```

- *Type:* string

---

##### `SqsManagedSseEnabled`<sup>Required</sup> <a name="SqsManagedSseEnabled" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.sqsManagedSseEnabled"></a>

```csharp
public object SqsManagedSseEnabled { get; }
```

- *Type:* object

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VisibilityTimeoutSeconds`<sup>Required</sup> <a name="VisibilityTimeoutSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.visibilityTimeoutSeconds"></a>

```csharp
public double VisibilityTimeoutSeconds { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SqsQueueConfig <a name="SqsQueueConfig" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SqsQueueConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object ContentBasedDeduplication = null,
    string DeduplicationScope = null,
    double DelaySeconds = null,
    object FifoQueue = null,
    string FifoThroughputLimit = null,
    string Id = null,
    double KmsDataKeyReusePeriodSeconds = null,
    string KmsMasterKeyId = null,
    double MaxMessageSize = null,
    double MessageRetentionSeconds = null,
    string Name = null,
    string NamePrefix = null,
    string Policy = null,
    double ReceiveWaitTimeSeconds = null,
    string RedriveAllowPolicy = null,
    string RedrivePolicy = null,
    object SqsManagedSseEnabled = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    double VisibilityTimeoutSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.contentBasedDeduplication">ContentBasedDeduplication</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#content_based_deduplication SqsQueue#content_based_deduplication}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.deduplicationScope">DeduplicationScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#deduplication_scope SqsQueue#deduplication_scope}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.delaySeconds">DelaySeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#delay_seconds SqsQueue#delay_seconds}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.fifoQueue">FifoQueue</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#fifo_queue SqsQueue#fifo_queue}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.fifoThroughputLimit">FifoThroughputLimit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#fifo_throughput_limit SqsQueue#fifo_throughput_limit}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#id SqsQueue#id}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.kmsDataKeyReusePeriodSeconds">KmsDataKeyReusePeriodSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#kms_data_key_reuse_period_seconds SqsQueue#kms_data_key_reuse_period_seconds}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.kmsMasterKeyId">KmsMasterKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#kms_master_key_id SqsQueue#kms_master_key_id}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.maxMessageSize">MaxMessageSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#max_message_size SqsQueue#max_message_size}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.messageRetentionSeconds">MessageRetentionSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#message_retention_seconds SqsQueue#message_retention_seconds}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#name SqsQueue#name}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.namePrefix">NamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#name_prefix SqsQueue#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.policy">Policy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#policy SqsQueue#policy}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.receiveWaitTimeSeconds">ReceiveWaitTimeSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#receive_wait_time_seconds SqsQueue#receive_wait_time_seconds}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.redriveAllowPolicy">RedriveAllowPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#redrive_allow_policy SqsQueue#redrive_allow_policy}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.redrivePolicy">RedrivePolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#redrive_policy SqsQueue#redrive_policy}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.sqsManagedSseEnabled">SqsManagedSseEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#sqs_managed_sse_enabled SqsQueue#sqs_managed_sse_enabled}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#tags SqsQueue#tags}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#tags_all SqsQueue#tags_all}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.visibilityTimeoutSeconds">VisibilityTimeoutSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#visibility_timeout_seconds SqsQueue#visibility_timeout_seconds}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ContentBasedDeduplication`<sup>Optional</sup> <a name="ContentBasedDeduplication" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.contentBasedDeduplication"></a>

```csharp
public object ContentBasedDeduplication { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#content_based_deduplication SqsQueue#content_based_deduplication}.

---

##### `DeduplicationScope`<sup>Optional</sup> <a name="DeduplicationScope" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.deduplicationScope"></a>

```csharp
public string DeduplicationScope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#deduplication_scope SqsQueue#deduplication_scope}.

---

##### `DelaySeconds`<sup>Optional</sup> <a name="DelaySeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.delaySeconds"></a>

```csharp
public double DelaySeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#delay_seconds SqsQueue#delay_seconds}.

---

##### `FifoQueue`<sup>Optional</sup> <a name="FifoQueue" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.fifoQueue"></a>

```csharp
public object FifoQueue { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#fifo_queue SqsQueue#fifo_queue}.

---

##### `FifoThroughputLimit`<sup>Optional</sup> <a name="FifoThroughputLimit" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.fifoThroughputLimit"></a>

```csharp
public string FifoThroughputLimit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#fifo_throughput_limit SqsQueue#fifo_throughput_limit}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#id SqsQueue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsDataKeyReusePeriodSeconds`<sup>Optional</sup> <a name="KmsDataKeyReusePeriodSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.kmsDataKeyReusePeriodSeconds"></a>

```csharp
public double KmsDataKeyReusePeriodSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#kms_data_key_reuse_period_seconds SqsQueue#kms_data_key_reuse_period_seconds}.

---

##### `KmsMasterKeyId`<sup>Optional</sup> <a name="KmsMasterKeyId" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.kmsMasterKeyId"></a>

```csharp
public string KmsMasterKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#kms_master_key_id SqsQueue#kms_master_key_id}.

---

##### `MaxMessageSize`<sup>Optional</sup> <a name="MaxMessageSize" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.maxMessageSize"></a>

```csharp
public double MaxMessageSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#max_message_size SqsQueue#max_message_size}.

---

##### `MessageRetentionSeconds`<sup>Optional</sup> <a name="MessageRetentionSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.messageRetentionSeconds"></a>

```csharp
public double MessageRetentionSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#message_retention_seconds SqsQueue#message_retention_seconds}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#name SqsQueue#name}.

---

##### `NamePrefix`<sup>Optional</sup> <a name="NamePrefix" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.namePrefix"></a>

```csharp
public string NamePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#name_prefix SqsQueue#name_prefix}.

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.policy"></a>

```csharp
public string Policy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#policy SqsQueue#policy}.

---

##### `ReceiveWaitTimeSeconds`<sup>Optional</sup> <a name="ReceiveWaitTimeSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.receiveWaitTimeSeconds"></a>

```csharp
public double ReceiveWaitTimeSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#receive_wait_time_seconds SqsQueue#receive_wait_time_seconds}.

---

##### `RedriveAllowPolicy`<sup>Optional</sup> <a name="RedriveAllowPolicy" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.redriveAllowPolicy"></a>

```csharp
public string RedriveAllowPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#redrive_allow_policy SqsQueue#redrive_allow_policy}.

---

##### `RedrivePolicy`<sup>Optional</sup> <a name="RedrivePolicy" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.redrivePolicy"></a>

```csharp
public string RedrivePolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#redrive_policy SqsQueue#redrive_policy}.

---

##### `SqsManagedSseEnabled`<sup>Optional</sup> <a name="SqsManagedSseEnabled" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.sqsManagedSseEnabled"></a>

```csharp
public object SqsManagedSseEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#sqs_managed_sse_enabled SqsQueue#sqs_managed_sse_enabled}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#tags SqsQueue#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#tags_all SqsQueue#tags_all}.

---

##### `VisibilityTimeoutSeconds`<sup>Optional</sup> <a name="VisibilityTimeoutSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.visibilityTimeoutSeconds"></a>

```csharp
public double VisibilityTimeoutSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue#visibility_timeout_seconds SqsQueue#visibility_timeout_seconds}.

---



