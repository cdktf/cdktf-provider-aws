# `sagemakerEndpointConfiguration` Submodule <a name="`sagemakerEndpointConfiguration` Submodule" id="@cdktf/provider-aws.sagemakerEndpointConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerEndpointConfiguration <a name="SagemakerEndpointConfiguration" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration aws_sagemaker_endpoint_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerEndpointConfiguration(Construct Scope, string Id, SagemakerEndpointConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig">SagemakerEndpointConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig">SagemakerEndpointConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.putAsyncInferenceConfig">PutAsyncInferenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.putDataCaptureConfig">PutDataCaptureConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.putProductionVariants">PutProductionVariants</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.putShadowProductionVariants">PutShadowProductionVariants</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetAsyncInferenceConfig">ResetAsyncInferenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetDataCaptureConfig">ResetDataCaptureConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetShadowProductionVariants">ResetShadowProductionVariants</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAsyncInferenceConfig` <a name="PutAsyncInferenceConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.putAsyncInferenceConfig"></a>

```csharp
private void PutAsyncInferenceConfig(SagemakerEndpointConfigurationAsyncInferenceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.putAsyncInferenceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfig">SagemakerEndpointConfigurationAsyncInferenceConfig</a>

---

##### `PutDataCaptureConfig` <a name="PutDataCaptureConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.putDataCaptureConfig"></a>

```csharp
private void PutDataCaptureConfig(SagemakerEndpointConfigurationDataCaptureConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.putDataCaptureConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig">SagemakerEndpointConfigurationDataCaptureConfig</a>

---

##### `PutProductionVariants` <a name="PutProductionVariants" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.putProductionVariants"></a>

```csharp
private void PutProductionVariants(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.putProductionVariants.parameter.value"></a>

- *Type:* object

---

##### `PutShadowProductionVariants` <a name="PutShadowProductionVariants" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.putShadowProductionVariants"></a>

```csharp
private void PutShadowProductionVariants(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.putShadowProductionVariants.parameter.value"></a>

- *Type:* object

---

##### `ResetAsyncInferenceConfig` <a name="ResetAsyncInferenceConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetAsyncInferenceConfig"></a>

```csharp
private void ResetAsyncInferenceConfig()
```

##### `ResetDataCaptureConfig` <a name="ResetDataCaptureConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetDataCaptureConfig"></a>

```csharp
private void ResetDataCaptureConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetShadowProductionVariants` <a name="ResetShadowProductionVariants" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetShadowProductionVariants"></a>

```csharp
private void ResetShadowProductionVariants()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SagemakerEndpointConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SagemakerEndpointConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SagemakerEndpointConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.asyncInferenceConfig">AsyncInferenceConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference">SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.dataCaptureConfig">DataCaptureConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference">SagemakerEndpointConfigurationDataCaptureConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.productionVariants">ProductionVariants</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList">SagemakerEndpointConfigurationProductionVariantsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.shadowProductionVariants">ShadowProductionVariants</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList">SagemakerEndpointConfigurationShadowProductionVariantsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.asyncInferenceConfigInput">AsyncInferenceConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfig">SagemakerEndpointConfigurationAsyncInferenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.dataCaptureConfigInput">DataCaptureConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig">SagemakerEndpointConfigurationDataCaptureConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.productionVariantsInput">ProductionVariantsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.shadowProductionVariantsInput">ShadowProductionVariantsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AsyncInferenceConfig`<sup>Required</sup> <a name="AsyncInferenceConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.asyncInferenceConfig"></a>

```csharp
public SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference AsyncInferenceConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference">SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference</a>

---

##### `DataCaptureConfig`<sup>Required</sup> <a name="DataCaptureConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.dataCaptureConfig"></a>

```csharp
public SagemakerEndpointConfigurationDataCaptureConfigOutputReference DataCaptureConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference">SagemakerEndpointConfigurationDataCaptureConfigOutputReference</a>

---

##### `ProductionVariants`<sup>Required</sup> <a name="ProductionVariants" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.productionVariants"></a>

```csharp
public SagemakerEndpointConfigurationProductionVariantsList ProductionVariants { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList">SagemakerEndpointConfigurationProductionVariantsList</a>

---

##### `ShadowProductionVariants`<sup>Required</sup> <a name="ShadowProductionVariants" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.shadowProductionVariants"></a>

```csharp
public SagemakerEndpointConfigurationShadowProductionVariantsList ShadowProductionVariants { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList">SagemakerEndpointConfigurationShadowProductionVariantsList</a>

---

##### `AsyncInferenceConfigInput`<sup>Optional</sup> <a name="AsyncInferenceConfigInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.asyncInferenceConfigInput"></a>

```csharp
public SagemakerEndpointConfigurationAsyncInferenceConfig AsyncInferenceConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfig">SagemakerEndpointConfigurationAsyncInferenceConfig</a>

---

##### `DataCaptureConfigInput`<sup>Optional</sup> <a name="DataCaptureConfigInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.dataCaptureConfigInput"></a>

```csharp
public SagemakerEndpointConfigurationDataCaptureConfig DataCaptureConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig">SagemakerEndpointConfigurationDataCaptureConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProductionVariantsInput`<sup>Optional</sup> <a name="ProductionVariantsInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.productionVariantsInput"></a>

```csharp
public object ProductionVariantsInput { get; }
```

- *Type:* object

---

##### `ShadowProductionVariantsInput`<sup>Optional</sup> <a name="ShadowProductionVariantsInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.shadowProductionVariantsInput"></a>

```csharp
public object ShadowProductionVariantsInput { get; }
```

- *Type:* object

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerEndpointConfigurationAsyncInferenceConfig <a name="SagemakerEndpointConfigurationAsyncInferenceConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerEndpointConfigurationAsyncInferenceConfig {
    SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig OutputConfig,
    SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig ClientConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfig.property.outputConfig">OutputConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig</a></code> | output_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfig.property.clientConfig">ClientConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig">SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig</a></code> | client_config block. |

---

##### `OutputConfig`<sup>Required</sup> <a name="OutputConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfig.property.outputConfig"></a>

```csharp
public SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig OutputConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig</a>

output_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#output_config SagemakerEndpointConfiguration#output_config}

---

##### `ClientConfig`<sup>Optional</sup> <a name="ClientConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfig.property.clientConfig"></a>

```csharp
public SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig ClientConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig">SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig</a>

client_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#client_config SagemakerEndpointConfiguration#client_config}

---

### SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig <a name="SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig {
    double MaxConcurrentInvocationsPerInstance = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig.property.maxConcurrentInvocationsPerInstance">MaxConcurrentInvocationsPerInstance</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#max_concurrent_invocations_per_instance SagemakerEndpointConfiguration#max_concurrent_invocations_per_instance}. |

---

##### `MaxConcurrentInvocationsPerInstance`<sup>Optional</sup> <a name="MaxConcurrentInvocationsPerInstance" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig.property.maxConcurrentInvocationsPerInstance"></a>

```csharp
public double MaxConcurrentInvocationsPerInstance { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#max_concurrent_invocations_per_instance SagemakerEndpointConfiguration#max_concurrent_invocations_per_instance}.

---

### SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig <a name="SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig {
    string S3OutputPath,
    string KmsKeyId = null,
    SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig NotificationConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig.property.s3OutputPath">S3OutputPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#s3_output_path SagemakerEndpointConfiguration#s3_output_path}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#kms_key_id SagemakerEndpointConfiguration#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig.property.notificationConfig">NotificationConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig</a></code> | notification_config block. |

---

##### `S3OutputPath`<sup>Required</sup> <a name="S3OutputPath" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig.property.s3OutputPath"></a>

```csharp
public string S3OutputPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#s3_output_path SagemakerEndpointConfiguration#s3_output_path}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#kms_key_id SagemakerEndpointConfiguration#kms_key_id}.

---

##### `NotificationConfig`<sup>Optional</sup> <a name="NotificationConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig.property.notificationConfig"></a>

```csharp
public SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig NotificationConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig</a>

notification_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#notification_config SagemakerEndpointConfiguration#notification_config}

---

### SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig <a name="SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig {
    string ErrorTopic = null,
    string SuccessTopic = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig.property.errorTopic">ErrorTopic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#error_topic SagemakerEndpointConfiguration#error_topic}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig.property.successTopic">SuccessTopic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#success_topic SagemakerEndpointConfiguration#success_topic}. |

---

##### `ErrorTopic`<sup>Optional</sup> <a name="ErrorTopic" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig.property.errorTopic"></a>

```csharp
public string ErrorTopic { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#error_topic SagemakerEndpointConfiguration#error_topic}.

---

##### `SuccessTopic`<sup>Optional</sup> <a name="SuccessTopic" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig.property.successTopic"></a>

```csharp
public string SuccessTopic { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#success_topic SagemakerEndpointConfiguration#success_topic}.

---

### SagemakerEndpointConfigurationConfig <a name="SagemakerEndpointConfigurationConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerEndpointConfigurationConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object ProductionVariants,
    SagemakerEndpointConfigurationAsyncInferenceConfig AsyncInferenceConfig = null,
    SagemakerEndpointConfigurationDataCaptureConfig DataCaptureConfig = null,
    string Id = null,
    string KmsKeyArn = null,
    string Name = null,
    object ShadowProductionVariants = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.productionVariants">ProductionVariants</a></code> | <code>object</code> | production_variants block. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.asyncInferenceConfig">AsyncInferenceConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfig">SagemakerEndpointConfigurationAsyncInferenceConfig</a></code> | async_inference_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.dataCaptureConfig">DataCaptureConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig">SagemakerEndpointConfigurationDataCaptureConfig</a></code> | data_capture_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#id SagemakerEndpointConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#kms_key_arn SagemakerEndpointConfiguration#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#name SagemakerEndpointConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.shadowProductionVariants">ShadowProductionVariants</a></code> | <code>object</code> | shadow_production_variants block. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#tags SagemakerEndpointConfiguration#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#tags_all SagemakerEndpointConfiguration#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ProductionVariants`<sup>Required</sup> <a name="ProductionVariants" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.productionVariants"></a>

```csharp
public object ProductionVariants { get; set; }
```

- *Type:* object

production_variants block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#production_variants SagemakerEndpointConfiguration#production_variants}

---

##### `AsyncInferenceConfig`<sup>Optional</sup> <a name="AsyncInferenceConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.asyncInferenceConfig"></a>

```csharp
public SagemakerEndpointConfigurationAsyncInferenceConfig AsyncInferenceConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfig">SagemakerEndpointConfigurationAsyncInferenceConfig</a>

async_inference_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#async_inference_config SagemakerEndpointConfiguration#async_inference_config}

---

##### `DataCaptureConfig`<sup>Optional</sup> <a name="DataCaptureConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.dataCaptureConfig"></a>

```csharp
public SagemakerEndpointConfigurationDataCaptureConfig DataCaptureConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig">SagemakerEndpointConfigurationDataCaptureConfig</a>

data_capture_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#data_capture_config SagemakerEndpointConfiguration#data_capture_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#id SagemakerEndpointConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#kms_key_arn SagemakerEndpointConfiguration#kms_key_arn}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#name SagemakerEndpointConfiguration#name}.

---

##### `ShadowProductionVariants`<sup>Optional</sup> <a name="ShadowProductionVariants" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.shadowProductionVariants"></a>

```csharp
public object ShadowProductionVariants { get; set; }
```

- *Type:* object

shadow_production_variants block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#shadow_production_variants SagemakerEndpointConfiguration#shadow_production_variants}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#tags SagemakerEndpointConfiguration#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#tags_all SagemakerEndpointConfiguration#tags_all}.

---

### SagemakerEndpointConfigurationDataCaptureConfig <a name="SagemakerEndpointConfigurationDataCaptureConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerEndpointConfigurationDataCaptureConfig {
    object CaptureOptions,
    string DestinationS3Uri,
    double InitialSamplingPercentage,
    SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader CaptureContentTypeHeader = null,
    object EnableCapture = null,
    string KmsKeyId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig.property.captureOptions">CaptureOptions</a></code> | <code>object</code> | capture_options block. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig.property.destinationS3Uri">DestinationS3Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#destination_s3_uri SagemakerEndpointConfiguration#destination_s3_uri}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig.property.initialSamplingPercentage">InitialSamplingPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#initial_sampling_percentage SagemakerEndpointConfiguration#initial_sampling_percentage}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig.property.captureContentTypeHeader">CaptureContentTypeHeader</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader">SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader</a></code> | capture_content_type_header block. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig.property.enableCapture">EnableCapture</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#enable_capture SagemakerEndpointConfiguration#enable_capture}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#kms_key_id SagemakerEndpointConfiguration#kms_key_id}. |

---

##### `CaptureOptions`<sup>Required</sup> <a name="CaptureOptions" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig.property.captureOptions"></a>

```csharp
public object CaptureOptions { get; set; }
```

- *Type:* object

capture_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#capture_options SagemakerEndpointConfiguration#capture_options}

---

##### `DestinationS3Uri`<sup>Required</sup> <a name="DestinationS3Uri" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig.property.destinationS3Uri"></a>

```csharp
public string DestinationS3Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#destination_s3_uri SagemakerEndpointConfiguration#destination_s3_uri}.

---

##### `InitialSamplingPercentage`<sup>Required</sup> <a name="InitialSamplingPercentage" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig.property.initialSamplingPercentage"></a>

```csharp
public double InitialSamplingPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#initial_sampling_percentage SagemakerEndpointConfiguration#initial_sampling_percentage}.

---

##### `CaptureContentTypeHeader`<sup>Optional</sup> <a name="CaptureContentTypeHeader" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig.property.captureContentTypeHeader"></a>

```csharp
public SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader CaptureContentTypeHeader { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader">SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader</a>

capture_content_type_header block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#capture_content_type_header SagemakerEndpointConfiguration#capture_content_type_header}

---

##### `EnableCapture`<sup>Optional</sup> <a name="EnableCapture" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig.property.enableCapture"></a>

```csharp
public object EnableCapture { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#enable_capture SagemakerEndpointConfiguration#enable_capture}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#kms_key_id SagemakerEndpointConfiguration#kms_key_id}.

---

### SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader <a name="SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader {
    string[] CsvContentTypes = null,
    string[] JsonContentTypes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader.property.csvContentTypes">CsvContentTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#csv_content_types SagemakerEndpointConfiguration#csv_content_types}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader.property.jsonContentTypes">JsonContentTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#json_content_types SagemakerEndpointConfiguration#json_content_types}. |

---

##### `CsvContentTypes`<sup>Optional</sup> <a name="CsvContentTypes" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader.property.csvContentTypes"></a>

```csharp
public string[] CsvContentTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#csv_content_types SagemakerEndpointConfiguration#csv_content_types}.

---

##### `JsonContentTypes`<sup>Optional</sup> <a name="JsonContentTypes" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader.property.jsonContentTypes"></a>

```csharp
public string[] JsonContentTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#json_content_types SagemakerEndpointConfiguration#json_content_types}.

---

### SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions <a name="SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions {
    string CaptureMode
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions.property.captureMode">CaptureMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#capture_mode SagemakerEndpointConfiguration#capture_mode}. |

---

##### `CaptureMode`<sup>Required</sup> <a name="CaptureMode" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions.property.captureMode"></a>

```csharp
public string CaptureMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#capture_mode SagemakerEndpointConfiguration#capture_mode}.

---

### SagemakerEndpointConfigurationProductionVariants <a name="SagemakerEndpointConfigurationProductionVariants" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerEndpointConfigurationProductionVariants {
    string ModelName,
    string AcceleratorType = null,
    double ContainerStartupHealthCheckTimeoutInSeconds = null,
    SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig CoreDumpConfig = null,
    double InitialInstanceCount = null,
    double InitialVariantWeight = null,
    string InstanceType = null,
    double ModelDataDownloadTimeoutInSeconds = null,
    SagemakerEndpointConfigurationProductionVariantsServerlessConfig ServerlessConfig = null,
    string VariantName = null,
    double VolumeSizeInGb = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.modelName">ModelName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#model_name SagemakerEndpointConfiguration#model_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.acceleratorType">AcceleratorType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#accelerator_type SagemakerEndpointConfiguration#accelerator_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.containerStartupHealthCheckTimeoutInSeconds">ContainerStartupHealthCheckTimeoutInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#container_startup_health_check_timeout_in_seconds SagemakerEndpointConfiguration#container_startup_health_check_timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.coreDumpConfig">CoreDumpConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig">SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig</a></code> | core_dump_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.initialInstanceCount">InitialInstanceCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#initial_instance_count SagemakerEndpointConfiguration#initial_instance_count}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.initialVariantWeight">InitialVariantWeight</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#initial_variant_weight SagemakerEndpointConfiguration#initial_variant_weight}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.instanceType">InstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#instance_type SagemakerEndpointConfiguration#instance_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.modelDataDownloadTimeoutInSeconds">ModelDataDownloadTimeoutInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#model_data_download_timeout_in_seconds SagemakerEndpointConfiguration#model_data_download_timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.serverlessConfig">ServerlessConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfig">SagemakerEndpointConfigurationProductionVariantsServerlessConfig</a></code> | serverless_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.variantName">VariantName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#variant_name SagemakerEndpointConfiguration#variant_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.volumeSizeInGb">VolumeSizeInGb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#volume_size_in_gb SagemakerEndpointConfiguration#volume_size_in_gb}. |

---

##### `ModelName`<sup>Required</sup> <a name="ModelName" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.modelName"></a>

```csharp
public string ModelName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#model_name SagemakerEndpointConfiguration#model_name}.

---

##### `AcceleratorType`<sup>Optional</sup> <a name="AcceleratorType" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.acceleratorType"></a>

```csharp
public string AcceleratorType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#accelerator_type SagemakerEndpointConfiguration#accelerator_type}.

---

##### `ContainerStartupHealthCheckTimeoutInSeconds`<sup>Optional</sup> <a name="ContainerStartupHealthCheckTimeoutInSeconds" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.containerStartupHealthCheckTimeoutInSeconds"></a>

```csharp
public double ContainerStartupHealthCheckTimeoutInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#container_startup_health_check_timeout_in_seconds SagemakerEndpointConfiguration#container_startup_health_check_timeout_in_seconds}.

---

##### `CoreDumpConfig`<sup>Optional</sup> <a name="CoreDumpConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.coreDumpConfig"></a>

```csharp
public SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig CoreDumpConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig">SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig</a>

core_dump_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#core_dump_config SagemakerEndpointConfiguration#core_dump_config}

---

##### `InitialInstanceCount`<sup>Optional</sup> <a name="InitialInstanceCount" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.initialInstanceCount"></a>

```csharp
public double InitialInstanceCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#initial_instance_count SagemakerEndpointConfiguration#initial_instance_count}.

---

##### `InitialVariantWeight`<sup>Optional</sup> <a name="InitialVariantWeight" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.initialVariantWeight"></a>

```csharp
public double InitialVariantWeight { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#initial_variant_weight SagemakerEndpointConfiguration#initial_variant_weight}.

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#instance_type SagemakerEndpointConfiguration#instance_type}.

---

##### `ModelDataDownloadTimeoutInSeconds`<sup>Optional</sup> <a name="ModelDataDownloadTimeoutInSeconds" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.modelDataDownloadTimeoutInSeconds"></a>

```csharp
public double ModelDataDownloadTimeoutInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#model_data_download_timeout_in_seconds SagemakerEndpointConfiguration#model_data_download_timeout_in_seconds}.

---

##### `ServerlessConfig`<sup>Optional</sup> <a name="ServerlessConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.serverlessConfig"></a>

```csharp
public SagemakerEndpointConfigurationProductionVariantsServerlessConfig ServerlessConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfig">SagemakerEndpointConfigurationProductionVariantsServerlessConfig</a>

serverless_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#serverless_config SagemakerEndpointConfiguration#serverless_config}

---

##### `VariantName`<sup>Optional</sup> <a name="VariantName" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.variantName"></a>

```csharp
public string VariantName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#variant_name SagemakerEndpointConfiguration#variant_name}.

---

##### `VolumeSizeInGb`<sup>Optional</sup> <a name="VolumeSizeInGb" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariants.property.volumeSizeInGb"></a>

```csharp
public double VolumeSizeInGb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#volume_size_in_gb SagemakerEndpointConfiguration#volume_size_in_gb}.

---

### SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig <a name="SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig {
    string DestinationS3Uri,
    string KmsKeyId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig.property.destinationS3Uri">DestinationS3Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#destination_s3_uri SagemakerEndpointConfiguration#destination_s3_uri}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#kms_key_id SagemakerEndpointConfiguration#kms_key_id}. |

---

##### `DestinationS3Uri`<sup>Required</sup> <a name="DestinationS3Uri" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig.property.destinationS3Uri"></a>

```csharp
public string DestinationS3Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#destination_s3_uri SagemakerEndpointConfiguration#destination_s3_uri}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#kms_key_id SagemakerEndpointConfiguration#kms_key_id}.

---

### SagemakerEndpointConfigurationProductionVariantsServerlessConfig <a name="SagemakerEndpointConfigurationProductionVariantsServerlessConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerEndpointConfigurationProductionVariantsServerlessConfig {
    double MaxConcurrency,
    double MemorySizeInMb
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfig.property.maxConcurrency">MaxConcurrency</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#max_concurrency SagemakerEndpointConfiguration#max_concurrency}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfig.property.memorySizeInMb">MemorySizeInMb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#memory_size_in_mb SagemakerEndpointConfiguration#memory_size_in_mb}. |

---

##### `MaxConcurrency`<sup>Required</sup> <a name="MaxConcurrency" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfig.property.maxConcurrency"></a>

```csharp
public double MaxConcurrency { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#max_concurrency SagemakerEndpointConfiguration#max_concurrency}.

---

##### `MemorySizeInMb`<sup>Required</sup> <a name="MemorySizeInMb" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfig.property.memorySizeInMb"></a>

```csharp
public double MemorySizeInMb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#memory_size_in_mb SagemakerEndpointConfiguration#memory_size_in_mb}.

---

### SagemakerEndpointConfigurationShadowProductionVariants <a name="SagemakerEndpointConfigurationShadowProductionVariants" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerEndpointConfigurationShadowProductionVariants {
    string ModelName,
    string AcceleratorType = null,
    double ContainerStartupHealthCheckTimeoutInSeconds = null,
    SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig CoreDumpConfig = null,
    double InitialInstanceCount = null,
    double InitialVariantWeight = null,
    string InstanceType = null,
    double ModelDataDownloadTimeoutInSeconds = null,
    SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig ServerlessConfig = null,
    string VariantName = null,
    double VolumeSizeInGb = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.modelName">ModelName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#model_name SagemakerEndpointConfiguration#model_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.acceleratorType">AcceleratorType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#accelerator_type SagemakerEndpointConfiguration#accelerator_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.containerStartupHealthCheckTimeoutInSeconds">ContainerStartupHealthCheckTimeoutInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#container_startup_health_check_timeout_in_seconds SagemakerEndpointConfiguration#container_startup_health_check_timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.coreDumpConfig">CoreDumpConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig">SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig</a></code> | core_dump_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.initialInstanceCount">InitialInstanceCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#initial_instance_count SagemakerEndpointConfiguration#initial_instance_count}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.initialVariantWeight">InitialVariantWeight</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#initial_variant_weight SagemakerEndpointConfiguration#initial_variant_weight}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.instanceType">InstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#instance_type SagemakerEndpointConfiguration#instance_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.modelDataDownloadTimeoutInSeconds">ModelDataDownloadTimeoutInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#model_data_download_timeout_in_seconds SagemakerEndpointConfiguration#model_data_download_timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.serverlessConfig">ServerlessConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig">SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig</a></code> | serverless_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.variantName">VariantName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#variant_name SagemakerEndpointConfiguration#variant_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.volumeSizeInGb">VolumeSizeInGb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#volume_size_in_gb SagemakerEndpointConfiguration#volume_size_in_gb}. |

---

##### `ModelName`<sup>Required</sup> <a name="ModelName" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.modelName"></a>

```csharp
public string ModelName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#model_name SagemakerEndpointConfiguration#model_name}.

---

##### `AcceleratorType`<sup>Optional</sup> <a name="AcceleratorType" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.acceleratorType"></a>

```csharp
public string AcceleratorType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#accelerator_type SagemakerEndpointConfiguration#accelerator_type}.

---

##### `ContainerStartupHealthCheckTimeoutInSeconds`<sup>Optional</sup> <a name="ContainerStartupHealthCheckTimeoutInSeconds" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.containerStartupHealthCheckTimeoutInSeconds"></a>

```csharp
public double ContainerStartupHealthCheckTimeoutInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#container_startup_health_check_timeout_in_seconds SagemakerEndpointConfiguration#container_startup_health_check_timeout_in_seconds}.

---

##### `CoreDumpConfig`<sup>Optional</sup> <a name="CoreDumpConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.coreDumpConfig"></a>

```csharp
public SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig CoreDumpConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig">SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig</a>

core_dump_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#core_dump_config SagemakerEndpointConfiguration#core_dump_config}

---

##### `InitialInstanceCount`<sup>Optional</sup> <a name="InitialInstanceCount" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.initialInstanceCount"></a>

```csharp
public double InitialInstanceCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#initial_instance_count SagemakerEndpointConfiguration#initial_instance_count}.

---

##### `InitialVariantWeight`<sup>Optional</sup> <a name="InitialVariantWeight" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.initialVariantWeight"></a>

```csharp
public double InitialVariantWeight { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#initial_variant_weight SagemakerEndpointConfiguration#initial_variant_weight}.

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#instance_type SagemakerEndpointConfiguration#instance_type}.

---

##### `ModelDataDownloadTimeoutInSeconds`<sup>Optional</sup> <a name="ModelDataDownloadTimeoutInSeconds" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.modelDataDownloadTimeoutInSeconds"></a>

```csharp
public double ModelDataDownloadTimeoutInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#model_data_download_timeout_in_seconds SagemakerEndpointConfiguration#model_data_download_timeout_in_seconds}.

---

##### `ServerlessConfig`<sup>Optional</sup> <a name="ServerlessConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.serverlessConfig"></a>

```csharp
public SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig ServerlessConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig">SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig</a>

serverless_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#serverless_config SagemakerEndpointConfiguration#serverless_config}

---

##### `VariantName`<sup>Optional</sup> <a name="VariantName" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.variantName"></a>

```csharp
public string VariantName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#variant_name SagemakerEndpointConfiguration#variant_name}.

---

##### `VolumeSizeInGb`<sup>Optional</sup> <a name="VolumeSizeInGb" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariants.property.volumeSizeInGb"></a>

```csharp
public double VolumeSizeInGb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#volume_size_in_gb SagemakerEndpointConfiguration#volume_size_in_gb}.

---

### SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig <a name="SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig {
    string DestinationS3Uri,
    string KmsKeyId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig.property.destinationS3Uri">DestinationS3Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#destination_s3_uri SagemakerEndpointConfiguration#destination_s3_uri}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#kms_key_id SagemakerEndpointConfiguration#kms_key_id}. |

---

##### `DestinationS3Uri`<sup>Required</sup> <a name="DestinationS3Uri" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig.property.destinationS3Uri"></a>

```csharp
public string DestinationS3Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#destination_s3_uri SagemakerEndpointConfiguration#destination_s3_uri}.

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#kms_key_id SagemakerEndpointConfiguration#kms_key_id}.

---

### SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig <a name="SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig {
    double MaxConcurrency,
    double MemorySizeInMb
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig.property.maxConcurrency">MaxConcurrency</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#max_concurrency SagemakerEndpointConfiguration#max_concurrency}. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig.property.memorySizeInMb">MemorySizeInMb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#memory_size_in_mb SagemakerEndpointConfiguration#memory_size_in_mb}. |

---

##### `MaxConcurrency`<sup>Required</sup> <a name="MaxConcurrency" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig.property.maxConcurrency"></a>

```csharp
public double MaxConcurrency { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#max_concurrency SagemakerEndpointConfiguration#max_concurrency}.

---

##### `MemorySizeInMb`<sup>Required</sup> <a name="MemorySizeInMb" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig.property.memorySizeInMb"></a>

```csharp
public double MemorySizeInMb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint_configuration#memory_size_in_mb SagemakerEndpointConfiguration#memory_size_in_mb}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference <a name="SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.resetMaxConcurrentInvocationsPerInstance">ResetMaxConcurrentInvocationsPerInstance</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxConcurrentInvocationsPerInstance` <a name="ResetMaxConcurrentInvocationsPerInstance" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.resetMaxConcurrentInvocationsPerInstance"></a>

```csharp
private void ResetMaxConcurrentInvocationsPerInstance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.property.maxConcurrentInvocationsPerInstanceInput">MaxConcurrentInvocationsPerInstanceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.property.maxConcurrentInvocationsPerInstance">MaxConcurrentInvocationsPerInstance</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig">SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxConcurrentInvocationsPerInstanceInput`<sup>Optional</sup> <a name="MaxConcurrentInvocationsPerInstanceInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.property.maxConcurrentInvocationsPerInstanceInput"></a>

```csharp
public double MaxConcurrentInvocationsPerInstanceInput { get; }
```

- *Type:* double

---

##### `MaxConcurrentInvocationsPerInstance`<sup>Required</sup> <a name="MaxConcurrentInvocationsPerInstance" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.property.maxConcurrentInvocationsPerInstance"></a>

```csharp
public double MaxConcurrentInvocationsPerInstance { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference.property.internalValue"></a>

```csharp
public SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig">SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig</a>

---


### SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference <a name="SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resetErrorTopic">ResetErrorTopic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resetSuccessTopic">ResetSuccessTopic</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetErrorTopic` <a name="ResetErrorTopic" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resetErrorTopic"></a>

```csharp
private void ResetErrorTopic()
```

##### `ResetSuccessTopic` <a name="ResetSuccessTopic" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.resetSuccessTopic"></a>

```csharp
private void ResetSuccessTopic()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.errorTopicInput">ErrorTopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.successTopicInput">SuccessTopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.errorTopic">ErrorTopic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.successTopic">SuccessTopic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorTopicInput`<sup>Optional</sup> <a name="ErrorTopicInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.errorTopicInput"></a>

```csharp
public string ErrorTopicInput { get; }
```

- *Type:* string

---

##### `SuccessTopicInput`<sup>Optional</sup> <a name="SuccessTopicInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.successTopicInput"></a>

```csharp
public string SuccessTopicInput { get; }
```

- *Type:* string

---

##### `ErrorTopic`<sup>Required</sup> <a name="ErrorTopic" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.errorTopic"></a>

```csharp
public string ErrorTopic { get; }
```

- *Type:* string

---

##### `SuccessTopic`<sup>Required</sup> <a name="SuccessTopic" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.successTopic"></a>

```csharp
public string SuccessTopic { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference.property.internalValue"></a>

```csharp
public SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig</a>

---


### SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference <a name="SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.putNotificationConfig">PutNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.resetNotificationConfig">ResetNotificationConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNotificationConfig` <a name="PutNotificationConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.putNotificationConfig"></a>

```csharp
private void PutNotificationConfig(SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.putNotificationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig</a>

---

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetNotificationConfig` <a name="ResetNotificationConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.resetNotificationConfig"></a>

```csharp
private void ResetNotificationConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.notificationConfig">NotificationConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.notificationConfigInput">NotificationConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.s3OutputPathInput">S3OutputPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.s3OutputPath">S3OutputPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NotificationConfig`<sup>Required</sup> <a name="NotificationConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.notificationConfig"></a>

```csharp
public SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference NotificationConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference</a>

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `NotificationConfigInput`<sup>Optional</sup> <a name="NotificationConfigInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.notificationConfigInput"></a>

```csharp
public SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig NotificationConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig</a>

---

##### `S3OutputPathInput`<sup>Optional</sup> <a name="S3OutputPathInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.s3OutputPathInput"></a>

```csharp
public string S3OutputPathInput { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `S3OutputPath`<sup>Required</sup> <a name="S3OutputPath" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.s3OutputPath"></a>

```csharp
public string S3OutputPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference.property.internalValue"></a>

```csharp
public SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig</a>

---


### SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference <a name="SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.putClientConfig">PutClientConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.putOutputConfig">PutOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.resetClientConfig">ResetClientConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClientConfig` <a name="PutClientConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.putClientConfig"></a>

```csharp
private void PutClientConfig(SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.putClientConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig">SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig</a>

---

##### `PutOutputConfig` <a name="PutOutputConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.putOutputConfig"></a>

```csharp
private void PutOutputConfig(SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.putOutputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig</a>

---

##### `ResetClientConfig` <a name="ResetClientConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.resetClientConfig"></a>

```csharp
private void ResetClientConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.property.clientConfig">ClientConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference">SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.property.outputConfig">OutputConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.property.clientConfigInput">ClientConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig">SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.property.outputConfigInput">OutputConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfig">SagemakerEndpointConfigurationAsyncInferenceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientConfig`<sup>Required</sup> <a name="ClientConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.property.clientConfig"></a>

```csharp
public SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference ClientConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference">SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference</a>

---

##### `OutputConfig`<sup>Required</sup> <a name="OutputConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.property.outputConfig"></a>

```csharp
public SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference OutputConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference</a>

---

##### `ClientConfigInput`<sup>Optional</sup> <a name="ClientConfigInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.property.clientConfigInput"></a>

```csharp
public SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig ClientConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig">SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig</a>

---

##### `OutputConfigInput`<sup>Optional</sup> <a name="OutputConfigInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.property.outputConfigInput"></a>

```csharp
public SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig OutputConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig">SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference.property.internalValue"></a>

```csharp
public SagemakerEndpointConfigurationAsyncInferenceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationAsyncInferenceConfig">SagemakerEndpointConfigurationAsyncInferenceConfig</a>

---


### SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference <a name="SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.resetCsvContentTypes">ResetCsvContentTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.resetJsonContentTypes">ResetJsonContentTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCsvContentTypes` <a name="ResetCsvContentTypes" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.resetCsvContentTypes"></a>

```csharp
private void ResetCsvContentTypes()
```

##### `ResetJsonContentTypes` <a name="ResetJsonContentTypes" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.resetJsonContentTypes"></a>

```csharp
private void ResetJsonContentTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.csvContentTypesInput">CsvContentTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.jsonContentTypesInput">JsonContentTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.csvContentTypes">CsvContentTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.jsonContentTypes">JsonContentTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader">SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CsvContentTypesInput`<sup>Optional</sup> <a name="CsvContentTypesInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.csvContentTypesInput"></a>

```csharp
public string[] CsvContentTypesInput { get; }
```

- *Type:* string[]

---

##### `JsonContentTypesInput`<sup>Optional</sup> <a name="JsonContentTypesInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.jsonContentTypesInput"></a>

```csharp
public string[] JsonContentTypesInput { get; }
```

- *Type:* string[]

---

##### `CsvContentTypes`<sup>Required</sup> <a name="CsvContentTypes" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.csvContentTypes"></a>

```csharp
public string[] CsvContentTypes { get; }
```

- *Type:* string[]

---

##### `JsonContentTypes`<sup>Required</sup> <a name="JsonContentTypes" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.jsonContentTypes"></a>

```csharp
public string[] JsonContentTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference.property.internalValue"></a>

```csharp
public SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader">SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader</a>

---


### SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList <a name="SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.get"></a>

```csharp
private SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference <a name="SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.property.captureModeInput">CaptureModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.property.captureMode">CaptureMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CaptureModeInput`<sup>Optional</sup> <a name="CaptureModeInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.property.captureModeInput"></a>

```csharp
public string CaptureModeInput { get; }
```

- *Type:* string

---

##### `CaptureMode`<sup>Required</sup> <a name="CaptureMode" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.property.captureMode"></a>

```csharp
public string CaptureMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SagemakerEndpointConfigurationDataCaptureConfigOutputReference <a name="SagemakerEndpointConfigurationDataCaptureConfigOutputReference" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerEndpointConfigurationDataCaptureConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.putCaptureContentTypeHeader">PutCaptureContentTypeHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.putCaptureOptions">PutCaptureOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.resetCaptureContentTypeHeader">ResetCaptureContentTypeHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.resetEnableCapture">ResetEnableCapture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCaptureContentTypeHeader` <a name="PutCaptureContentTypeHeader" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.putCaptureContentTypeHeader"></a>

```csharp
private void PutCaptureContentTypeHeader(SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.putCaptureContentTypeHeader.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader">SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader</a>

---

##### `PutCaptureOptions` <a name="PutCaptureOptions" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.putCaptureOptions"></a>

```csharp
private void PutCaptureOptions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.putCaptureOptions.parameter.value"></a>

- *Type:* object

---

##### `ResetCaptureContentTypeHeader` <a name="ResetCaptureContentTypeHeader" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.resetCaptureContentTypeHeader"></a>

```csharp
private void ResetCaptureContentTypeHeader()
```

##### `ResetEnableCapture` <a name="ResetEnableCapture" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.resetEnableCapture"></a>

```csharp
private void ResetEnableCapture()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.captureContentTypeHeader">CaptureContentTypeHeader</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference">SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.captureOptions">CaptureOptions</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList">SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.captureContentTypeHeaderInput">CaptureContentTypeHeaderInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader">SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.captureOptionsInput">CaptureOptionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.destinationS3UriInput">DestinationS3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.enableCaptureInput">EnableCaptureInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.initialSamplingPercentageInput">InitialSamplingPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.destinationS3Uri">DestinationS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.enableCapture">EnableCapture</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.initialSamplingPercentage">InitialSamplingPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig">SagemakerEndpointConfigurationDataCaptureConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CaptureContentTypeHeader`<sup>Required</sup> <a name="CaptureContentTypeHeader" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.captureContentTypeHeader"></a>

```csharp
public SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference CaptureContentTypeHeader { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference">SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference</a>

---

##### `CaptureOptions`<sup>Required</sup> <a name="CaptureOptions" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.captureOptions"></a>

```csharp
public SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList CaptureOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList">SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList</a>

---

##### `CaptureContentTypeHeaderInput`<sup>Optional</sup> <a name="CaptureContentTypeHeaderInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.captureContentTypeHeaderInput"></a>

```csharp
public SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader CaptureContentTypeHeaderInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader">SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader</a>

---

##### `CaptureOptionsInput`<sup>Optional</sup> <a name="CaptureOptionsInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.captureOptionsInput"></a>

```csharp
public object CaptureOptionsInput { get; }
```

- *Type:* object

---

##### `DestinationS3UriInput`<sup>Optional</sup> <a name="DestinationS3UriInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.destinationS3UriInput"></a>

```csharp
public string DestinationS3UriInput { get; }
```

- *Type:* string

---

##### `EnableCaptureInput`<sup>Optional</sup> <a name="EnableCaptureInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.enableCaptureInput"></a>

```csharp
public object EnableCaptureInput { get; }
```

- *Type:* object

---

##### `InitialSamplingPercentageInput`<sup>Optional</sup> <a name="InitialSamplingPercentageInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.initialSamplingPercentageInput"></a>

```csharp
public double InitialSamplingPercentageInput { get; }
```

- *Type:* double

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `DestinationS3Uri`<sup>Required</sup> <a name="DestinationS3Uri" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.destinationS3Uri"></a>

```csharp
public string DestinationS3Uri { get; }
```

- *Type:* string

---

##### `EnableCapture`<sup>Required</sup> <a name="EnableCapture" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.enableCapture"></a>

```csharp
public object EnableCapture { get; }
```

- *Type:* object

---

##### `InitialSamplingPercentage`<sup>Required</sup> <a name="InitialSamplingPercentage" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.initialSamplingPercentage"></a>

```csharp
public double InitialSamplingPercentage { get; }
```

- *Type:* double

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfigOutputReference.property.internalValue"></a>

```csharp
public SagemakerEndpointConfigurationDataCaptureConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationDataCaptureConfig">SagemakerEndpointConfigurationDataCaptureConfig</a>

---


### SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference <a name="SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.property.destinationS3UriInput">DestinationS3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.property.destinationS3Uri">DestinationS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig">SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationS3UriInput`<sup>Optional</sup> <a name="DestinationS3UriInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.property.destinationS3UriInput"></a>

```csharp
public string DestinationS3UriInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `DestinationS3Uri`<sup>Required</sup> <a name="DestinationS3Uri" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.property.destinationS3Uri"></a>

```csharp
public string DestinationS3Uri { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference.property.internalValue"></a>

```csharp
public SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig">SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig</a>

---


### SagemakerEndpointConfigurationProductionVariantsList <a name="SagemakerEndpointConfigurationProductionVariantsList" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerEndpointConfigurationProductionVariantsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.get"></a>

```csharp
private SagemakerEndpointConfigurationProductionVariantsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SagemakerEndpointConfigurationProductionVariantsOutputReference <a name="SagemakerEndpointConfigurationProductionVariantsOutputReference" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerEndpointConfigurationProductionVariantsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.putCoreDumpConfig">PutCoreDumpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.putServerlessConfig">PutServerlessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetAcceleratorType">ResetAcceleratorType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetContainerStartupHealthCheckTimeoutInSeconds">ResetContainerStartupHealthCheckTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetCoreDumpConfig">ResetCoreDumpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetInitialInstanceCount">ResetInitialInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetInitialVariantWeight">ResetInitialVariantWeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetModelDataDownloadTimeoutInSeconds">ResetModelDataDownloadTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetServerlessConfig">ResetServerlessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetVariantName">ResetVariantName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetVolumeSizeInGb">ResetVolumeSizeInGb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCoreDumpConfig` <a name="PutCoreDumpConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.putCoreDumpConfig"></a>

```csharp
private void PutCoreDumpConfig(SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.putCoreDumpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig">SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig</a>

---

##### `PutServerlessConfig` <a name="PutServerlessConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.putServerlessConfig"></a>

```csharp
private void PutServerlessConfig(SagemakerEndpointConfigurationProductionVariantsServerlessConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.putServerlessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfig">SagemakerEndpointConfigurationProductionVariantsServerlessConfig</a>

---

##### `ResetAcceleratorType` <a name="ResetAcceleratorType" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetAcceleratorType"></a>

```csharp
private void ResetAcceleratorType()
```

##### `ResetContainerStartupHealthCheckTimeoutInSeconds` <a name="ResetContainerStartupHealthCheckTimeoutInSeconds" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetContainerStartupHealthCheckTimeoutInSeconds"></a>

```csharp
private void ResetContainerStartupHealthCheckTimeoutInSeconds()
```

##### `ResetCoreDumpConfig` <a name="ResetCoreDumpConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetCoreDumpConfig"></a>

```csharp
private void ResetCoreDumpConfig()
```

##### `ResetInitialInstanceCount` <a name="ResetInitialInstanceCount" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetInitialInstanceCount"></a>

```csharp
private void ResetInitialInstanceCount()
```

##### `ResetInitialVariantWeight` <a name="ResetInitialVariantWeight" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetInitialVariantWeight"></a>

```csharp
private void ResetInitialVariantWeight()
```

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetInstanceType"></a>

```csharp
private void ResetInstanceType()
```

##### `ResetModelDataDownloadTimeoutInSeconds` <a name="ResetModelDataDownloadTimeoutInSeconds" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetModelDataDownloadTimeoutInSeconds"></a>

```csharp
private void ResetModelDataDownloadTimeoutInSeconds()
```

##### `ResetServerlessConfig` <a name="ResetServerlessConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetServerlessConfig"></a>

```csharp
private void ResetServerlessConfig()
```

##### `ResetVariantName` <a name="ResetVariantName" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetVariantName"></a>

```csharp
private void ResetVariantName()
```

##### `ResetVolumeSizeInGb` <a name="ResetVolumeSizeInGb" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.resetVolumeSizeInGb"></a>

```csharp
private void ResetVolumeSizeInGb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.coreDumpConfig">CoreDumpConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference">SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.serverlessConfig">ServerlessConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference">SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.acceleratorTypeInput">AcceleratorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.containerStartupHealthCheckTimeoutInSecondsInput">ContainerStartupHealthCheckTimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.coreDumpConfigInput">CoreDumpConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig">SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.initialInstanceCountInput">InitialInstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.initialVariantWeightInput">InitialVariantWeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.modelDataDownloadTimeoutInSecondsInput">ModelDataDownloadTimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.modelNameInput">ModelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.serverlessConfigInput">ServerlessConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfig">SagemakerEndpointConfigurationProductionVariantsServerlessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.variantNameInput">VariantNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.volumeSizeInGbInput">VolumeSizeInGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.acceleratorType">AcceleratorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.containerStartupHealthCheckTimeoutInSeconds">ContainerStartupHealthCheckTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.initialInstanceCount">InitialInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.initialVariantWeight">InitialVariantWeight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.modelDataDownloadTimeoutInSeconds">ModelDataDownloadTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.modelName">ModelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.variantName">VariantName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.volumeSizeInGb">VolumeSizeInGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CoreDumpConfig`<sup>Required</sup> <a name="CoreDumpConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.coreDumpConfig"></a>

```csharp
public SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference CoreDumpConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference">SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference</a>

---

##### `ServerlessConfig`<sup>Required</sup> <a name="ServerlessConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.serverlessConfig"></a>

```csharp
public SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference ServerlessConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference">SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference</a>

---

##### `AcceleratorTypeInput`<sup>Optional</sup> <a name="AcceleratorTypeInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.acceleratorTypeInput"></a>

```csharp
public string AcceleratorTypeInput { get; }
```

- *Type:* string

---

##### `ContainerStartupHealthCheckTimeoutInSecondsInput`<sup>Optional</sup> <a name="ContainerStartupHealthCheckTimeoutInSecondsInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.containerStartupHealthCheckTimeoutInSecondsInput"></a>

```csharp
public double ContainerStartupHealthCheckTimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `CoreDumpConfigInput`<sup>Optional</sup> <a name="CoreDumpConfigInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.coreDumpConfigInput"></a>

```csharp
public SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig CoreDumpConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig">SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig</a>

---

##### `InitialInstanceCountInput`<sup>Optional</sup> <a name="InitialInstanceCountInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.initialInstanceCountInput"></a>

```csharp
public double InitialInstanceCountInput { get; }
```

- *Type:* double

---

##### `InitialVariantWeightInput`<sup>Optional</sup> <a name="InitialVariantWeightInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.initialVariantWeightInput"></a>

```csharp
public double InitialVariantWeightInput { get; }
```

- *Type:* double

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `ModelDataDownloadTimeoutInSecondsInput`<sup>Optional</sup> <a name="ModelDataDownloadTimeoutInSecondsInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.modelDataDownloadTimeoutInSecondsInput"></a>

```csharp
public double ModelDataDownloadTimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `ModelNameInput`<sup>Optional</sup> <a name="ModelNameInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.modelNameInput"></a>

```csharp
public string ModelNameInput { get; }
```

- *Type:* string

---

##### `ServerlessConfigInput`<sup>Optional</sup> <a name="ServerlessConfigInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.serverlessConfigInput"></a>

```csharp
public SagemakerEndpointConfigurationProductionVariantsServerlessConfig ServerlessConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfig">SagemakerEndpointConfigurationProductionVariantsServerlessConfig</a>

---

##### `VariantNameInput`<sup>Optional</sup> <a name="VariantNameInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.variantNameInput"></a>

```csharp
public string VariantNameInput { get; }
```

- *Type:* string

---

##### `VolumeSizeInGbInput`<sup>Optional</sup> <a name="VolumeSizeInGbInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.volumeSizeInGbInput"></a>

```csharp
public double VolumeSizeInGbInput { get; }
```

- *Type:* double

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.acceleratorType"></a>

```csharp
public string AcceleratorType { get; }
```

- *Type:* string

---

##### `ContainerStartupHealthCheckTimeoutInSeconds`<sup>Required</sup> <a name="ContainerStartupHealthCheckTimeoutInSeconds" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.containerStartupHealthCheckTimeoutInSeconds"></a>

```csharp
public double ContainerStartupHealthCheckTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `InitialInstanceCount`<sup>Required</sup> <a name="InitialInstanceCount" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.initialInstanceCount"></a>

```csharp
public double InitialInstanceCount { get; }
```

- *Type:* double

---

##### `InitialVariantWeight`<sup>Required</sup> <a name="InitialVariantWeight" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.initialVariantWeight"></a>

```csharp
public double InitialVariantWeight { get; }
```

- *Type:* double

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `ModelDataDownloadTimeoutInSeconds`<sup>Required</sup> <a name="ModelDataDownloadTimeoutInSeconds" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.modelDataDownloadTimeoutInSeconds"></a>

```csharp
public double ModelDataDownloadTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `ModelName`<sup>Required</sup> <a name="ModelName" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.modelName"></a>

```csharp
public string ModelName { get; }
```

- *Type:* string

---

##### `VariantName`<sup>Required</sup> <a name="VariantName" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.variantName"></a>

```csharp
public string VariantName { get; }
```

- *Type:* string

---

##### `VolumeSizeInGb`<sup>Required</sup> <a name="VolumeSizeInGb" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.volumeSizeInGb"></a>

```csharp
public double VolumeSizeInGb { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference <a name="SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.property.maxConcurrencyInput">MaxConcurrencyInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.property.memorySizeInMbInput">MemorySizeInMbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.property.maxConcurrency">MaxConcurrency</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.property.memorySizeInMb">MemorySizeInMb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfig">SagemakerEndpointConfigurationProductionVariantsServerlessConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxConcurrencyInput`<sup>Optional</sup> <a name="MaxConcurrencyInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.property.maxConcurrencyInput"></a>

```csharp
public double MaxConcurrencyInput { get; }
```

- *Type:* double

---

##### `MemorySizeInMbInput`<sup>Optional</sup> <a name="MemorySizeInMbInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.property.memorySizeInMbInput"></a>

```csharp
public double MemorySizeInMbInput { get; }
```

- *Type:* double

---

##### `MaxConcurrency`<sup>Required</sup> <a name="MaxConcurrency" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.property.maxConcurrency"></a>

```csharp
public double MaxConcurrency { get; }
```

- *Type:* double

---

##### `MemorySizeInMb`<sup>Required</sup> <a name="MemorySizeInMb" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.property.memorySizeInMb"></a>

```csharp
public double MemorySizeInMb { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference.property.internalValue"></a>

```csharp
public SagemakerEndpointConfigurationProductionVariantsServerlessConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationProductionVariantsServerlessConfig">SagemakerEndpointConfigurationProductionVariantsServerlessConfig</a>

---


### SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference <a name="SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.property.destinationS3UriInput">DestinationS3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.property.destinationS3Uri">DestinationS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig">SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationS3UriInput`<sup>Optional</sup> <a name="DestinationS3UriInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.property.destinationS3UriInput"></a>

```csharp
public string DestinationS3UriInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `DestinationS3Uri`<sup>Required</sup> <a name="DestinationS3Uri" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.property.destinationS3Uri"></a>

```csharp
public string DestinationS3Uri { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference.property.internalValue"></a>

```csharp
public SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig">SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig</a>

---


### SagemakerEndpointConfigurationShadowProductionVariantsList <a name="SagemakerEndpointConfigurationShadowProductionVariantsList" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerEndpointConfigurationShadowProductionVariantsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.get"></a>

```csharp
private SagemakerEndpointConfigurationShadowProductionVariantsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SagemakerEndpointConfigurationShadowProductionVariantsOutputReference <a name="SagemakerEndpointConfigurationShadowProductionVariantsOutputReference" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerEndpointConfigurationShadowProductionVariantsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.putCoreDumpConfig">PutCoreDumpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.putServerlessConfig">PutServerlessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetAcceleratorType">ResetAcceleratorType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetContainerStartupHealthCheckTimeoutInSeconds">ResetContainerStartupHealthCheckTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetCoreDumpConfig">ResetCoreDumpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetInitialInstanceCount">ResetInitialInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetInitialVariantWeight">ResetInitialVariantWeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetModelDataDownloadTimeoutInSeconds">ResetModelDataDownloadTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetServerlessConfig">ResetServerlessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetVariantName">ResetVariantName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetVolumeSizeInGb">ResetVolumeSizeInGb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCoreDumpConfig` <a name="PutCoreDumpConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.putCoreDumpConfig"></a>

```csharp
private void PutCoreDumpConfig(SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.putCoreDumpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig">SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig</a>

---

##### `PutServerlessConfig` <a name="PutServerlessConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.putServerlessConfig"></a>

```csharp
private void PutServerlessConfig(SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.putServerlessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig">SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig</a>

---

##### `ResetAcceleratorType` <a name="ResetAcceleratorType" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetAcceleratorType"></a>

```csharp
private void ResetAcceleratorType()
```

##### `ResetContainerStartupHealthCheckTimeoutInSeconds` <a name="ResetContainerStartupHealthCheckTimeoutInSeconds" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetContainerStartupHealthCheckTimeoutInSeconds"></a>

```csharp
private void ResetContainerStartupHealthCheckTimeoutInSeconds()
```

##### `ResetCoreDumpConfig` <a name="ResetCoreDumpConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetCoreDumpConfig"></a>

```csharp
private void ResetCoreDumpConfig()
```

##### `ResetInitialInstanceCount` <a name="ResetInitialInstanceCount" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetInitialInstanceCount"></a>

```csharp
private void ResetInitialInstanceCount()
```

##### `ResetInitialVariantWeight` <a name="ResetInitialVariantWeight" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetInitialVariantWeight"></a>

```csharp
private void ResetInitialVariantWeight()
```

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetInstanceType"></a>

```csharp
private void ResetInstanceType()
```

##### `ResetModelDataDownloadTimeoutInSeconds` <a name="ResetModelDataDownloadTimeoutInSeconds" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetModelDataDownloadTimeoutInSeconds"></a>

```csharp
private void ResetModelDataDownloadTimeoutInSeconds()
```

##### `ResetServerlessConfig` <a name="ResetServerlessConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetServerlessConfig"></a>

```csharp
private void ResetServerlessConfig()
```

##### `ResetVariantName` <a name="ResetVariantName" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetVariantName"></a>

```csharp
private void ResetVariantName()
```

##### `ResetVolumeSizeInGb` <a name="ResetVolumeSizeInGb" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.resetVolumeSizeInGb"></a>

```csharp
private void ResetVolumeSizeInGb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.coreDumpConfig">CoreDumpConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference">SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.serverlessConfig">ServerlessConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference">SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.acceleratorTypeInput">AcceleratorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.containerStartupHealthCheckTimeoutInSecondsInput">ContainerStartupHealthCheckTimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.coreDumpConfigInput">CoreDumpConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig">SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.initialInstanceCountInput">InitialInstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.initialVariantWeightInput">InitialVariantWeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.modelDataDownloadTimeoutInSecondsInput">ModelDataDownloadTimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.modelNameInput">ModelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.serverlessConfigInput">ServerlessConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig">SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.variantNameInput">VariantNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.volumeSizeInGbInput">VolumeSizeInGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.acceleratorType">AcceleratorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.containerStartupHealthCheckTimeoutInSeconds">ContainerStartupHealthCheckTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.initialInstanceCount">InitialInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.initialVariantWeight">InitialVariantWeight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.modelDataDownloadTimeoutInSeconds">ModelDataDownloadTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.modelName">ModelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.variantName">VariantName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.volumeSizeInGb">VolumeSizeInGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CoreDumpConfig`<sup>Required</sup> <a name="CoreDumpConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.coreDumpConfig"></a>

```csharp
public SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference CoreDumpConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference">SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference</a>

---

##### `ServerlessConfig`<sup>Required</sup> <a name="ServerlessConfig" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.serverlessConfig"></a>

```csharp
public SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference ServerlessConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference">SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference</a>

---

##### `AcceleratorTypeInput`<sup>Optional</sup> <a name="AcceleratorTypeInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.acceleratorTypeInput"></a>

```csharp
public string AcceleratorTypeInput { get; }
```

- *Type:* string

---

##### `ContainerStartupHealthCheckTimeoutInSecondsInput`<sup>Optional</sup> <a name="ContainerStartupHealthCheckTimeoutInSecondsInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.containerStartupHealthCheckTimeoutInSecondsInput"></a>

```csharp
public double ContainerStartupHealthCheckTimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `CoreDumpConfigInput`<sup>Optional</sup> <a name="CoreDumpConfigInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.coreDumpConfigInput"></a>

```csharp
public SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig CoreDumpConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig">SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig</a>

---

##### `InitialInstanceCountInput`<sup>Optional</sup> <a name="InitialInstanceCountInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.initialInstanceCountInput"></a>

```csharp
public double InitialInstanceCountInput { get; }
```

- *Type:* double

---

##### `InitialVariantWeightInput`<sup>Optional</sup> <a name="InitialVariantWeightInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.initialVariantWeightInput"></a>

```csharp
public double InitialVariantWeightInput { get; }
```

- *Type:* double

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `ModelDataDownloadTimeoutInSecondsInput`<sup>Optional</sup> <a name="ModelDataDownloadTimeoutInSecondsInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.modelDataDownloadTimeoutInSecondsInput"></a>

```csharp
public double ModelDataDownloadTimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `ModelNameInput`<sup>Optional</sup> <a name="ModelNameInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.modelNameInput"></a>

```csharp
public string ModelNameInput { get; }
```

- *Type:* string

---

##### `ServerlessConfigInput`<sup>Optional</sup> <a name="ServerlessConfigInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.serverlessConfigInput"></a>

```csharp
public SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig ServerlessConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig">SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig</a>

---

##### `VariantNameInput`<sup>Optional</sup> <a name="VariantNameInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.variantNameInput"></a>

```csharp
public string VariantNameInput { get; }
```

- *Type:* string

---

##### `VolumeSizeInGbInput`<sup>Optional</sup> <a name="VolumeSizeInGbInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.volumeSizeInGbInput"></a>

```csharp
public double VolumeSizeInGbInput { get; }
```

- *Type:* double

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.acceleratorType"></a>

```csharp
public string AcceleratorType { get; }
```

- *Type:* string

---

##### `ContainerStartupHealthCheckTimeoutInSeconds`<sup>Required</sup> <a name="ContainerStartupHealthCheckTimeoutInSeconds" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.containerStartupHealthCheckTimeoutInSeconds"></a>

```csharp
public double ContainerStartupHealthCheckTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `InitialInstanceCount`<sup>Required</sup> <a name="InitialInstanceCount" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.initialInstanceCount"></a>

```csharp
public double InitialInstanceCount { get; }
```

- *Type:* double

---

##### `InitialVariantWeight`<sup>Required</sup> <a name="InitialVariantWeight" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.initialVariantWeight"></a>

```csharp
public double InitialVariantWeight { get; }
```

- *Type:* double

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `ModelDataDownloadTimeoutInSeconds`<sup>Required</sup> <a name="ModelDataDownloadTimeoutInSeconds" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.modelDataDownloadTimeoutInSeconds"></a>

```csharp
public double ModelDataDownloadTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `ModelName`<sup>Required</sup> <a name="ModelName" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.modelName"></a>

```csharp
public string ModelName { get; }
```

- *Type:* string

---

##### `VariantName`<sup>Required</sup> <a name="VariantName" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.variantName"></a>

```csharp
public string VariantName { get; }
```

- *Type:* string

---

##### `VolumeSizeInGb`<sup>Required</sup> <a name="VolumeSizeInGb" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.volumeSizeInGb"></a>

```csharp
public double VolumeSizeInGb { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference <a name="SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.property.maxConcurrencyInput">MaxConcurrencyInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.property.memorySizeInMbInput">MemorySizeInMbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.property.maxConcurrency">MaxConcurrency</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.property.memorySizeInMb">MemorySizeInMb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig">SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxConcurrencyInput`<sup>Optional</sup> <a name="MaxConcurrencyInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.property.maxConcurrencyInput"></a>

```csharp
public double MaxConcurrencyInput { get; }
```

- *Type:* double

---

##### `MemorySizeInMbInput`<sup>Optional</sup> <a name="MemorySizeInMbInput" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.property.memorySizeInMbInput"></a>

```csharp
public double MemorySizeInMbInput { get; }
```

- *Type:* double

---

##### `MaxConcurrency`<sup>Required</sup> <a name="MaxConcurrency" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.property.maxConcurrency"></a>

```csharp
public double MaxConcurrency { get; }
```

- *Type:* double

---

##### `MemorySizeInMb`<sup>Required</sup> <a name="MemorySizeInMb" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.property.memorySizeInMb"></a>

```csharp
public double MemorySizeInMb { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference.property.internalValue"></a>

```csharp
public SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerEndpointConfiguration.SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig">SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig</a>

---



