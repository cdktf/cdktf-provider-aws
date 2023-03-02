# `kinesisAnalyticsApplication` Submodule <a name="`kinesisAnalyticsApplication` Submodule" id="@cdktf/provider-aws.kinesisAnalyticsApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KinesisAnalyticsApplication <a name="KinesisAnalyticsApplication" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application aws_kinesis_analytics_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplication(Construct Scope, string Id, KinesisAnalyticsApplicationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig">KinesisAnalyticsApplicationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig">KinesisAnalyticsApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.putCloudwatchLoggingOptions">PutCloudwatchLoggingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.putInputs">PutInputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.putOutputs">PutOutputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.putReferenceDataSources">PutReferenceDataSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetCloudwatchLoggingOptions">ResetCloudwatchLoggingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetCode">ResetCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetInputs">ResetInputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetOutputs">ResetOutputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetReferenceDataSources">ResetReferenceDataSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetStartApplication">ResetStartApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutCloudwatchLoggingOptions` <a name="PutCloudwatchLoggingOptions" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.putCloudwatchLoggingOptions"></a>

```csharp
private void PutCloudwatchLoggingOptions(KinesisAnalyticsApplicationCloudwatchLoggingOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.putCloudwatchLoggingOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptions">KinesisAnalyticsApplicationCloudwatchLoggingOptions</a>

---

##### `PutInputs` <a name="PutInputs" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.putInputs"></a>

```csharp
private void PutInputs(KinesisAnalyticsApplicationInputs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.putInputs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs">KinesisAnalyticsApplicationInputs</a>

---

##### `PutOutputs` <a name="PutOutputs" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.putOutputs"></a>

```csharp
private void PutOutputs(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.putOutputs.parameter.value"></a>

- *Type:* object

---

##### `PutReferenceDataSources` <a name="PutReferenceDataSources" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.putReferenceDataSources"></a>

```csharp
private void PutReferenceDataSources(KinesisAnalyticsApplicationReferenceDataSources Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.putReferenceDataSources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSources">KinesisAnalyticsApplicationReferenceDataSources</a>

---

##### `ResetCloudwatchLoggingOptions` <a name="ResetCloudwatchLoggingOptions" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetCloudwatchLoggingOptions"></a>

```csharp
private void ResetCloudwatchLoggingOptions()
```

##### `ResetCode` <a name="ResetCode" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetCode"></a>

```csharp
private void ResetCode()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInputs` <a name="ResetInputs" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetInputs"></a>

```csharp
private void ResetInputs()
```

##### `ResetOutputs` <a name="ResetOutputs" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetOutputs"></a>

```csharp
private void ResetOutputs()
```

##### `ResetReferenceDataSources` <a name="ResetReferenceDataSources" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetReferenceDataSources"></a>

```csharp
private void ResetReferenceDataSources()
```

##### `ResetStartApplication` <a name="ResetStartApplication" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetStartApplication"></a>

```csharp
private void ResetStartApplication()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

KinesisAnalyticsApplication.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

KinesisAnalyticsApplication.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

KinesisAnalyticsApplication.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.cloudwatchLoggingOptions">CloudwatchLoggingOptions</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference">KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.createTimestamp">CreateTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.inputs">Inputs</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference">KinesisAnalyticsApplicationInputsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.lastUpdateTimestamp">LastUpdateTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.outputs">Outputs</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList">KinesisAnalyticsApplicationOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.referenceDataSources">ReferenceDataSources</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference">KinesisAnalyticsApplicationReferenceDataSourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.cloudwatchLoggingOptionsInput">CloudwatchLoggingOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptions">KinesisAnalyticsApplicationCloudwatchLoggingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.codeInput">CodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.inputsInput">InputsInput</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs">KinesisAnalyticsApplicationInputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.outputsInput">OutputsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.referenceDataSourcesInput">ReferenceDataSourcesInput</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSources">KinesisAnalyticsApplicationReferenceDataSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.startApplicationInput">StartApplicationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.code">Code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.startApplication">StartApplication</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CloudwatchLoggingOptions`<sup>Required</sup> <a name="CloudwatchLoggingOptions" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.cloudwatchLoggingOptions"></a>

```csharp
public KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference CloudwatchLoggingOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference">KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference</a>

---

##### `CreateTimestamp`<sup>Required</sup> <a name="CreateTimestamp" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.createTimestamp"></a>

```csharp
public string CreateTimestamp { get; }
```

- *Type:* string

---

##### `Inputs`<sup>Required</sup> <a name="Inputs" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.inputs"></a>

```csharp
public KinesisAnalyticsApplicationInputsOutputReference Inputs { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference">KinesisAnalyticsApplicationInputsOutputReference</a>

---

##### `LastUpdateTimestamp`<sup>Required</sup> <a name="LastUpdateTimestamp" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.lastUpdateTimestamp"></a>

```csharp
public string LastUpdateTimestamp { get; }
```

- *Type:* string

---

##### `Outputs`<sup>Required</sup> <a name="Outputs" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.outputs"></a>

```csharp
public KinesisAnalyticsApplicationOutputsList Outputs { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList">KinesisAnalyticsApplicationOutputsList</a>

---

##### `ReferenceDataSources`<sup>Required</sup> <a name="ReferenceDataSources" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.referenceDataSources"></a>

```csharp
public KinesisAnalyticsApplicationReferenceDataSourcesOutputReference ReferenceDataSources { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference">KinesisAnalyticsApplicationReferenceDataSourcesOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `CloudwatchLoggingOptionsInput`<sup>Optional</sup> <a name="CloudwatchLoggingOptionsInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.cloudwatchLoggingOptionsInput"></a>

```csharp
public KinesisAnalyticsApplicationCloudwatchLoggingOptions CloudwatchLoggingOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptions">KinesisAnalyticsApplicationCloudwatchLoggingOptions</a>

---

##### `CodeInput`<sup>Optional</sup> <a name="CodeInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.codeInput"></a>

```csharp
public string CodeInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InputsInput`<sup>Optional</sup> <a name="InputsInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.inputsInput"></a>

```csharp
public KinesisAnalyticsApplicationInputs InputsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs">KinesisAnalyticsApplicationInputs</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OutputsInput`<sup>Optional</sup> <a name="OutputsInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.outputsInput"></a>

```csharp
public object OutputsInput { get; }
```

- *Type:* object

---

##### `ReferenceDataSourcesInput`<sup>Optional</sup> <a name="ReferenceDataSourcesInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.referenceDataSourcesInput"></a>

```csharp
public KinesisAnalyticsApplicationReferenceDataSources ReferenceDataSourcesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSources">KinesisAnalyticsApplicationReferenceDataSources</a>

---

##### `StartApplicationInput`<sup>Optional</sup> <a name="StartApplicationInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.startApplicationInput"></a>

```csharp
public object StartApplicationInput { get; }
```

- *Type:* object

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.code"></a>

```csharp
public string Code { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StartApplication`<sup>Required</sup> <a name="StartApplication" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.startApplication"></a>

```csharp
public object StartApplication { get; }
```

- *Type:* object

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplication.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KinesisAnalyticsApplicationCloudwatchLoggingOptions <a name="KinesisAnalyticsApplicationCloudwatchLoggingOptions" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationCloudwatchLoggingOptions {
    string LogStreamArn,
    string RoleArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptions.property.logStreamArn">LogStreamArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#log_stream_arn KinesisAnalyticsApplication#log_stream_arn}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptions.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}. |

---

##### `LogStreamArn`<sup>Required</sup> <a name="LogStreamArn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptions.property.logStreamArn"></a>

```csharp
public string LogStreamArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#log_stream_arn KinesisAnalyticsApplication#log_stream_arn}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptions.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}.

---

### KinesisAnalyticsApplicationConfig <a name="KinesisAnalyticsApplicationConfig" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    KinesisAnalyticsApplicationCloudwatchLoggingOptions CloudwatchLoggingOptions = null,
    string Code = null,
    string Description = null,
    string Id = null,
    KinesisAnalyticsApplicationInputs Inputs = null,
    object Outputs = null,
    KinesisAnalyticsApplicationReferenceDataSources ReferenceDataSources = null,
    object StartApplication = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#name KinesisAnalyticsApplication#name}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.cloudwatchLoggingOptions">CloudwatchLoggingOptions</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptions">KinesisAnalyticsApplicationCloudwatchLoggingOptions</a></code> | cloudwatch_logging_options block. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.code">Code</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#code KinesisAnalyticsApplication#code}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#description KinesisAnalyticsApplication#description}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#id KinesisAnalyticsApplication#id}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.inputs">Inputs</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs">KinesisAnalyticsApplicationInputs</a></code> | inputs block. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.outputs">Outputs</a></code> | <code>object</code> | outputs block. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.referenceDataSources">ReferenceDataSources</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSources">KinesisAnalyticsApplicationReferenceDataSources</a></code> | reference_data_sources block. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.startApplication">StartApplication</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#start_application KinesisAnalyticsApplication#start_application}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#tags KinesisAnalyticsApplication#tags}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#tags_all KinesisAnalyticsApplication#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#name KinesisAnalyticsApplication#name}.

---

##### `CloudwatchLoggingOptions`<sup>Optional</sup> <a name="CloudwatchLoggingOptions" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.cloudwatchLoggingOptions"></a>

```csharp
public KinesisAnalyticsApplicationCloudwatchLoggingOptions CloudwatchLoggingOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptions">KinesisAnalyticsApplicationCloudwatchLoggingOptions</a>

cloudwatch_logging_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#cloudwatch_logging_options KinesisAnalyticsApplication#cloudwatch_logging_options}

---

##### `Code`<sup>Optional</sup> <a name="Code" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.code"></a>

```csharp
public string Code { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#code KinesisAnalyticsApplication#code}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#description KinesisAnalyticsApplication#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#id KinesisAnalyticsApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Inputs`<sup>Optional</sup> <a name="Inputs" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.inputs"></a>

```csharp
public KinesisAnalyticsApplicationInputs Inputs { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs">KinesisAnalyticsApplicationInputs</a>

inputs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#inputs KinesisAnalyticsApplication#inputs}

---

##### `Outputs`<sup>Optional</sup> <a name="Outputs" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.outputs"></a>

```csharp
public object Outputs { get; set; }
```

- *Type:* object

outputs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#outputs KinesisAnalyticsApplication#outputs}

---

##### `ReferenceDataSources`<sup>Optional</sup> <a name="ReferenceDataSources" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.referenceDataSources"></a>

```csharp
public KinesisAnalyticsApplicationReferenceDataSources ReferenceDataSources { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSources">KinesisAnalyticsApplicationReferenceDataSources</a>

reference_data_sources block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#reference_data_sources KinesisAnalyticsApplication#reference_data_sources}

---

##### `StartApplication`<sup>Optional</sup> <a name="StartApplication" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.startApplication"></a>

```csharp
public object StartApplication { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#start_application KinesisAnalyticsApplication#start_application}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#tags KinesisAnalyticsApplication#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#tags_all KinesisAnalyticsApplication#tags_all}.

---

### KinesisAnalyticsApplicationInputs <a name="KinesisAnalyticsApplicationInputs" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationInputs {
    string NamePrefix,
    KinesisAnalyticsApplicationInputsSchema Schema,
    KinesisAnalyticsApplicationInputsKinesisFirehose KinesisFirehose = null,
    KinesisAnalyticsApplicationInputsKinesisStream KinesisStream = null,
    KinesisAnalyticsApplicationInputsParallelism Parallelism = null,
    KinesisAnalyticsApplicationInputsProcessingConfiguration ProcessingConfiguration = null,
    object StartingPositionConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs.property.namePrefix">NamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#name_prefix KinesisAnalyticsApplication#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs.property.schema">Schema</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchema">KinesisAnalyticsApplicationInputsSchema</a></code> | schema block. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs.property.kinesisFirehose">KinesisFirehose</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehose">KinesisAnalyticsApplicationInputsKinesisFirehose</a></code> | kinesis_firehose block. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs.property.kinesisStream">KinesisStream</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStream">KinesisAnalyticsApplicationInputsKinesisStream</a></code> | kinesis_stream block. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs.property.parallelism">Parallelism</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelism">KinesisAnalyticsApplicationInputsParallelism</a></code> | parallelism block. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs.property.processingConfiguration">ProcessingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfiguration">KinesisAnalyticsApplicationInputsProcessingConfiguration</a></code> | processing_configuration block. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs.property.startingPositionConfiguration">StartingPositionConfiguration</a></code> | <code>object</code> | starting_position_configuration block. |

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs.property.namePrefix"></a>

```csharp
public string NamePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#name_prefix KinesisAnalyticsApplication#name_prefix}.

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs.property.schema"></a>

```csharp
public KinesisAnalyticsApplicationInputsSchema Schema { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchema">KinesisAnalyticsApplicationInputsSchema</a>

schema block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#schema KinesisAnalyticsApplication#schema}

---

##### `KinesisFirehose`<sup>Optional</sup> <a name="KinesisFirehose" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs.property.kinesisFirehose"></a>

```csharp
public KinesisAnalyticsApplicationInputsKinesisFirehose KinesisFirehose { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehose">KinesisAnalyticsApplicationInputsKinesisFirehose</a>

kinesis_firehose block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#kinesis_firehose KinesisAnalyticsApplication#kinesis_firehose}

---

##### `KinesisStream`<sup>Optional</sup> <a name="KinesisStream" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs.property.kinesisStream"></a>

```csharp
public KinesisAnalyticsApplicationInputsKinesisStream KinesisStream { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStream">KinesisAnalyticsApplicationInputsKinesisStream</a>

kinesis_stream block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#kinesis_stream KinesisAnalyticsApplication#kinesis_stream}

---

##### `Parallelism`<sup>Optional</sup> <a name="Parallelism" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs.property.parallelism"></a>

```csharp
public KinesisAnalyticsApplicationInputsParallelism Parallelism { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelism">KinesisAnalyticsApplicationInputsParallelism</a>

parallelism block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#parallelism KinesisAnalyticsApplication#parallelism}

---

##### `ProcessingConfiguration`<sup>Optional</sup> <a name="ProcessingConfiguration" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs.property.processingConfiguration"></a>

```csharp
public KinesisAnalyticsApplicationInputsProcessingConfiguration ProcessingConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfiguration">KinesisAnalyticsApplicationInputsProcessingConfiguration</a>

processing_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#processing_configuration KinesisAnalyticsApplication#processing_configuration}

---

##### `StartingPositionConfiguration`<sup>Optional</sup> <a name="StartingPositionConfiguration" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs.property.startingPositionConfiguration"></a>

```csharp
public object StartingPositionConfiguration { get; set; }
```

- *Type:* object

starting_position_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#starting_position_configuration KinesisAnalyticsApplication#starting_position_configuration}

---

### KinesisAnalyticsApplicationInputsKinesisFirehose <a name="KinesisAnalyticsApplicationInputsKinesisFirehose" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehose.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationInputsKinesisFirehose {
    string ResourceArn,
    string RoleArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehose.property.resourceArn">ResourceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehose.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}. |

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehose.property.resourceArn"></a>

```csharp
public string ResourceArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehose.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}.

---

### KinesisAnalyticsApplicationInputsKinesisStream <a name="KinesisAnalyticsApplicationInputsKinesisStream" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStream.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationInputsKinesisStream {
    string ResourceArn,
    string RoleArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStream.property.resourceArn">ResourceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStream.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}. |

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStream.property.resourceArn"></a>

```csharp
public string ResourceArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStream.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}.

---

### KinesisAnalyticsApplicationInputsParallelism <a name="KinesisAnalyticsApplicationInputsParallelism" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelism"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelism.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationInputsParallelism {
    double Count = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelism.property.count">Count</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#count KinesisAnalyticsApplication#count}. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelism.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#count KinesisAnalyticsApplication#count}.

---

### KinesisAnalyticsApplicationInputsProcessingConfiguration <a name="KinesisAnalyticsApplicationInputsProcessingConfiguration" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationInputsProcessingConfiguration {
    KinesisAnalyticsApplicationInputsProcessingConfigurationLambda Lambda
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfiguration.property.lambda">Lambda</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambda">KinesisAnalyticsApplicationInputsProcessingConfigurationLambda</a></code> | lambda block. |

---

##### `Lambda`<sup>Required</sup> <a name="Lambda" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfiguration.property.lambda"></a>

```csharp
public KinesisAnalyticsApplicationInputsProcessingConfigurationLambda Lambda { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambda">KinesisAnalyticsApplicationInputsProcessingConfigurationLambda</a>

lambda block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#lambda KinesisAnalyticsApplication#lambda}

---

### KinesisAnalyticsApplicationInputsProcessingConfigurationLambda <a name="KinesisAnalyticsApplicationInputsProcessingConfigurationLambda" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambda"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambda.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationInputsProcessingConfigurationLambda {
    string ResourceArn,
    string RoleArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambda.property.resourceArn">ResourceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambda.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}. |

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambda.property.resourceArn"></a>

```csharp
public string ResourceArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambda.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}.

---

### KinesisAnalyticsApplicationInputsSchema <a name="KinesisAnalyticsApplicationInputsSchema" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchema.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationInputsSchema {
    object RecordColumns,
    KinesisAnalyticsApplicationInputsSchemaRecordFormat RecordFormat,
    string RecordEncoding = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchema.property.recordColumns">RecordColumns</a></code> | <code>object</code> | record_columns block. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchema.property.recordFormat">RecordFormat</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormat">KinesisAnalyticsApplicationInputsSchemaRecordFormat</a></code> | record_format block. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchema.property.recordEncoding">RecordEncoding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_encoding KinesisAnalyticsApplication#record_encoding}. |

---

##### `RecordColumns`<sup>Required</sup> <a name="RecordColumns" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchema.property.recordColumns"></a>

```csharp
public object RecordColumns { get; set; }
```

- *Type:* object

record_columns block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_columns KinesisAnalyticsApplication#record_columns}

---

##### `RecordFormat`<sup>Required</sup> <a name="RecordFormat" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchema.property.recordFormat"></a>

```csharp
public KinesisAnalyticsApplicationInputsSchemaRecordFormat RecordFormat { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormat">KinesisAnalyticsApplicationInputsSchemaRecordFormat</a>

record_format block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_format KinesisAnalyticsApplication#record_format}

---

##### `RecordEncoding`<sup>Optional</sup> <a name="RecordEncoding" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchema.property.recordEncoding"></a>

```csharp
public string RecordEncoding { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_encoding KinesisAnalyticsApplication#record_encoding}.

---

### KinesisAnalyticsApplicationInputsSchemaRecordColumns <a name="KinesisAnalyticsApplicationInputsSchemaRecordColumns" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationInputsSchemaRecordColumns {
    string Name,
    string SqlType,
    string Mapping = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumns.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#name KinesisAnalyticsApplication#name}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumns.property.sqlType">SqlType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#sql_type KinesisAnalyticsApplication#sql_type}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumns.property.mapping">Mapping</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#mapping KinesisAnalyticsApplication#mapping}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumns.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#name KinesisAnalyticsApplication#name}.

---

##### `SqlType`<sup>Required</sup> <a name="SqlType" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumns.property.sqlType"></a>

```csharp
public string SqlType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#sql_type KinesisAnalyticsApplication#sql_type}.

---

##### `Mapping`<sup>Optional</sup> <a name="Mapping" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumns.property.mapping"></a>

```csharp
public string Mapping { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#mapping KinesisAnalyticsApplication#mapping}.

---

### KinesisAnalyticsApplicationInputsSchemaRecordFormat <a name="KinesisAnalyticsApplicationInputsSchemaRecordFormat" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormat.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationInputsSchemaRecordFormat {
    KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters MappingParameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormat.property.mappingParameters">MappingParameters</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters</a></code> | mapping_parameters block. |

---

##### `MappingParameters`<sup>Optional</sup> <a name="MappingParameters" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormat.property.mappingParameters"></a>

```csharp
public KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters MappingParameters { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters</a>

mapping_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#mapping_parameters KinesisAnalyticsApplication#mapping_parameters}

---

### KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters <a name="KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters {
    KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv Csv = null,
    KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson Json = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters.property.csv">Csv</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv</a></code> | csv block. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters.property.json">Json</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson</a></code> | json block. |

---

##### `Csv`<sup>Optional</sup> <a name="Csv" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters.property.csv"></a>

```csharp
public KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv Csv { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv</a>

csv block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#csv KinesisAnalyticsApplication#csv}

---

##### `Json`<sup>Optional</sup> <a name="Json" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters.property.json"></a>

```csharp
public KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson Json { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson</a>

json block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#json KinesisAnalyticsApplication#json}

---

### KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv <a name="KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv {
    string RecordColumnDelimiter,
    string RecordRowDelimiter
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv.property.recordColumnDelimiter">RecordColumnDelimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_column_delimiter KinesisAnalyticsApplication#record_column_delimiter}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv.property.recordRowDelimiter">RecordRowDelimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_row_delimiter KinesisAnalyticsApplication#record_row_delimiter}. |

---

##### `RecordColumnDelimiter`<sup>Required</sup> <a name="RecordColumnDelimiter" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv.property.recordColumnDelimiter"></a>

```csharp
public string RecordColumnDelimiter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_column_delimiter KinesisAnalyticsApplication#record_column_delimiter}.

---

##### `RecordRowDelimiter`<sup>Required</sup> <a name="RecordRowDelimiter" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv.property.recordRowDelimiter"></a>

```csharp
public string RecordRowDelimiter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_row_delimiter KinesisAnalyticsApplication#record_row_delimiter}.

---

### KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson <a name="KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson {
    string RecordRowPath
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson.property.recordRowPath">RecordRowPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_row_path KinesisAnalyticsApplication#record_row_path}. |

---

##### `RecordRowPath`<sup>Required</sup> <a name="RecordRowPath" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson.property.recordRowPath"></a>

```csharp
public string RecordRowPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_row_path KinesisAnalyticsApplication#record_row_path}.

---

### KinesisAnalyticsApplicationInputsStartingPositionConfiguration <a name="KinesisAnalyticsApplicationInputsStartingPositionConfiguration" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationInputsStartingPositionConfiguration {
    string StartingPosition = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfiguration.property.startingPosition">StartingPosition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#starting_position KinesisAnalyticsApplication#starting_position}. |

---

##### `StartingPosition`<sup>Optional</sup> <a name="StartingPosition" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfiguration.property.startingPosition"></a>

```csharp
public string StartingPosition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#starting_position KinesisAnalyticsApplication#starting_position}.

---

### KinesisAnalyticsApplicationOutputs <a name="KinesisAnalyticsApplicationOutputs" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationOutputs {
    string Name,
    KinesisAnalyticsApplicationOutputsSchema Schema,
    KinesisAnalyticsApplicationOutputsKinesisFirehose KinesisFirehose = null,
    KinesisAnalyticsApplicationOutputsKinesisStream KinesisStream = null,
    KinesisAnalyticsApplicationOutputsLambda Lambda = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#name KinesisAnalyticsApplication#name}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs.property.schema">Schema</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchema">KinesisAnalyticsApplicationOutputsSchema</a></code> | schema block. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs.property.kinesisFirehose">KinesisFirehose</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehose">KinesisAnalyticsApplicationOutputsKinesisFirehose</a></code> | kinesis_firehose block. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs.property.kinesisStream">KinesisStream</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStream">KinesisAnalyticsApplicationOutputsKinesisStream</a></code> | kinesis_stream block. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs.property.lambda">Lambda</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambda">KinesisAnalyticsApplicationOutputsLambda</a></code> | lambda block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#name KinesisAnalyticsApplication#name}.

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs.property.schema"></a>

```csharp
public KinesisAnalyticsApplicationOutputsSchema Schema { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchema">KinesisAnalyticsApplicationOutputsSchema</a>

schema block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#schema KinesisAnalyticsApplication#schema}

---

##### `KinesisFirehose`<sup>Optional</sup> <a name="KinesisFirehose" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs.property.kinesisFirehose"></a>

```csharp
public KinesisAnalyticsApplicationOutputsKinesisFirehose KinesisFirehose { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehose">KinesisAnalyticsApplicationOutputsKinesisFirehose</a>

kinesis_firehose block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#kinesis_firehose KinesisAnalyticsApplication#kinesis_firehose}

---

##### `KinesisStream`<sup>Optional</sup> <a name="KinesisStream" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs.property.kinesisStream"></a>

```csharp
public KinesisAnalyticsApplicationOutputsKinesisStream KinesisStream { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStream">KinesisAnalyticsApplicationOutputsKinesisStream</a>

kinesis_stream block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#kinesis_stream KinesisAnalyticsApplication#kinesis_stream}

---

##### `Lambda`<sup>Optional</sup> <a name="Lambda" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputs.property.lambda"></a>

```csharp
public KinesisAnalyticsApplicationOutputsLambda Lambda { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambda">KinesisAnalyticsApplicationOutputsLambda</a>

lambda block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#lambda KinesisAnalyticsApplication#lambda}

---

### KinesisAnalyticsApplicationOutputsKinesisFirehose <a name="KinesisAnalyticsApplicationOutputsKinesisFirehose" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehose.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationOutputsKinesisFirehose {
    string ResourceArn,
    string RoleArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehose.property.resourceArn">ResourceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehose.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}. |

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehose.property.resourceArn"></a>

```csharp
public string ResourceArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehose.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}.

---

### KinesisAnalyticsApplicationOutputsKinesisStream <a name="KinesisAnalyticsApplicationOutputsKinesisStream" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStream.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationOutputsKinesisStream {
    string ResourceArn,
    string RoleArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStream.property.resourceArn">ResourceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStream.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}. |

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStream.property.resourceArn"></a>

```csharp
public string ResourceArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStream.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}.

---

### KinesisAnalyticsApplicationOutputsLambda <a name="KinesisAnalyticsApplicationOutputsLambda" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambda"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambda.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationOutputsLambda {
    string ResourceArn,
    string RoleArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambda.property.resourceArn">ResourceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambda.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}. |

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambda.property.resourceArn"></a>

```csharp
public string ResourceArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambda.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}.

---

### KinesisAnalyticsApplicationOutputsSchema <a name="KinesisAnalyticsApplicationOutputsSchema" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchema.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationOutputsSchema {
    string RecordFormatType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchema.property.recordFormatType">RecordFormatType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_format_type KinesisAnalyticsApplication#record_format_type}. |

---

##### `RecordFormatType`<sup>Required</sup> <a name="RecordFormatType" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchema.property.recordFormatType"></a>

```csharp
public string RecordFormatType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_format_type KinesisAnalyticsApplication#record_format_type}.

---

### KinesisAnalyticsApplicationReferenceDataSources <a name="KinesisAnalyticsApplicationReferenceDataSources" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationReferenceDataSources {
    KinesisAnalyticsApplicationReferenceDataSourcesS3 S3,
    KinesisAnalyticsApplicationReferenceDataSourcesSchema Schema,
    string TableName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSources.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3">KinesisAnalyticsApplicationReferenceDataSourcesS3</a></code> | s3 block. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSources.property.schema">Schema</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchema">KinesisAnalyticsApplicationReferenceDataSourcesSchema</a></code> | schema block. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSources.property.tableName">TableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#table_name KinesisAnalyticsApplication#table_name}. |

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSources.property.s3"></a>

```csharp
public KinesisAnalyticsApplicationReferenceDataSourcesS3 S3 { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3">KinesisAnalyticsApplicationReferenceDataSourcesS3</a>

s3 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#s3 KinesisAnalyticsApplication#s3}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSources.property.schema"></a>

```csharp
public KinesisAnalyticsApplicationReferenceDataSourcesSchema Schema { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchema">KinesisAnalyticsApplicationReferenceDataSourcesSchema</a>

schema block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#schema KinesisAnalyticsApplication#schema}

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSources.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#table_name KinesisAnalyticsApplication#table_name}.

---

### KinesisAnalyticsApplicationReferenceDataSourcesS3 <a name="KinesisAnalyticsApplicationReferenceDataSourcesS3" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationReferenceDataSourcesS3 {
    string BucketArn,
    string FileKey,
    string RoleArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3.property.bucketArn">BucketArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#bucket_arn KinesisAnalyticsApplication#bucket_arn}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3.property.fileKey">FileKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#file_key KinesisAnalyticsApplication#file_key}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}. |

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3.property.bucketArn"></a>

```csharp
public string BucketArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#bucket_arn KinesisAnalyticsApplication#bucket_arn}.

---

##### `FileKey`<sup>Required</sup> <a name="FileKey" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3.property.fileKey"></a>

```csharp
public string FileKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#file_key KinesisAnalyticsApplication#file_key}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}.

---

### KinesisAnalyticsApplicationReferenceDataSourcesSchema <a name="KinesisAnalyticsApplicationReferenceDataSourcesSchema" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchema.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationReferenceDataSourcesSchema {
    object RecordColumns,
    KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat RecordFormat,
    string RecordEncoding = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchema.property.recordColumns">RecordColumns</a></code> | <code>object</code> | record_columns block. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchema.property.recordFormat">RecordFormat</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat</a></code> | record_format block. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchema.property.recordEncoding">RecordEncoding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_encoding KinesisAnalyticsApplication#record_encoding}. |

---

##### `RecordColumns`<sup>Required</sup> <a name="RecordColumns" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchema.property.recordColumns"></a>

```csharp
public object RecordColumns { get; set; }
```

- *Type:* object

record_columns block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_columns KinesisAnalyticsApplication#record_columns}

---

##### `RecordFormat`<sup>Required</sup> <a name="RecordFormat" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchema.property.recordFormat"></a>

```csharp
public KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat RecordFormat { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat</a>

record_format block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_format KinesisAnalyticsApplication#record_format}

---

##### `RecordEncoding`<sup>Optional</sup> <a name="RecordEncoding" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchema.property.recordEncoding"></a>

```csharp
public string RecordEncoding { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_encoding KinesisAnalyticsApplication#record_encoding}.

---

### KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns <a name="KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns {
    string Name,
    string SqlType,
    string Mapping = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#name KinesisAnalyticsApplication#name}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns.property.sqlType">SqlType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#sql_type KinesisAnalyticsApplication#sql_type}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns.property.mapping">Mapping</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#mapping KinesisAnalyticsApplication#mapping}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#name KinesisAnalyticsApplication#name}.

---

##### `SqlType`<sup>Required</sup> <a name="SqlType" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns.property.sqlType"></a>

```csharp
public string SqlType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#sql_type KinesisAnalyticsApplication#sql_type}.

---

##### `Mapping`<sup>Optional</sup> <a name="Mapping" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns.property.mapping"></a>

```csharp
public string Mapping { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#mapping KinesisAnalyticsApplication#mapping}.

---

### KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat <a name="KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat {
    KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters MappingParameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat.property.mappingParameters">MappingParameters</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters</a></code> | mapping_parameters block. |

---

##### `MappingParameters`<sup>Optional</sup> <a name="MappingParameters" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat.property.mappingParameters"></a>

```csharp
public KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters MappingParameters { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters</a>

mapping_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#mapping_parameters KinesisAnalyticsApplication#mapping_parameters}

---

### KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters <a name="KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters {
    KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv Csv = null,
    KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson Json = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters.property.csv">Csv</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv</a></code> | csv block. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters.property.json">Json</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson</a></code> | json block. |

---

##### `Csv`<sup>Optional</sup> <a name="Csv" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters.property.csv"></a>

```csharp
public KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv Csv { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv</a>

csv block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#csv KinesisAnalyticsApplication#csv}

---

##### `Json`<sup>Optional</sup> <a name="Json" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters.property.json"></a>

```csharp
public KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson Json { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson</a>

json block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#json KinesisAnalyticsApplication#json}

---

### KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv <a name="KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv {
    string RecordColumnDelimiter,
    string RecordRowDelimiter
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv.property.recordColumnDelimiter">RecordColumnDelimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_column_delimiter KinesisAnalyticsApplication#record_column_delimiter}. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv.property.recordRowDelimiter">RecordRowDelimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_row_delimiter KinesisAnalyticsApplication#record_row_delimiter}. |

---

##### `RecordColumnDelimiter`<sup>Required</sup> <a name="RecordColumnDelimiter" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv.property.recordColumnDelimiter"></a>

```csharp
public string RecordColumnDelimiter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_column_delimiter KinesisAnalyticsApplication#record_column_delimiter}.

---

##### `RecordRowDelimiter`<sup>Required</sup> <a name="RecordRowDelimiter" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv.property.recordRowDelimiter"></a>

```csharp
public string RecordRowDelimiter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_row_delimiter KinesisAnalyticsApplication#record_row_delimiter}.

---

### KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson <a name="KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson {
    string RecordRowPath
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson.property.recordRowPath">RecordRowPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_row_path KinesisAnalyticsApplication#record_row_path}. |

---

##### `RecordRowPath`<sup>Required</sup> <a name="RecordRowPath" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson.property.recordRowPath"></a>

```csharp
public string RecordRowPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_row_path KinesisAnalyticsApplication#record_row_path}.

---

## Classes <a name="Classes" id="Classes"></a>

### KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference <a name="KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.property.logStreamArnInput">LogStreamArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.property.logStreamArn">LogStreamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptions">KinesisAnalyticsApplicationCloudwatchLoggingOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LogStreamArnInput`<sup>Optional</sup> <a name="LogStreamArnInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.property.logStreamArnInput"></a>

```csharp
public string LogStreamArnInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `LogStreamArn`<sup>Required</sup> <a name="LogStreamArn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.property.logStreamArn"></a>

```csharp
public string LogStreamArn { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference.property.internalValue"></a>

```csharp
public KinesisAnalyticsApplicationCloudwatchLoggingOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationCloudwatchLoggingOptions">KinesisAnalyticsApplicationCloudwatchLoggingOptions</a>

---


### KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference <a name="KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.property.resourceArnInput">ResourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehose">KinesisAnalyticsApplicationInputsKinesisFirehose</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceArnInput`<sup>Optional</sup> <a name="ResourceArnInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.property.resourceArnInput"></a>

```csharp
public string ResourceArnInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference.property.internalValue"></a>

```csharp
public KinesisAnalyticsApplicationInputsKinesisFirehose InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehose">KinesisAnalyticsApplicationInputsKinesisFirehose</a>

---


### KinesisAnalyticsApplicationInputsKinesisStreamOutputReference <a name="KinesisAnalyticsApplicationInputsKinesisStreamOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationInputsKinesisStreamOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.property.resourceArnInput">ResourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStream">KinesisAnalyticsApplicationInputsKinesisStream</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceArnInput`<sup>Optional</sup> <a name="ResourceArnInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.property.resourceArnInput"></a>

```csharp
public string ResourceArnInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference.property.internalValue"></a>

```csharp
public KinesisAnalyticsApplicationInputsKinesisStream InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStream">KinesisAnalyticsApplicationInputsKinesisStream</a>

---


### KinesisAnalyticsApplicationInputsOutputReference <a name="KinesisAnalyticsApplicationInputsOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationInputsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putKinesisFirehose">PutKinesisFirehose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putKinesisStream">PutKinesisStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putParallelism">PutParallelism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putProcessingConfiguration">PutProcessingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putSchema">PutSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putStartingPositionConfiguration">PutStartingPositionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.resetKinesisFirehose">ResetKinesisFirehose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.resetKinesisStream">ResetKinesisStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.resetParallelism">ResetParallelism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.resetProcessingConfiguration">ResetProcessingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.resetStartingPositionConfiguration">ResetStartingPositionConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutKinesisFirehose` <a name="PutKinesisFirehose" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putKinesisFirehose"></a>

```csharp
private void PutKinesisFirehose(KinesisAnalyticsApplicationInputsKinesisFirehose Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putKinesisFirehose.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehose">KinesisAnalyticsApplicationInputsKinesisFirehose</a>

---

##### `PutKinesisStream` <a name="PutKinesisStream" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putKinesisStream"></a>

```csharp
private void PutKinesisStream(KinesisAnalyticsApplicationInputsKinesisStream Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putKinesisStream.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStream">KinesisAnalyticsApplicationInputsKinesisStream</a>

---

##### `PutParallelism` <a name="PutParallelism" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putParallelism"></a>

```csharp
private void PutParallelism(KinesisAnalyticsApplicationInputsParallelism Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putParallelism.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelism">KinesisAnalyticsApplicationInputsParallelism</a>

---

##### `PutProcessingConfiguration` <a name="PutProcessingConfiguration" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putProcessingConfiguration"></a>

```csharp
private void PutProcessingConfiguration(KinesisAnalyticsApplicationInputsProcessingConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putProcessingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfiguration">KinesisAnalyticsApplicationInputsProcessingConfiguration</a>

---

##### `PutSchema` <a name="PutSchema" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putSchema"></a>

```csharp
private void PutSchema(KinesisAnalyticsApplicationInputsSchema Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putSchema.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchema">KinesisAnalyticsApplicationInputsSchema</a>

---

##### `PutStartingPositionConfiguration` <a name="PutStartingPositionConfiguration" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putStartingPositionConfiguration"></a>

```csharp
private void PutStartingPositionConfiguration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.putStartingPositionConfiguration.parameter.value"></a>

- *Type:* object

---

##### `ResetKinesisFirehose` <a name="ResetKinesisFirehose" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.resetKinesisFirehose"></a>

```csharp
private void ResetKinesisFirehose()
```

##### `ResetKinesisStream` <a name="ResetKinesisStream" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.resetKinesisStream"></a>

```csharp
private void ResetKinesisStream()
```

##### `ResetParallelism` <a name="ResetParallelism" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.resetParallelism"></a>

```csharp
private void ResetParallelism()
```

##### `ResetProcessingConfiguration` <a name="ResetProcessingConfiguration" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.resetProcessingConfiguration"></a>

```csharp
private void ResetProcessingConfiguration()
```

##### `ResetStartingPositionConfiguration` <a name="ResetStartingPositionConfiguration" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.resetStartingPositionConfiguration"></a>

```csharp
private void ResetStartingPositionConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.kinesisFirehose">KinesisFirehose</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference">KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.kinesisStream">KinesisStream</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference">KinesisAnalyticsApplicationInputsKinesisStreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.parallelism">Parallelism</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference">KinesisAnalyticsApplicationInputsParallelismOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.processingConfiguration">ProcessingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference">KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.schema">Schema</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference">KinesisAnalyticsApplicationInputsSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.startingPositionConfiguration">StartingPositionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList">KinesisAnalyticsApplicationInputsStartingPositionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.streamNames">StreamNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.kinesisFirehoseInput">KinesisFirehoseInput</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehose">KinesisAnalyticsApplicationInputsKinesisFirehose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.kinesisStreamInput">KinesisStreamInput</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStream">KinesisAnalyticsApplicationInputsKinesisStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.namePrefixInput">NamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.parallelismInput">ParallelismInput</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelism">KinesisAnalyticsApplicationInputsParallelism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.processingConfigurationInput">ProcessingConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfiguration">KinesisAnalyticsApplicationInputsProcessingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.schemaInput">SchemaInput</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchema">KinesisAnalyticsApplicationInputsSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.startingPositionConfigurationInput">StartingPositionConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.namePrefix">NamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs">KinesisAnalyticsApplicationInputs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KinesisFirehose`<sup>Required</sup> <a name="KinesisFirehose" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.kinesisFirehose"></a>

```csharp
public KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference KinesisFirehose { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference">KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference</a>

---

##### `KinesisStream`<sup>Required</sup> <a name="KinesisStream" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.kinesisStream"></a>

```csharp
public KinesisAnalyticsApplicationInputsKinesisStreamOutputReference KinesisStream { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStreamOutputReference">KinesisAnalyticsApplicationInputsKinesisStreamOutputReference</a>

---

##### `Parallelism`<sup>Required</sup> <a name="Parallelism" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.parallelism"></a>

```csharp
public KinesisAnalyticsApplicationInputsParallelismOutputReference Parallelism { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference">KinesisAnalyticsApplicationInputsParallelismOutputReference</a>

---

##### `ProcessingConfiguration`<sup>Required</sup> <a name="ProcessingConfiguration" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.processingConfiguration"></a>

```csharp
public KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference ProcessingConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference">KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference</a>

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.schema"></a>

```csharp
public KinesisAnalyticsApplicationInputsSchemaOutputReference Schema { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference">KinesisAnalyticsApplicationInputsSchemaOutputReference</a>

---

##### `StartingPositionConfiguration`<sup>Required</sup> <a name="StartingPositionConfiguration" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.startingPositionConfiguration"></a>

```csharp
public KinesisAnalyticsApplicationInputsStartingPositionConfigurationList StartingPositionConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList">KinesisAnalyticsApplicationInputsStartingPositionConfigurationList</a>

---

##### `StreamNames`<sup>Required</sup> <a name="StreamNames" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.streamNames"></a>

```csharp
public string[] StreamNames { get; }
```

- *Type:* string[]

---

##### `KinesisFirehoseInput`<sup>Optional</sup> <a name="KinesisFirehoseInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.kinesisFirehoseInput"></a>

```csharp
public KinesisAnalyticsApplicationInputsKinesisFirehose KinesisFirehoseInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisFirehose">KinesisAnalyticsApplicationInputsKinesisFirehose</a>

---

##### `KinesisStreamInput`<sup>Optional</sup> <a name="KinesisStreamInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.kinesisStreamInput"></a>

```csharp
public KinesisAnalyticsApplicationInputsKinesisStream KinesisStreamInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsKinesisStream">KinesisAnalyticsApplicationInputsKinesisStream</a>

---

##### `NamePrefixInput`<sup>Optional</sup> <a name="NamePrefixInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.namePrefixInput"></a>

```csharp
public string NamePrefixInput { get; }
```

- *Type:* string

---

##### `ParallelismInput`<sup>Optional</sup> <a name="ParallelismInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.parallelismInput"></a>

```csharp
public KinesisAnalyticsApplicationInputsParallelism ParallelismInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelism">KinesisAnalyticsApplicationInputsParallelism</a>

---

##### `ProcessingConfigurationInput`<sup>Optional</sup> <a name="ProcessingConfigurationInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.processingConfigurationInput"></a>

```csharp
public KinesisAnalyticsApplicationInputsProcessingConfiguration ProcessingConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfiguration">KinesisAnalyticsApplicationInputsProcessingConfiguration</a>

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.schemaInput"></a>

```csharp
public KinesisAnalyticsApplicationInputsSchema SchemaInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchema">KinesisAnalyticsApplicationInputsSchema</a>

---

##### `StartingPositionConfigurationInput`<sup>Optional</sup> <a name="StartingPositionConfigurationInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.startingPositionConfigurationInput"></a>

```csharp
public object StartingPositionConfigurationInput { get; }
```

- *Type:* object

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.namePrefix"></a>

```csharp
public string NamePrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsOutputReference.property.internalValue"></a>

```csharp
public KinesisAnalyticsApplicationInputs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputs">KinesisAnalyticsApplicationInputs</a>

---


### KinesisAnalyticsApplicationInputsParallelismOutputReference <a name="KinesisAnalyticsApplicationInputsParallelismOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationInputsParallelismOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.resetCount">ResetCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCount` <a name="ResetCount" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.resetCount"></a>

```csharp
private void ResetCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelism">KinesisAnalyticsApplicationInputsParallelism</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelismOutputReference.property.internalValue"></a>

```csharp
public KinesisAnalyticsApplicationInputsParallelism InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsParallelism">KinesisAnalyticsApplicationInputsParallelism</a>

---


### KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference <a name="KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.property.resourceArnInput">ResourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambda">KinesisAnalyticsApplicationInputsProcessingConfigurationLambda</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceArnInput`<sup>Optional</sup> <a name="ResourceArnInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.property.resourceArnInput"></a>

```csharp
public string ResourceArnInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference.property.internalValue"></a>

```csharp
public KinesisAnalyticsApplicationInputsProcessingConfigurationLambda InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambda">KinesisAnalyticsApplicationInputsProcessingConfigurationLambda</a>

---


### KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference <a name="KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.putLambda">PutLambda</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLambda` <a name="PutLambda" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.putLambda"></a>

```csharp
private void PutLambda(KinesisAnalyticsApplicationInputsProcessingConfigurationLambda Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.putLambda.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambda">KinesisAnalyticsApplicationInputsProcessingConfigurationLambda</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.property.lambda">Lambda</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference">KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.property.lambdaInput">LambdaInput</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambda">KinesisAnalyticsApplicationInputsProcessingConfigurationLambda</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfiguration">KinesisAnalyticsApplicationInputsProcessingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Lambda`<sup>Required</sup> <a name="Lambda" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.property.lambda"></a>

```csharp
public KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference Lambda { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference">KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference</a>

---

##### `LambdaInput`<sup>Optional</sup> <a name="LambdaInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.property.lambdaInput"></a>

```csharp
public KinesisAnalyticsApplicationInputsProcessingConfigurationLambda LambdaInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationLambda">KinesisAnalyticsApplicationInputsProcessingConfigurationLambda</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference.property.internalValue"></a>

```csharp
public KinesisAnalyticsApplicationInputsProcessingConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsProcessingConfiguration">KinesisAnalyticsApplicationInputsProcessingConfiguration</a>

---


### KinesisAnalyticsApplicationInputsSchemaOutputReference <a name="KinesisAnalyticsApplicationInputsSchemaOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationInputsSchemaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.putRecordColumns">PutRecordColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.putRecordFormat">PutRecordFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.resetRecordEncoding">ResetRecordEncoding</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRecordColumns` <a name="PutRecordColumns" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.putRecordColumns"></a>

```csharp
private void PutRecordColumns(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.putRecordColumns.parameter.value"></a>

- *Type:* object

---

##### `PutRecordFormat` <a name="PutRecordFormat" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.putRecordFormat"></a>

```csharp
private void PutRecordFormat(KinesisAnalyticsApplicationInputsSchemaRecordFormat Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.putRecordFormat.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormat">KinesisAnalyticsApplicationInputsSchemaRecordFormat</a>

---

##### `ResetRecordEncoding` <a name="ResetRecordEncoding" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.resetRecordEncoding"></a>

```csharp
private void ResetRecordEncoding()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.recordColumns">RecordColumns</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList">KinesisAnalyticsApplicationInputsSchemaRecordColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.recordFormat">RecordFormat</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference">KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.recordColumnsInput">RecordColumnsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.recordEncodingInput">RecordEncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.recordFormatInput">RecordFormatInput</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormat">KinesisAnalyticsApplicationInputsSchemaRecordFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.recordEncoding">RecordEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchema">KinesisAnalyticsApplicationInputsSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RecordColumns`<sup>Required</sup> <a name="RecordColumns" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.recordColumns"></a>

```csharp
public KinesisAnalyticsApplicationInputsSchemaRecordColumnsList RecordColumns { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList">KinesisAnalyticsApplicationInputsSchemaRecordColumnsList</a>

---

##### `RecordFormat`<sup>Required</sup> <a name="RecordFormat" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.recordFormat"></a>

```csharp
public KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference RecordFormat { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference">KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference</a>

---

##### `RecordColumnsInput`<sup>Optional</sup> <a name="RecordColumnsInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.recordColumnsInput"></a>

```csharp
public object RecordColumnsInput { get; }
```

- *Type:* object

---

##### `RecordEncodingInput`<sup>Optional</sup> <a name="RecordEncodingInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.recordEncodingInput"></a>

```csharp
public string RecordEncodingInput { get; }
```

- *Type:* string

---

##### `RecordFormatInput`<sup>Optional</sup> <a name="RecordFormatInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.recordFormatInput"></a>

```csharp
public KinesisAnalyticsApplicationInputsSchemaRecordFormat RecordFormatInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormat">KinesisAnalyticsApplicationInputsSchemaRecordFormat</a>

---

##### `RecordEncoding`<sup>Required</sup> <a name="RecordEncoding" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.recordEncoding"></a>

```csharp
public string RecordEncoding { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaOutputReference.property.internalValue"></a>

```csharp
public KinesisAnalyticsApplicationInputsSchema InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchema">KinesisAnalyticsApplicationInputsSchema</a>

---


### KinesisAnalyticsApplicationInputsSchemaRecordColumnsList <a name="KinesisAnalyticsApplicationInputsSchemaRecordColumnsList" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationInputsSchemaRecordColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.get"></a>

```csharp
private KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference <a name="KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.resetMapping">ResetMapping</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMapping` <a name="ResetMapping" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.resetMapping"></a>

```csharp
private void ResetMapping()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.mappingInput">MappingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.sqlTypeInput">SqlTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.mapping">Mapping</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.sqlType">SqlType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MappingInput`<sup>Optional</sup> <a name="MappingInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.mappingInput"></a>

```csharp
public string MappingInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SqlTypeInput`<sup>Optional</sup> <a name="SqlTypeInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.sqlTypeInput"></a>

```csharp
public string SqlTypeInput { get; }
```

- *Type:* string

---

##### `Mapping`<sup>Required</sup> <a name="Mapping" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.mapping"></a>

```csharp
public string Mapping { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SqlType`<sup>Required</sup> <a name="SqlType" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.sqlType"></a>

```csharp
public string SqlType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference <a name="KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.property.recordColumnDelimiterInput">RecordColumnDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.property.recordRowDelimiterInput">RecordRowDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.property.recordColumnDelimiter">RecordColumnDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.property.recordRowDelimiter">RecordRowDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RecordColumnDelimiterInput`<sup>Optional</sup> <a name="RecordColumnDelimiterInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.property.recordColumnDelimiterInput"></a>

```csharp
public string RecordColumnDelimiterInput { get; }
```

- *Type:* string

---

##### `RecordRowDelimiterInput`<sup>Optional</sup> <a name="RecordRowDelimiterInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.property.recordRowDelimiterInput"></a>

```csharp
public string RecordRowDelimiterInput { get; }
```

- *Type:* string

---

##### `RecordColumnDelimiter`<sup>Required</sup> <a name="RecordColumnDelimiter" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.property.recordColumnDelimiter"></a>

```csharp
public string RecordColumnDelimiter { get; }
```

- *Type:* string

---

##### `RecordRowDelimiter`<sup>Required</sup> <a name="RecordRowDelimiter" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.property.recordRowDelimiter"></a>

```csharp
public string RecordRowDelimiter { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference.property.internalValue"></a>

```csharp
public KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv</a>

---


### KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference <a name="KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.property.recordRowPathInput">RecordRowPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.property.recordRowPath">RecordRowPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RecordRowPathInput`<sup>Optional</sup> <a name="RecordRowPathInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.property.recordRowPathInput"></a>

```csharp
public string RecordRowPathInput { get; }
```

- *Type:* string

---

##### `RecordRowPath`<sup>Required</sup> <a name="RecordRowPath" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.property.recordRowPath"></a>

```csharp
public string RecordRowPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference.property.internalValue"></a>

```csharp
public KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson</a>

---


### KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference <a name="KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.putCsv">PutCsv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.putJson">PutJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.resetCsv">ResetCsv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.resetJson">ResetJson</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCsv` <a name="PutCsv" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.putCsv"></a>

```csharp
private void PutCsv(KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.putCsv.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv</a>

---

##### `PutJson` <a name="PutJson" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.putJson"></a>

```csharp
private void PutJson(KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.putJson.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson</a>

---

##### `ResetCsv` <a name="ResetCsv" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.resetCsv"></a>

```csharp
private void ResetCsv()
```

##### `ResetJson` <a name="ResetJson" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.resetJson"></a>

```csharp
private void ResetJson()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.property.csv">Csv</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.property.json">Json</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.property.csvInput">CsvInput</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.property.jsonInput">JsonInput</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Csv`<sup>Required</sup> <a name="Csv" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.property.csv"></a>

```csharp
public KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference Csv { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference</a>

---

##### `Json`<sup>Required</sup> <a name="Json" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.property.json"></a>

```csharp
public KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference Json { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference</a>

---

##### `CsvInput`<sup>Optional</sup> <a name="CsvInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.property.csvInput"></a>

```csharp
public KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv CsvInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv</a>

---

##### `JsonInput`<sup>Optional</sup> <a name="JsonInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.property.jsonInput"></a>

```csharp
public KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson JsonInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference.property.internalValue"></a>

```csharp
public KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters</a>

---


### KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference <a name="KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.putMappingParameters">PutMappingParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.resetMappingParameters">ResetMappingParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMappingParameters` <a name="PutMappingParameters" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.putMappingParameters"></a>

```csharp
private void PutMappingParameters(KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.putMappingParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters</a>

---

##### `ResetMappingParameters` <a name="ResetMappingParameters" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.resetMappingParameters"></a>

```csharp
private void ResetMappingParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.property.mappingParameters">MappingParameters</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.property.recordFormatType">RecordFormatType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.property.mappingParametersInput">MappingParametersInput</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormat">KinesisAnalyticsApplicationInputsSchemaRecordFormat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MappingParameters`<sup>Required</sup> <a name="MappingParameters" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.property.mappingParameters"></a>

```csharp
public KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference MappingParameters { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference</a>

---

##### `RecordFormatType`<sup>Required</sup> <a name="RecordFormatType" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.property.recordFormatType"></a>

```csharp
public string RecordFormatType { get; }
```

- *Type:* string

---

##### `MappingParametersInput`<sup>Optional</sup> <a name="MappingParametersInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.property.mappingParametersInput"></a>

```csharp
public KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters MappingParametersInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters">KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference.property.internalValue"></a>

```csharp
public KinesisAnalyticsApplicationInputsSchemaRecordFormat InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsSchemaRecordFormat">KinesisAnalyticsApplicationInputsSchemaRecordFormat</a>

---


### KinesisAnalyticsApplicationInputsStartingPositionConfigurationList <a name="KinesisAnalyticsApplicationInputsStartingPositionConfigurationList" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationInputsStartingPositionConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.get"></a>

```csharp
private KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference <a name="KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.resetStartingPosition">ResetStartingPosition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStartingPosition` <a name="ResetStartingPosition" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.resetStartingPosition"></a>

```csharp
private void ResetStartingPosition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.property.startingPositionInput">StartingPositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.property.startingPosition">StartingPosition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StartingPositionInput`<sup>Optional</sup> <a name="StartingPositionInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.property.startingPositionInput"></a>

```csharp
public string StartingPositionInput { get; }
```

- *Type:* string

---

##### `StartingPosition`<sup>Required</sup> <a name="StartingPosition" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.property.startingPosition"></a>

```csharp
public string StartingPosition { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference <a name="KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.property.resourceArnInput">ResourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehose">KinesisAnalyticsApplicationOutputsKinesisFirehose</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceArnInput`<sup>Optional</sup> <a name="ResourceArnInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.property.resourceArnInput"></a>

```csharp
public string ResourceArnInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference.property.internalValue"></a>

```csharp
public KinesisAnalyticsApplicationOutputsKinesisFirehose InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehose">KinesisAnalyticsApplicationOutputsKinesisFirehose</a>

---


### KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference <a name="KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.property.resourceArnInput">ResourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStream">KinesisAnalyticsApplicationOutputsKinesisStream</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceArnInput`<sup>Optional</sup> <a name="ResourceArnInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.property.resourceArnInput"></a>

```csharp
public string ResourceArnInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference.property.internalValue"></a>

```csharp
public KinesisAnalyticsApplicationOutputsKinesisStream InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStream">KinesisAnalyticsApplicationOutputsKinesisStream</a>

---


### KinesisAnalyticsApplicationOutputsLambdaOutputReference <a name="KinesisAnalyticsApplicationOutputsLambdaOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationOutputsLambdaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.property.resourceArnInput">ResourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambda">KinesisAnalyticsApplicationOutputsLambda</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceArnInput`<sup>Optional</sup> <a name="ResourceArnInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.property.resourceArnInput"></a>

```csharp
public string ResourceArnInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference.property.internalValue"></a>

```csharp
public KinesisAnalyticsApplicationOutputsLambda InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambda">KinesisAnalyticsApplicationOutputsLambda</a>

---


### KinesisAnalyticsApplicationOutputsList <a name="KinesisAnalyticsApplicationOutputsList" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationOutputsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.get"></a>

```csharp
private KinesisAnalyticsApplicationOutputsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KinesisAnalyticsApplicationOutputsOutputReference <a name="KinesisAnalyticsApplicationOutputsOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationOutputsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.putKinesisFirehose">PutKinesisFirehose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.putKinesisStream">PutKinesisStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.putLambda">PutLambda</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.putSchema">PutSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.resetKinesisFirehose">ResetKinesisFirehose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.resetKinesisStream">ResetKinesisStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.resetLambda">ResetLambda</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutKinesisFirehose` <a name="PutKinesisFirehose" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.putKinesisFirehose"></a>

```csharp
private void PutKinesisFirehose(KinesisAnalyticsApplicationOutputsKinesisFirehose Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.putKinesisFirehose.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehose">KinesisAnalyticsApplicationOutputsKinesisFirehose</a>

---

##### `PutKinesisStream` <a name="PutKinesisStream" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.putKinesisStream"></a>

```csharp
private void PutKinesisStream(KinesisAnalyticsApplicationOutputsKinesisStream Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.putKinesisStream.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStream">KinesisAnalyticsApplicationOutputsKinesisStream</a>

---

##### `PutLambda` <a name="PutLambda" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.putLambda"></a>

```csharp
private void PutLambda(KinesisAnalyticsApplicationOutputsLambda Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.putLambda.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambda">KinesisAnalyticsApplicationOutputsLambda</a>

---

##### `PutSchema` <a name="PutSchema" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.putSchema"></a>

```csharp
private void PutSchema(KinesisAnalyticsApplicationOutputsSchema Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.putSchema.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchema">KinesisAnalyticsApplicationOutputsSchema</a>

---

##### `ResetKinesisFirehose` <a name="ResetKinesisFirehose" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.resetKinesisFirehose"></a>

```csharp
private void ResetKinesisFirehose()
```

##### `ResetKinesisStream` <a name="ResetKinesisStream" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.resetKinesisStream"></a>

```csharp
private void ResetKinesisStream()
```

##### `ResetLambda` <a name="ResetLambda" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.resetLambda"></a>

```csharp
private void ResetLambda()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.kinesisFirehose">KinesisFirehose</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference">KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.kinesisStream">KinesisStream</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference">KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.lambda">Lambda</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference">KinesisAnalyticsApplicationOutputsLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.schema">Schema</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference">KinesisAnalyticsApplicationOutputsSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.kinesisFirehoseInput">KinesisFirehoseInput</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehose">KinesisAnalyticsApplicationOutputsKinesisFirehose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.kinesisStreamInput">KinesisStreamInput</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStream">KinesisAnalyticsApplicationOutputsKinesisStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.lambdaInput">LambdaInput</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambda">KinesisAnalyticsApplicationOutputsLambda</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.schemaInput">SchemaInput</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchema">KinesisAnalyticsApplicationOutputsSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KinesisFirehose`<sup>Required</sup> <a name="KinesisFirehose" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.kinesisFirehose"></a>

```csharp
public KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference KinesisFirehose { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference">KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference</a>

---

##### `KinesisStream`<sup>Required</sup> <a name="KinesisStream" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.kinesisStream"></a>

```csharp
public KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference KinesisStream { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference">KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference</a>

---

##### `Lambda`<sup>Required</sup> <a name="Lambda" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.lambda"></a>

```csharp
public KinesisAnalyticsApplicationOutputsLambdaOutputReference Lambda { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambdaOutputReference">KinesisAnalyticsApplicationOutputsLambdaOutputReference</a>

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.schema"></a>

```csharp
public KinesisAnalyticsApplicationOutputsSchemaOutputReference Schema { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference">KinesisAnalyticsApplicationOutputsSchemaOutputReference</a>

---

##### `KinesisFirehoseInput`<sup>Optional</sup> <a name="KinesisFirehoseInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.kinesisFirehoseInput"></a>

```csharp
public KinesisAnalyticsApplicationOutputsKinesisFirehose KinesisFirehoseInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisFirehose">KinesisAnalyticsApplicationOutputsKinesisFirehose</a>

---

##### `KinesisStreamInput`<sup>Optional</sup> <a name="KinesisStreamInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.kinesisStreamInput"></a>

```csharp
public KinesisAnalyticsApplicationOutputsKinesisStream KinesisStreamInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsKinesisStream">KinesisAnalyticsApplicationOutputsKinesisStream</a>

---

##### `LambdaInput`<sup>Optional</sup> <a name="LambdaInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.lambdaInput"></a>

```csharp
public KinesisAnalyticsApplicationOutputsLambda LambdaInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsLambda">KinesisAnalyticsApplicationOutputsLambda</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.schemaInput"></a>

```csharp
public KinesisAnalyticsApplicationOutputsSchema SchemaInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchema">KinesisAnalyticsApplicationOutputsSchema</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KinesisAnalyticsApplicationOutputsSchemaOutputReference <a name="KinesisAnalyticsApplicationOutputsSchemaOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationOutputsSchemaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.property.recordFormatTypeInput">RecordFormatTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.property.recordFormatType">RecordFormatType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchema">KinesisAnalyticsApplicationOutputsSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RecordFormatTypeInput`<sup>Optional</sup> <a name="RecordFormatTypeInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.property.recordFormatTypeInput"></a>

```csharp
public string RecordFormatTypeInput { get; }
```

- *Type:* string

---

##### `RecordFormatType`<sup>Required</sup> <a name="RecordFormatType" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.property.recordFormatType"></a>

```csharp
public string RecordFormatType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchemaOutputReference.property.internalValue"></a>

```csharp
public KinesisAnalyticsApplicationOutputsSchema InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationOutputsSchema">KinesisAnalyticsApplicationOutputsSchema</a>

---


### KinesisAnalyticsApplicationReferenceDataSourcesOutputReference <a name="KinesisAnalyticsApplicationReferenceDataSourcesOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationReferenceDataSourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.putSchema">PutSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3` <a name="PutS3" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.putS3"></a>

```csharp
private void PutS3(KinesisAnalyticsApplicationReferenceDataSourcesS3 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3">KinesisAnalyticsApplicationReferenceDataSourcesS3</a>

---

##### `PutSchema` <a name="PutSchema" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.putSchema"></a>

```csharp
private void PutSchema(KinesisAnalyticsApplicationReferenceDataSourcesSchema Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.putSchema.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchema">KinesisAnalyticsApplicationReferenceDataSourcesSchema</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference">KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.schema">Schema</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference">KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.s3Input">S3Input</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3">KinesisAnalyticsApplicationReferenceDataSourcesS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.schemaInput">SchemaInput</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchema">KinesisAnalyticsApplicationReferenceDataSourcesSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSources">KinesisAnalyticsApplicationReferenceDataSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.s3"></a>

```csharp
public KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference S3 { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference">KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference</a>

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.schema"></a>

```csharp
public KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference Schema { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference">KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference</a>

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.s3Input"></a>

```csharp
public KinesisAnalyticsApplicationReferenceDataSourcesS3 S3Input { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3">KinesisAnalyticsApplicationReferenceDataSourcesS3</a>

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.schemaInput"></a>

```csharp
public KinesisAnalyticsApplicationReferenceDataSourcesSchema SchemaInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchema">KinesisAnalyticsApplicationReferenceDataSourcesSchema</a>

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesOutputReference.property.internalValue"></a>

```csharp
public KinesisAnalyticsApplicationReferenceDataSources InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSources">KinesisAnalyticsApplicationReferenceDataSources</a>

---


### KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference <a name="KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.bucketArnInput">BucketArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.fileKeyInput">FileKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.bucketArn">BucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.fileKey">FileKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3">KinesisAnalyticsApplicationReferenceDataSourcesS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketArnInput`<sup>Optional</sup> <a name="BucketArnInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.bucketArnInput"></a>

```csharp
public string BucketArnInput { get; }
```

- *Type:* string

---

##### `FileKeyInput`<sup>Optional</sup> <a name="FileKeyInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.fileKeyInput"></a>

```csharp
public string FileKeyInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.bucketArn"></a>

```csharp
public string BucketArn { get; }
```

- *Type:* string

---

##### `FileKey`<sup>Required</sup> <a name="FileKey" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.fileKey"></a>

```csharp
public string FileKey { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference.property.internalValue"></a>

```csharp
public KinesisAnalyticsApplicationReferenceDataSourcesS3 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesS3">KinesisAnalyticsApplicationReferenceDataSourcesS3</a>

---


### KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference <a name="KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.putRecordColumns">PutRecordColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.putRecordFormat">PutRecordFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.resetRecordEncoding">ResetRecordEncoding</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRecordColumns` <a name="PutRecordColumns" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.putRecordColumns"></a>

```csharp
private void PutRecordColumns(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.putRecordColumns.parameter.value"></a>

- *Type:* object

---

##### `PutRecordFormat` <a name="PutRecordFormat" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.putRecordFormat"></a>

```csharp
private void PutRecordFormat(KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.putRecordFormat.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat</a>

---

##### `ResetRecordEncoding` <a name="ResetRecordEncoding" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.resetRecordEncoding"></a>

```csharp
private void ResetRecordEncoding()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.recordColumns">RecordColumns</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.recordFormat">RecordFormat</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.recordColumnsInput">RecordColumnsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.recordEncodingInput">RecordEncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.recordFormatInput">RecordFormatInput</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.recordEncoding">RecordEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchema">KinesisAnalyticsApplicationReferenceDataSourcesSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RecordColumns`<sup>Required</sup> <a name="RecordColumns" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.recordColumns"></a>

```csharp
public KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList RecordColumns { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList</a>

---

##### `RecordFormat`<sup>Required</sup> <a name="RecordFormat" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.recordFormat"></a>

```csharp
public KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference RecordFormat { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference</a>

---

##### `RecordColumnsInput`<sup>Optional</sup> <a name="RecordColumnsInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.recordColumnsInput"></a>

```csharp
public object RecordColumnsInput { get; }
```

- *Type:* object

---

##### `RecordEncodingInput`<sup>Optional</sup> <a name="RecordEncodingInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.recordEncodingInput"></a>

```csharp
public string RecordEncodingInput { get; }
```

- *Type:* string

---

##### `RecordFormatInput`<sup>Optional</sup> <a name="RecordFormatInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.recordFormatInput"></a>

```csharp
public KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat RecordFormatInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat</a>

---

##### `RecordEncoding`<sup>Required</sup> <a name="RecordEncoding" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.recordEncoding"></a>

```csharp
public string RecordEncoding { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference.property.internalValue"></a>

```csharp
public KinesisAnalyticsApplicationReferenceDataSourcesSchema InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchema">KinesisAnalyticsApplicationReferenceDataSourcesSchema</a>

---


### KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList <a name="KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.get"></a>

```csharp
private KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference <a name="KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.resetMapping">ResetMapping</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMapping` <a name="ResetMapping" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.resetMapping"></a>

```csharp
private void ResetMapping()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.mappingInput">MappingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.sqlTypeInput">SqlTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.mapping">Mapping</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.sqlType">SqlType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MappingInput`<sup>Optional</sup> <a name="MappingInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.mappingInput"></a>

```csharp
public string MappingInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SqlTypeInput`<sup>Optional</sup> <a name="SqlTypeInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.sqlTypeInput"></a>

```csharp
public string SqlTypeInput { get; }
```

- *Type:* string

---

##### `Mapping`<sup>Required</sup> <a name="Mapping" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.mapping"></a>

```csharp
public string Mapping { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SqlType`<sup>Required</sup> <a name="SqlType" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.sqlType"></a>

```csharp
public string SqlType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference <a name="KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.property.recordColumnDelimiterInput">RecordColumnDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.property.recordRowDelimiterInput">RecordRowDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.property.recordColumnDelimiter">RecordColumnDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.property.recordRowDelimiter">RecordRowDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RecordColumnDelimiterInput`<sup>Optional</sup> <a name="RecordColumnDelimiterInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.property.recordColumnDelimiterInput"></a>

```csharp
public string RecordColumnDelimiterInput { get; }
```

- *Type:* string

---

##### `RecordRowDelimiterInput`<sup>Optional</sup> <a name="RecordRowDelimiterInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.property.recordRowDelimiterInput"></a>

```csharp
public string RecordRowDelimiterInput { get; }
```

- *Type:* string

---

##### `RecordColumnDelimiter`<sup>Required</sup> <a name="RecordColumnDelimiter" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.property.recordColumnDelimiter"></a>

```csharp
public string RecordColumnDelimiter { get; }
```

- *Type:* string

---

##### `RecordRowDelimiter`<sup>Required</sup> <a name="RecordRowDelimiter" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.property.recordRowDelimiter"></a>

```csharp
public string RecordRowDelimiter { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference.property.internalValue"></a>

```csharp
public KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv</a>

---


### KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference <a name="KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.property.recordRowPathInput">RecordRowPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.property.recordRowPath">RecordRowPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RecordRowPathInput`<sup>Optional</sup> <a name="RecordRowPathInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.property.recordRowPathInput"></a>

```csharp
public string RecordRowPathInput { get; }
```

- *Type:* string

---

##### `RecordRowPath`<sup>Required</sup> <a name="RecordRowPath" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.property.recordRowPath"></a>

```csharp
public string RecordRowPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference.property.internalValue"></a>

```csharp
public KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson</a>

---


### KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference <a name="KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.putCsv">PutCsv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.putJson">PutJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.resetCsv">ResetCsv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.resetJson">ResetJson</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCsv` <a name="PutCsv" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.putCsv"></a>

```csharp
private void PutCsv(KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.putCsv.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv</a>

---

##### `PutJson` <a name="PutJson" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.putJson"></a>

```csharp
private void PutJson(KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.putJson.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson</a>

---

##### `ResetCsv` <a name="ResetCsv" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.resetCsv"></a>

```csharp
private void ResetCsv()
```

##### `ResetJson` <a name="ResetJson" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.resetJson"></a>

```csharp
private void ResetJson()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.property.csv">Csv</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.property.json">Json</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.property.csvInput">CsvInput</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.property.jsonInput">JsonInput</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Csv`<sup>Required</sup> <a name="Csv" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.property.csv"></a>

```csharp
public KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference Csv { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference</a>

---

##### `Json`<sup>Required</sup> <a name="Json" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.property.json"></a>

```csharp
public KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference Json { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference</a>

---

##### `CsvInput`<sup>Optional</sup> <a name="CsvInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.property.csvInput"></a>

```csharp
public KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv CsvInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv</a>

---

##### `JsonInput`<sup>Optional</sup> <a name="JsonInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.property.jsonInput"></a>

```csharp
public KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson JsonInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference.property.internalValue"></a>

```csharp
public KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters</a>

---


### KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference <a name="KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.putMappingParameters">PutMappingParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.resetMappingParameters">ResetMappingParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMappingParameters` <a name="PutMappingParameters" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.putMappingParameters"></a>

```csharp
private void PutMappingParameters(KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.putMappingParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters</a>

---

##### `ResetMappingParameters` <a name="ResetMappingParameters" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.resetMappingParameters"></a>

```csharp
private void ResetMappingParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.property.mappingParameters">MappingParameters</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.property.recordFormatType">RecordFormatType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.property.mappingParametersInput">MappingParametersInput</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MappingParameters`<sup>Required</sup> <a name="MappingParameters" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.property.mappingParameters"></a>

```csharp
public KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference MappingParameters { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference</a>

---

##### `RecordFormatType`<sup>Required</sup> <a name="RecordFormatType" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.property.recordFormatType"></a>

```csharp
public string RecordFormatType { get; }
```

- *Type:* string

---

##### `MappingParametersInput`<sup>Optional</sup> <a name="MappingParametersInput" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.property.mappingParametersInput"></a>

```csharp
public KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters MappingParametersInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference.property.internalValue"></a>

```csharp
public KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisAnalyticsApplication.KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat">KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat</a>

---



