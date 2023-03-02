# `elastictranscoderPipeline` Submodule <a name="`elastictranscoderPipeline` Submodule" id="@cdktf/provider-aws.elastictranscoderPipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElastictranscoderPipeline <a name="ElastictranscoderPipeline" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline aws_elastictranscoder_pipeline}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElastictranscoderPipeline(Construct Scope, string Id, ElastictranscoderPipelineConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig">ElastictranscoderPipelineConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig">ElastictranscoderPipelineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.putContentConfig">PutContentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.putContentConfigPermissions">PutContentConfigPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.putNotifications">PutNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.putThumbnailConfig">PutThumbnailConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.putThumbnailConfigPermissions">PutThumbnailConfigPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetAwsKmsKeyArn">ResetAwsKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetContentConfig">ResetContentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetContentConfigPermissions">ResetContentConfigPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetNotifications">ResetNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetOutputBucket">ResetOutputBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetThumbnailConfig">ResetThumbnailConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetThumbnailConfigPermissions">ResetThumbnailConfigPermissions</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutContentConfig` <a name="PutContentConfig" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.putContentConfig"></a>

```csharp
private void PutContentConfig(ElastictranscoderPipelineContentConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.putContentConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig">ElastictranscoderPipelineContentConfig</a>

---

##### `PutContentConfigPermissions` <a name="PutContentConfigPermissions" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.putContentConfigPermissions"></a>

```csharp
private void PutContentConfigPermissions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.putContentConfigPermissions.parameter.value"></a>

- *Type:* object

---

##### `PutNotifications` <a name="PutNotifications" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.putNotifications"></a>

```csharp
private void PutNotifications(ElastictranscoderPipelineNotifications Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.putNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications">ElastictranscoderPipelineNotifications</a>

---

##### `PutThumbnailConfig` <a name="PutThumbnailConfig" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.putThumbnailConfig"></a>

```csharp
private void PutThumbnailConfig(ElastictranscoderPipelineThumbnailConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.putThumbnailConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig">ElastictranscoderPipelineThumbnailConfig</a>

---

##### `PutThumbnailConfigPermissions` <a name="PutThumbnailConfigPermissions" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.putThumbnailConfigPermissions"></a>

```csharp
private void PutThumbnailConfigPermissions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.putThumbnailConfigPermissions.parameter.value"></a>

- *Type:* object

---

##### `ResetAwsKmsKeyArn` <a name="ResetAwsKmsKeyArn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetAwsKmsKeyArn"></a>

```csharp
private void ResetAwsKmsKeyArn()
```

##### `ResetContentConfig` <a name="ResetContentConfig" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetContentConfig"></a>

```csharp
private void ResetContentConfig()
```

##### `ResetContentConfigPermissions` <a name="ResetContentConfigPermissions" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetContentConfigPermissions"></a>

```csharp
private void ResetContentConfigPermissions()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNotifications` <a name="ResetNotifications" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetNotifications"></a>

```csharp
private void ResetNotifications()
```

##### `ResetOutputBucket` <a name="ResetOutputBucket" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetOutputBucket"></a>

```csharp
private void ResetOutputBucket()
```

##### `ResetThumbnailConfig` <a name="ResetThumbnailConfig" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetThumbnailConfig"></a>

```csharp
private void ResetThumbnailConfig()
```

##### `ResetThumbnailConfigPermissions` <a name="ResetThumbnailConfigPermissions" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.resetThumbnailConfigPermissions"></a>

```csharp
private void ResetThumbnailConfigPermissions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ElastictranscoderPipeline.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ElastictranscoderPipeline.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ElastictranscoderPipeline.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.contentConfig">ContentConfig</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference">ElastictranscoderPipelineContentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.contentConfigPermissions">ContentConfigPermissions</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList">ElastictranscoderPipelineContentConfigPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.notifications">Notifications</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference">ElastictranscoderPipelineNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.thumbnailConfig">ThumbnailConfig</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference">ElastictranscoderPipelineThumbnailConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.thumbnailConfigPermissions">ThumbnailConfigPermissions</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList">ElastictranscoderPipelineThumbnailConfigPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.awsKmsKeyArnInput">AwsKmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.contentConfigInput">ContentConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig">ElastictranscoderPipelineContentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.contentConfigPermissionsInput">ContentConfigPermissionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.inputBucketInput">InputBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.notificationsInput">NotificationsInput</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications">ElastictranscoderPipelineNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.outputBucketInput">OutputBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.thumbnailConfigInput">ThumbnailConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig">ElastictranscoderPipelineThumbnailConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.thumbnailConfigPermissionsInput">ThumbnailConfigPermissionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.awsKmsKeyArn">AwsKmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.inputBucket">InputBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.outputBucket">OutputBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.role">Role</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ContentConfig`<sup>Required</sup> <a name="ContentConfig" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.contentConfig"></a>

```csharp
public ElastictranscoderPipelineContentConfigOutputReference ContentConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference">ElastictranscoderPipelineContentConfigOutputReference</a>

---

##### `ContentConfigPermissions`<sup>Required</sup> <a name="ContentConfigPermissions" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.contentConfigPermissions"></a>

```csharp
public ElastictranscoderPipelineContentConfigPermissionsList ContentConfigPermissions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList">ElastictranscoderPipelineContentConfigPermissionsList</a>

---

##### `Notifications`<sup>Required</sup> <a name="Notifications" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.notifications"></a>

```csharp
public ElastictranscoderPipelineNotificationsOutputReference Notifications { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference">ElastictranscoderPipelineNotificationsOutputReference</a>

---

##### `ThumbnailConfig`<sup>Required</sup> <a name="ThumbnailConfig" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.thumbnailConfig"></a>

```csharp
public ElastictranscoderPipelineThumbnailConfigOutputReference ThumbnailConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference">ElastictranscoderPipelineThumbnailConfigOutputReference</a>

---

##### `ThumbnailConfigPermissions`<sup>Required</sup> <a name="ThumbnailConfigPermissions" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.thumbnailConfigPermissions"></a>

```csharp
public ElastictranscoderPipelineThumbnailConfigPermissionsList ThumbnailConfigPermissions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList">ElastictranscoderPipelineThumbnailConfigPermissionsList</a>

---

##### `AwsKmsKeyArnInput`<sup>Optional</sup> <a name="AwsKmsKeyArnInput" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.awsKmsKeyArnInput"></a>

```csharp
public string AwsKmsKeyArnInput { get; }
```

- *Type:* string

---

##### `ContentConfigInput`<sup>Optional</sup> <a name="ContentConfigInput" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.contentConfigInput"></a>

```csharp
public ElastictranscoderPipelineContentConfig ContentConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig">ElastictranscoderPipelineContentConfig</a>

---

##### `ContentConfigPermissionsInput`<sup>Optional</sup> <a name="ContentConfigPermissionsInput" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.contentConfigPermissionsInput"></a>

```csharp
public object ContentConfigPermissionsInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InputBucketInput`<sup>Optional</sup> <a name="InputBucketInput" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.inputBucketInput"></a>

```csharp
public string InputBucketInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NotificationsInput`<sup>Optional</sup> <a name="NotificationsInput" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.notificationsInput"></a>

```csharp
public ElastictranscoderPipelineNotifications NotificationsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications">ElastictranscoderPipelineNotifications</a>

---

##### `OutputBucketInput`<sup>Optional</sup> <a name="OutputBucketInput" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.outputBucketInput"></a>

```csharp
public string OutputBucketInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `ThumbnailConfigInput`<sup>Optional</sup> <a name="ThumbnailConfigInput" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.thumbnailConfigInput"></a>

```csharp
public ElastictranscoderPipelineThumbnailConfig ThumbnailConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig">ElastictranscoderPipelineThumbnailConfig</a>

---

##### `ThumbnailConfigPermissionsInput`<sup>Optional</sup> <a name="ThumbnailConfigPermissionsInput" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.thumbnailConfigPermissionsInput"></a>

```csharp
public object ThumbnailConfigPermissionsInput { get; }
```

- *Type:* object

---

##### `AwsKmsKeyArn`<sup>Required</sup> <a name="AwsKmsKeyArn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.awsKmsKeyArn"></a>

```csharp
public string AwsKmsKeyArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InputBucket`<sup>Required</sup> <a name="InputBucket" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.inputBucket"></a>

```csharp
public string InputBucket { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OutputBucket`<sup>Required</sup> <a name="OutputBucket" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.outputBucket"></a>

```csharp
public string OutputBucket { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipeline.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElastictranscoderPipelineConfig <a name="ElastictranscoderPipelineConfig" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElastictranscoderPipelineConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string InputBucket,
    string Role,
    string AwsKmsKeyArn = null,
    ElastictranscoderPipelineContentConfig ContentConfig = null,
    object ContentConfigPermissions = null,
    string Id = null,
    string Name = null,
    ElastictranscoderPipelineNotifications Notifications = null,
    string OutputBucket = null,
    ElastictranscoderPipelineThumbnailConfig ThumbnailConfig = null,
    object ThumbnailConfigPermissions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.inputBucket">InputBucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#input_bucket ElastictranscoderPipeline#input_bucket}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#role ElastictranscoderPipeline#role}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.awsKmsKeyArn">AwsKmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#aws_kms_key_arn ElastictranscoderPipeline#aws_kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.contentConfig">ContentConfig</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig">ElastictranscoderPipelineContentConfig</a></code> | content_config block. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.contentConfigPermissions">ContentConfigPermissions</a></code> | <code>object</code> | content_config_permissions block. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#id ElastictranscoderPipeline#id}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#name ElastictranscoderPipeline#name}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.notifications">Notifications</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications">ElastictranscoderPipelineNotifications</a></code> | notifications block. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.outputBucket">OutputBucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#output_bucket ElastictranscoderPipeline#output_bucket}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.thumbnailConfig">ThumbnailConfig</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig">ElastictranscoderPipelineThumbnailConfig</a></code> | thumbnail_config block. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.thumbnailConfigPermissions">ThumbnailConfigPermissions</a></code> | <code>object</code> | thumbnail_config_permissions block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `InputBucket`<sup>Required</sup> <a name="InputBucket" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.inputBucket"></a>

```csharp
public string InputBucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#input_bucket ElastictranscoderPipeline#input_bucket}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#role ElastictranscoderPipeline#role}.

---

##### `AwsKmsKeyArn`<sup>Optional</sup> <a name="AwsKmsKeyArn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.awsKmsKeyArn"></a>

```csharp
public string AwsKmsKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#aws_kms_key_arn ElastictranscoderPipeline#aws_kms_key_arn}.

---

##### `ContentConfig`<sup>Optional</sup> <a name="ContentConfig" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.contentConfig"></a>

```csharp
public ElastictranscoderPipelineContentConfig ContentConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig">ElastictranscoderPipelineContentConfig</a>

content_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#content_config ElastictranscoderPipeline#content_config}

---

##### `ContentConfigPermissions`<sup>Optional</sup> <a name="ContentConfigPermissions" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.contentConfigPermissions"></a>

```csharp
public object ContentConfigPermissions { get; set; }
```

- *Type:* object

content_config_permissions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#content_config_permissions ElastictranscoderPipeline#content_config_permissions}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#id ElastictranscoderPipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#name ElastictranscoderPipeline#name}.

---

##### `Notifications`<sup>Optional</sup> <a name="Notifications" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.notifications"></a>

```csharp
public ElastictranscoderPipelineNotifications Notifications { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications">ElastictranscoderPipelineNotifications</a>

notifications block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#notifications ElastictranscoderPipeline#notifications}

---

##### `OutputBucket`<sup>Optional</sup> <a name="OutputBucket" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.outputBucket"></a>

```csharp
public string OutputBucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#output_bucket ElastictranscoderPipeline#output_bucket}.

---

##### `ThumbnailConfig`<sup>Optional</sup> <a name="ThumbnailConfig" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.thumbnailConfig"></a>

```csharp
public ElastictranscoderPipelineThumbnailConfig ThumbnailConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig">ElastictranscoderPipelineThumbnailConfig</a>

thumbnail_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#thumbnail_config ElastictranscoderPipeline#thumbnail_config}

---

##### `ThumbnailConfigPermissions`<sup>Optional</sup> <a name="ThumbnailConfigPermissions" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.thumbnailConfigPermissions"></a>

```csharp
public object ThumbnailConfigPermissions { get; set; }
```

- *Type:* object

thumbnail_config_permissions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#thumbnail_config_permissions ElastictranscoderPipeline#thumbnail_config_permissions}

---

### ElastictranscoderPipelineContentConfig <a name="ElastictranscoderPipelineContentConfig" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElastictranscoderPipelineContentConfig {
    string Bucket = null,
    string StorageClass = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#bucket ElastictranscoderPipeline#bucket}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig.property.storageClass">StorageClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#storage_class ElastictranscoderPipeline#storage_class}. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#bucket ElastictranscoderPipeline#bucket}.

---

##### `StorageClass`<sup>Optional</sup> <a name="StorageClass" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig.property.storageClass"></a>

```csharp
public string StorageClass { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#storage_class ElastictranscoderPipeline#storage_class}.

---

### ElastictranscoderPipelineContentConfigPermissions <a name="ElastictranscoderPipelineContentConfigPermissions" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElastictranscoderPipelineContentConfigPermissions {
    string[] Access = null,
    string Grantee = null,
    string GranteeType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions.property.access">Access</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#access ElastictranscoderPipeline#access}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions.property.grantee">Grantee</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#grantee ElastictranscoderPipeline#grantee}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions.property.granteeType">GranteeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#grantee_type ElastictranscoderPipeline#grantee_type}. |

---

##### `Access`<sup>Optional</sup> <a name="Access" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions.property.access"></a>

```csharp
public string[] Access { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#access ElastictranscoderPipeline#access}.

---

##### `Grantee`<sup>Optional</sup> <a name="Grantee" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions.property.grantee"></a>

```csharp
public string Grantee { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#grantee ElastictranscoderPipeline#grantee}.

---

##### `GranteeType`<sup>Optional</sup> <a name="GranteeType" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions.property.granteeType"></a>

```csharp
public string GranteeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#grantee_type ElastictranscoderPipeline#grantee_type}.

---

### ElastictranscoderPipelineNotifications <a name="ElastictranscoderPipelineNotifications" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElastictranscoderPipelineNotifications {
    string Completed = null,
    string Error = null,
    string Progressing = null,
    string Warning = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications.property.completed">Completed</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#completed ElastictranscoderPipeline#completed}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications.property.error">Error</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#error ElastictranscoderPipeline#error}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications.property.progressing">Progressing</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#progressing ElastictranscoderPipeline#progressing}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications.property.warning">Warning</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#warning ElastictranscoderPipeline#warning}. |

---

##### `Completed`<sup>Optional</sup> <a name="Completed" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications.property.completed"></a>

```csharp
public string Completed { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#completed ElastictranscoderPipeline#completed}.

---

##### `Error`<sup>Optional</sup> <a name="Error" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications.property.error"></a>

```csharp
public string Error { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#error ElastictranscoderPipeline#error}.

---

##### `Progressing`<sup>Optional</sup> <a name="Progressing" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications.property.progressing"></a>

```csharp
public string Progressing { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#progressing ElastictranscoderPipeline#progressing}.

---

##### `Warning`<sup>Optional</sup> <a name="Warning" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications.property.warning"></a>

```csharp
public string Warning { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#warning ElastictranscoderPipeline#warning}.

---

### ElastictranscoderPipelineThumbnailConfig <a name="ElastictranscoderPipelineThumbnailConfig" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElastictranscoderPipelineThumbnailConfig {
    string Bucket = null,
    string StorageClass = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#bucket ElastictranscoderPipeline#bucket}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig.property.storageClass">StorageClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#storage_class ElastictranscoderPipeline#storage_class}. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#bucket ElastictranscoderPipeline#bucket}.

---

##### `StorageClass`<sup>Optional</sup> <a name="StorageClass" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig.property.storageClass"></a>

```csharp
public string StorageClass { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#storage_class ElastictranscoderPipeline#storage_class}.

---

### ElastictranscoderPipelineThumbnailConfigPermissions <a name="ElastictranscoderPipelineThumbnailConfigPermissions" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElastictranscoderPipelineThumbnailConfigPermissions {
    string[] Access = null,
    string Grantee = null,
    string GranteeType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions.property.access">Access</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#access ElastictranscoderPipeline#access}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions.property.grantee">Grantee</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#grantee ElastictranscoderPipeline#grantee}. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions.property.granteeType">GranteeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#grantee_type ElastictranscoderPipeline#grantee_type}. |

---

##### `Access`<sup>Optional</sup> <a name="Access" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions.property.access"></a>

```csharp
public string[] Access { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#access ElastictranscoderPipeline#access}.

---

##### `Grantee`<sup>Optional</sup> <a name="Grantee" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions.property.grantee"></a>

```csharp
public string Grantee { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#grantee ElastictranscoderPipeline#grantee}.

---

##### `GranteeType`<sup>Optional</sup> <a name="GranteeType" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions.property.granteeType"></a>

```csharp
public string GranteeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline#grantee_type ElastictranscoderPipeline#grantee_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElastictranscoderPipelineContentConfigOutputReference <a name="ElastictranscoderPipelineContentConfigOutputReference" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElastictranscoderPipelineContentConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.resetStorageClass">ResetStorageClass</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetStorageClass` <a name="ResetStorageClass" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.resetStorageClass"></a>

```csharp
private void ResetStorageClass()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.storageClassInput">StorageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.storageClass">StorageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig">ElastictranscoderPipelineContentConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `StorageClassInput`<sup>Optional</sup> <a name="StorageClassInput" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.storageClassInput"></a>

```csharp
public string StorageClassInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.storageClass"></a>

```csharp
public string StorageClass { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.internalValue"></a>

```csharp
public ElastictranscoderPipelineContentConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig">ElastictranscoderPipelineContentConfig</a>

---


### ElastictranscoderPipelineContentConfigPermissionsList <a name="ElastictranscoderPipelineContentConfigPermissionsList" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElastictranscoderPipelineContentConfigPermissionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.get"></a>

```csharp
private ElastictranscoderPipelineContentConfigPermissionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastictranscoderPipelineContentConfigPermissionsOutputReference <a name="ElastictranscoderPipelineContentConfigPermissionsOutputReference" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElastictranscoderPipelineContentConfigPermissionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.resetAccess">ResetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.resetGrantee">ResetGrantee</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.resetGranteeType">ResetGranteeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccess` <a name="ResetAccess" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.resetAccess"></a>

```csharp
private void ResetAccess()
```

##### `ResetGrantee` <a name="ResetGrantee" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.resetGrantee"></a>

```csharp
private void ResetGrantee()
```

##### `ResetGranteeType` <a name="ResetGranteeType" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.resetGranteeType"></a>

```csharp
private void ResetGranteeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.accessInput">AccessInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.granteeInput">GranteeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.granteeTypeInput">GranteeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.access">Access</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.grantee">Grantee</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.granteeType">GranteeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessInput`<sup>Optional</sup> <a name="AccessInput" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.accessInput"></a>

```csharp
public string[] AccessInput { get; }
```

- *Type:* string[]

---

##### `GranteeInput`<sup>Optional</sup> <a name="GranteeInput" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.granteeInput"></a>

```csharp
public string GranteeInput { get; }
```

- *Type:* string

---

##### `GranteeTypeInput`<sup>Optional</sup> <a name="GranteeTypeInput" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.granteeTypeInput"></a>

```csharp
public string GranteeTypeInput { get; }
```

- *Type:* string

---

##### `Access`<sup>Required</sup> <a name="Access" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.access"></a>

```csharp
public string[] Access { get; }
```

- *Type:* string[]

---

##### `Grantee`<sup>Required</sup> <a name="Grantee" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.grantee"></a>

```csharp
public string Grantee { get; }
```

- *Type:* string

---

##### `GranteeType`<sup>Required</sup> <a name="GranteeType" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.granteeType"></a>

```csharp
public string GranteeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastictranscoderPipelineNotificationsOutputReference <a name="ElastictranscoderPipelineNotificationsOutputReference" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElastictranscoderPipelineNotificationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.resetCompleted">ResetCompleted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.resetError">ResetError</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.resetProgressing">ResetProgressing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.resetWarning">ResetWarning</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCompleted` <a name="ResetCompleted" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.resetCompleted"></a>

```csharp
private void ResetCompleted()
```

##### `ResetError` <a name="ResetError" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.resetError"></a>

```csharp
private void ResetError()
```

##### `ResetProgressing` <a name="ResetProgressing" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.resetProgressing"></a>

```csharp
private void ResetProgressing()
```

##### `ResetWarning` <a name="ResetWarning" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.resetWarning"></a>

```csharp
private void ResetWarning()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.completedInput">CompletedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.errorInput">ErrorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.progressingInput">ProgressingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.warningInput">WarningInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.completed">Completed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.error">Error</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.progressing">Progressing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.warning">Warning</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications">ElastictranscoderPipelineNotifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompletedInput`<sup>Optional</sup> <a name="CompletedInput" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.completedInput"></a>

```csharp
public string CompletedInput { get; }
```

- *Type:* string

---

##### `ErrorInput`<sup>Optional</sup> <a name="ErrorInput" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.errorInput"></a>

```csharp
public string ErrorInput { get; }
```

- *Type:* string

---

##### `ProgressingInput`<sup>Optional</sup> <a name="ProgressingInput" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.progressingInput"></a>

```csharp
public string ProgressingInput { get; }
```

- *Type:* string

---

##### `WarningInput`<sup>Optional</sup> <a name="WarningInput" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.warningInput"></a>

```csharp
public string WarningInput { get; }
```

- *Type:* string

---

##### `Completed`<sup>Required</sup> <a name="Completed" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.completed"></a>

```csharp
public string Completed { get; }
```

- *Type:* string

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.error"></a>

```csharp
public string Error { get; }
```

- *Type:* string

---

##### `Progressing`<sup>Required</sup> <a name="Progressing" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.progressing"></a>

```csharp
public string Progressing { get; }
```

- *Type:* string

---

##### `Warning`<sup>Required</sup> <a name="Warning" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.warning"></a>

```csharp
public string Warning { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.internalValue"></a>

```csharp
public ElastictranscoderPipelineNotifications InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineNotifications">ElastictranscoderPipelineNotifications</a>

---


### ElastictranscoderPipelineThumbnailConfigOutputReference <a name="ElastictranscoderPipelineThumbnailConfigOutputReference" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElastictranscoderPipelineThumbnailConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.resetStorageClass">ResetStorageClass</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetStorageClass` <a name="ResetStorageClass" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.resetStorageClass"></a>

```csharp
private void ResetStorageClass()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.storageClassInput">StorageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.storageClass">StorageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig">ElastictranscoderPipelineThumbnailConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `StorageClassInput`<sup>Optional</sup> <a name="StorageClassInput" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.storageClassInput"></a>

```csharp
public string StorageClassInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.storageClass"></a>

```csharp
public string StorageClass { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.internalValue"></a>

```csharp
public ElastictranscoderPipelineThumbnailConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig">ElastictranscoderPipelineThumbnailConfig</a>

---


### ElastictranscoderPipelineThumbnailConfigPermissionsList <a name="ElastictranscoderPipelineThumbnailConfigPermissionsList" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElastictranscoderPipelineThumbnailConfigPermissionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.get"></a>

```csharp
private ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference <a name="ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.resetAccess">ResetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.resetGrantee">ResetGrantee</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.resetGranteeType">ResetGranteeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccess` <a name="ResetAccess" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.resetAccess"></a>

```csharp
private void ResetAccess()
```

##### `ResetGrantee` <a name="ResetGrantee" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.resetGrantee"></a>

```csharp
private void ResetGrantee()
```

##### `ResetGranteeType` <a name="ResetGranteeType" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.resetGranteeType"></a>

```csharp
private void ResetGranteeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.accessInput">AccessInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.granteeInput">GranteeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.granteeTypeInput">GranteeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.access">Access</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.grantee">Grantee</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.granteeType">GranteeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessInput`<sup>Optional</sup> <a name="AccessInput" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.accessInput"></a>

```csharp
public string[] AccessInput { get; }
```

- *Type:* string[]

---

##### `GranteeInput`<sup>Optional</sup> <a name="GranteeInput" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.granteeInput"></a>

```csharp
public string GranteeInput { get; }
```

- *Type:* string

---

##### `GranteeTypeInput`<sup>Optional</sup> <a name="GranteeTypeInput" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.granteeTypeInput"></a>

```csharp
public string GranteeTypeInput { get; }
```

- *Type:* string

---

##### `Access`<sup>Required</sup> <a name="Access" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.access"></a>

```csharp
public string[] Access { get; }
```

- *Type:* string[]

---

##### `Grantee`<sup>Required</sup> <a name="Grantee" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.grantee"></a>

```csharp
public string Grantee { get; }
```

- *Type:* string

---

##### `GranteeType`<sup>Required</sup> <a name="GranteeType" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.granteeType"></a>

```csharp
public string GranteeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



