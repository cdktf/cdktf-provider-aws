# `batchJobDefinition` Submodule <a name="`batchJobDefinition` Submodule" id="@cdktf/provider-aws.batchJobDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BatchJobDefinition <a name="BatchJobDefinition" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition aws_batch_job_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BatchJobDefinition(Construct Scope, string Id, BatchJobDefinitionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig">BatchJobDefinitionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig">BatchJobDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.putRetryStrategy">PutRetryStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.putTimeout">PutTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetContainerProperties">ResetContainerProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetPlatformCapabilities">ResetPlatformCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetPropagateTags">ResetPropagateTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetRetryStrategy">ResetRetryStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutRetryStrategy` <a name="PutRetryStrategy" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.putRetryStrategy"></a>

```csharp
private void PutRetryStrategy(BatchJobDefinitionRetryStrategy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.putRetryStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy">BatchJobDefinitionRetryStrategy</a>

---

##### `PutTimeout` <a name="PutTimeout" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.putTimeout"></a>

```csharp
private void PutTimeout(BatchJobDefinitionTimeout Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.putTimeout.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeout">BatchJobDefinitionTimeout</a>

---

##### `ResetContainerProperties` <a name="ResetContainerProperties" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetContainerProperties"></a>

```csharp
private void ResetContainerProperties()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetPlatformCapabilities` <a name="ResetPlatformCapabilities" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetPlatformCapabilities"></a>

```csharp
private void ResetPlatformCapabilities()
```

##### `ResetPropagateTags` <a name="ResetPropagateTags" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetPropagateTags"></a>

```csharp
private void ResetPropagateTags()
```

##### `ResetRetryStrategy` <a name="ResetRetryStrategy" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetRetryStrategy"></a>

```csharp
private void ResetRetryStrategy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetTimeout"></a>

```csharp
private void ResetTimeout()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BatchJobDefinition.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BatchJobDefinition.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BatchJobDefinition.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.retryStrategy">RetryStrategy</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference">BatchJobDefinitionRetryStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.revision">Revision</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.timeout">Timeout</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference">BatchJobDefinitionTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.containerPropertiesInput">ContainerPropertiesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.platformCapabilitiesInput">PlatformCapabilitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.propagateTagsInput">PropagateTagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.retryStrategyInput">RetryStrategyInput</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy">BatchJobDefinitionRetryStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.timeoutInput">TimeoutInput</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeout">BatchJobDefinitionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.containerProperties">ContainerProperties</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.platformCapabilities">PlatformCapabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.propagateTags">PropagateTags</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `RetryStrategy`<sup>Required</sup> <a name="RetryStrategy" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.retryStrategy"></a>

```csharp
public BatchJobDefinitionRetryStrategyOutputReference RetryStrategy { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference">BatchJobDefinitionRetryStrategyOutputReference</a>

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.revision"></a>

```csharp
public double Revision { get; }
```

- *Type:* double

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.timeout"></a>

```csharp
public BatchJobDefinitionTimeoutOutputReference Timeout { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference">BatchJobDefinitionTimeoutOutputReference</a>

---

##### `ContainerPropertiesInput`<sup>Optional</sup> <a name="ContainerPropertiesInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.containerPropertiesInput"></a>

```csharp
public string ContainerPropertiesInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PlatformCapabilitiesInput`<sup>Optional</sup> <a name="PlatformCapabilitiesInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.platformCapabilitiesInput"></a>

```csharp
public string[] PlatformCapabilitiesInput { get; }
```

- *Type:* string[]

---

##### `PropagateTagsInput`<sup>Optional</sup> <a name="PropagateTagsInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.propagateTagsInput"></a>

```csharp
public object PropagateTagsInput { get; }
```

- *Type:* object

---

##### `RetryStrategyInput`<sup>Optional</sup> <a name="RetryStrategyInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.retryStrategyInput"></a>

```csharp
public BatchJobDefinitionRetryStrategy RetryStrategyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy">BatchJobDefinitionRetryStrategy</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.timeoutInput"></a>

```csharp
public BatchJobDefinitionTimeout TimeoutInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeout">BatchJobDefinitionTimeout</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ContainerProperties`<sup>Required</sup> <a name="ContainerProperties" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.containerProperties"></a>

```csharp
public string ContainerProperties { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PlatformCapabilities`<sup>Required</sup> <a name="PlatformCapabilities" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.platformCapabilities"></a>

```csharp
public string[] PlatformCapabilities { get; }
```

- *Type:* string[]

---

##### `PropagateTags`<sup>Required</sup> <a name="PropagateTags" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.propagateTags"></a>

```csharp
public object PropagateTags { get; }
```

- *Type:* object

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BatchJobDefinitionConfig <a name="BatchJobDefinitionConfig" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BatchJobDefinitionConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Type,
    string ContainerProperties = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Parameters = null,
    string[] PlatformCapabilities = null,
    object PropagateTags = null,
    BatchJobDefinitionRetryStrategy RetryStrategy = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    BatchJobDefinitionTimeout Timeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#name BatchJobDefinition#name}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#type BatchJobDefinition#type}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.containerProperties">ContainerProperties</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#container_properties BatchJobDefinition#container_properties}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#id BatchJobDefinition#id}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#parameters BatchJobDefinition#parameters}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.platformCapabilities">PlatformCapabilities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#platform_capabilities BatchJobDefinition#platform_capabilities}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.propagateTags">PropagateTags</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#propagate_tags BatchJobDefinition#propagate_tags}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.retryStrategy">RetryStrategy</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy">BatchJobDefinitionRetryStrategy</a></code> | retry_strategy block. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#tags BatchJobDefinition#tags}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#tags_all BatchJobDefinition#tags_all}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.timeout">Timeout</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeout">BatchJobDefinitionTimeout</a></code> | timeout block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#name BatchJobDefinition#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#type BatchJobDefinition#type}.

---

##### `ContainerProperties`<sup>Optional</sup> <a name="ContainerProperties" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.containerProperties"></a>

```csharp
public string ContainerProperties { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#container_properties BatchJobDefinition#container_properties}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#id BatchJobDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#parameters BatchJobDefinition#parameters}.

---

##### `PlatformCapabilities`<sup>Optional</sup> <a name="PlatformCapabilities" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.platformCapabilities"></a>

```csharp
public string[] PlatformCapabilities { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#platform_capabilities BatchJobDefinition#platform_capabilities}.

---

##### `PropagateTags`<sup>Optional</sup> <a name="PropagateTags" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.propagateTags"></a>

```csharp
public object PropagateTags { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#propagate_tags BatchJobDefinition#propagate_tags}.

---

##### `RetryStrategy`<sup>Optional</sup> <a name="RetryStrategy" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.retryStrategy"></a>

```csharp
public BatchJobDefinitionRetryStrategy RetryStrategy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy">BatchJobDefinitionRetryStrategy</a>

retry_strategy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#retry_strategy BatchJobDefinition#retry_strategy}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#tags BatchJobDefinition#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#tags_all BatchJobDefinition#tags_all}.

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.timeout"></a>

```csharp
public BatchJobDefinitionTimeout Timeout { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeout">BatchJobDefinitionTimeout</a>

timeout block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#timeout BatchJobDefinition#timeout}

---

### BatchJobDefinitionRetryStrategy <a name="BatchJobDefinitionRetryStrategy" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BatchJobDefinitionRetryStrategy {
    double Attempts = null,
    object EvaluateOnExit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy.property.attempts">Attempts</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#attempts BatchJobDefinition#attempts}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy.property.evaluateOnExit">EvaluateOnExit</a></code> | <code>object</code> | evaluate_on_exit block. |

---

##### `Attempts`<sup>Optional</sup> <a name="Attempts" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy.property.attempts"></a>

```csharp
public double Attempts { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#attempts BatchJobDefinition#attempts}.

---

##### `EvaluateOnExit`<sup>Optional</sup> <a name="EvaluateOnExit" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy.property.evaluateOnExit"></a>

```csharp
public object EvaluateOnExit { get; set; }
```

- *Type:* object

evaluate_on_exit block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#evaluate_on_exit BatchJobDefinition#evaluate_on_exit}

---

### BatchJobDefinitionRetryStrategyEvaluateOnExit <a name="BatchJobDefinitionRetryStrategyEvaluateOnExit" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BatchJobDefinitionRetryStrategyEvaluateOnExit {
    string Action,
    string OnExitCode = null,
    string OnReason = null,
    string OnStatusReason = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#action BatchJobDefinition#action}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit.property.onExitCode">OnExitCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#on_exit_code BatchJobDefinition#on_exit_code}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit.property.onReason">OnReason</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#on_reason BatchJobDefinition#on_reason}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit.property.onStatusReason">OnStatusReason</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#on_status_reason BatchJobDefinition#on_status_reason}. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#action BatchJobDefinition#action}.

---

##### `OnExitCode`<sup>Optional</sup> <a name="OnExitCode" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit.property.onExitCode"></a>

```csharp
public string OnExitCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#on_exit_code BatchJobDefinition#on_exit_code}.

---

##### `OnReason`<sup>Optional</sup> <a name="OnReason" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit.property.onReason"></a>

```csharp
public string OnReason { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#on_reason BatchJobDefinition#on_reason}.

---

##### `OnStatusReason`<sup>Optional</sup> <a name="OnStatusReason" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit.property.onStatusReason"></a>

```csharp
public string OnStatusReason { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#on_status_reason BatchJobDefinition#on_status_reason}.

---

### BatchJobDefinitionTimeout <a name="BatchJobDefinitionTimeout" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeout.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BatchJobDefinitionTimeout {
    double AttemptDurationSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeout.property.attemptDurationSeconds">AttemptDurationSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#attempt_duration_seconds BatchJobDefinition#attempt_duration_seconds}. |

---

##### `AttemptDurationSeconds`<sup>Optional</sup> <a name="AttemptDurationSeconds" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeout.property.attemptDurationSeconds"></a>

```csharp
public double AttemptDurationSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#attempt_duration_seconds BatchJobDefinition#attempt_duration_seconds}.

---

## Classes <a name="Classes" id="Classes"></a>

### BatchJobDefinitionRetryStrategyEvaluateOnExitList <a name="BatchJobDefinitionRetryStrategyEvaluateOnExitList" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BatchJobDefinitionRetryStrategyEvaluateOnExitList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.get"></a>

```csharp
private BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference <a name="BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.resetOnExitCode">ResetOnExitCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.resetOnReason">ResetOnReason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.resetOnStatusReason">ResetOnStatusReason</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOnExitCode` <a name="ResetOnExitCode" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.resetOnExitCode"></a>

```csharp
private void ResetOnExitCode()
```

##### `ResetOnReason` <a name="ResetOnReason" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.resetOnReason"></a>

```csharp
private void ResetOnReason()
```

##### `ResetOnStatusReason` <a name="ResetOnStatusReason" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.resetOnStatusReason"></a>

```csharp
private void ResetOnStatusReason()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.onExitCodeInput">OnExitCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.onReasonInput">OnReasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.onStatusReasonInput">OnStatusReasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.onExitCode">OnExitCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.onReason">OnReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.onStatusReason">OnStatusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `OnExitCodeInput`<sup>Optional</sup> <a name="OnExitCodeInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.onExitCodeInput"></a>

```csharp
public string OnExitCodeInput { get; }
```

- *Type:* string

---

##### `OnReasonInput`<sup>Optional</sup> <a name="OnReasonInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.onReasonInput"></a>

```csharp
public string OnReasonInput { get; }
```

- *Type:* string

---

##### `OnStatusReasonInput`<sup>Optional</sup> <a name="OnStatusReasonInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.onStatusReasonInput"></a>

```csharp
public string OnStatusReasonInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `OnExitCode`<sup>Required</sup> <a name="OnExitCode" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.onExitCode"></a>

```csharp
public string OnExitCode { get; }
```

- *Type:* string

---

##### `OnReason`<sup>Required</sup> <a name="OnReason" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.onReason"></a>

```csharp
public string OnReason { get; }
```

- *Type:* string

---

##### `OnStatusReason`<sup>Required</sup> <a name="OnStatusReason" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.onStatusReason"></a>

```csharp
public string OnStatusReason { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BatchJobDefinitionRetryStrategyOutputReference <a name="BatchJobDefinitionRetryStrategyOutputReference" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BatchJobDefinitionRetryStrategyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.putEvaluateOnExit">PutEvaluateOnExit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.resetAttempts">ResetAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.resetEvaluateOnExit">ResetEvaluateOnExit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEvaluateOnExit` <a name="PutEvaluateOnExit" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.putEvaluateOnExit"></a>

```csharp
private void PutEvaluateOnExit(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.putEvaluateOnExit.parameter.value"></a>

- *Type:* object

---

##### `ResetAttempts` <a name="ResetAttempts" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.resetAttempts"></a>

```csharp
private void ResetAttempts()
```

##### `ResetEvaluateOnExit` <a name="ResetEvaluateOnExit" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.resetEvaluateOnExit"></a>

```csharp
private void ResetEvaluateOnExit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.evaluateOnExit">EvaluateOnExit</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList">BatchJobDefinitionRetryStrategyEvaluateOnExitList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.attemptsInput">AttemptsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.evaluateOnExitInput">EvaluateOnExitInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.attempts">Attempts</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy">BatchJobDefinitionRetryStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EvaluateOnExit`<sup>Required</sup> <a name="EvaluateOnExit" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.evaluateOnExit"></a>

```csharp
public BatchJobDefinitionRetryStrategyEvaluateOnExitList EvaluateOnExit { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList">BatchJobDefinitionRetryStrategyEvaluateOnExitList</a>

---

##### `AttemptsInput`<sup>Optional</sup> <a name="AttemptsInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.attemptsInput"></a>

```csharp
public double AttemptsInput { get; }
```

- *Type:* double

---

##### `EvaluateOnExitInput`<sup>Optional</sup> <a name="EvaluateOnExitInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.evaluateOnExitInput"></a>

```csharp
public object EvaluateOnExitInput { get; }
```

- *Type:* object

---

##### `Attempts`<sup>Required</sup> <a name="Attempts" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.attempts"></a>

```csharp
public double Attempts { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.internalValue"></a>

```csharp
public BatchJobDefinitionRetryStrategy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy">BatchJobDefinitionRetryStrategy</a>

---


### BatchJobDefinitionTimeoutOutputReference <a name="BatchJobDefinitionTimeoutOutputReference" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BatchJobDefinitionTimeoutOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.resetAttemptDurationSeconds">ResetAttemptDurationSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttemptDurationSeconds` <a name="ResetAttemptDurationSeconds" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.resetAttemptDurationSeconds"></a>

```csharp
private void ResetAttemptDurationSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.property.attemptDurationSecondsInput">AttemptDurationSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.property.attemptDurationSeconds">AttemptDurationSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeout">BatchJobDefinitionTimeout</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttemptDurationSecondsInput`<sup>Optional</sup> <a name="AttemptDurationSecondsInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.property.attemptDurationSecondsInput"></a>

```csharp
public double AttemptDurationSecondsInput { get; }
```

- *Type:* double

---

##### `AttemptDurationSeconds`<sup>Required</sup> <a name="AttemptDurationSeconds" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.property.attemptDurationSeconds"></a>

```csharp
public double AttemptDurationSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.property.internalValue"></a>

```csharp
public BatchJobDefinitionTimeout InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeout">BatchJobDefinitionTimeout</a>

---



