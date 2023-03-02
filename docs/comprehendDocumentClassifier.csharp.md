# `comprehendDocumentClassifier` Submodule <a name="`comprehendDocumentClassifier` Submodule" id="@cdktf/provider-aws.comprehendDocumentClassifier"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComprehendDocumentClassifier <a name="ComprehendDocumentClassifier" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier aws_comprehend_document_classifier}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ComprehendDocumentClassifier(Construct Scope, string Id, ComprehendDocumentClassifierConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig">ComprehendDocumentClassifierConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig">ComprehendDocumentClassifierConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.putInputDataConfig">PutInputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.putOutputDataConfig">PutOutputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.putVpcConfig">PutVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetModelKmsKeyId">ResetModelKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetOutputDataConfig">ResetOutputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetVersionName">ResetVersionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetVersionNamePrefix">ResetVersionNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetVolumeKmsKeyId">ResetVolumeKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetVpcConfig">ResetVpcConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutInputDataConfig` <a name="PutInputDataConfig" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.putInputDataConfig"></a>

```csharp
private void PutInputDataConfig(ComprehendDocumentClassifierInputDataConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.putInputDataConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig">ComprehendDocumentClassifierInputDataConfig</a>

---

##### `PutOutputDataConfig` <a name="PutOutputDataConfig" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.putOutputDataConfig"></a>

```csharp
private void PutOutputDataConfig(ComprehendDocumentClassifierOutputDataConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.putOutputDataConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig">ComprehendDocumentClassifierOutputDataConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.putTimeouts"></a>

```csharp
private void PutTimeouts(ComprehendDocumentClassifierTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeouts">ComprehendDocumentClassifierTimeouts</a>

---

##### `PutVpcConfig` <a name="PutVpcConfig" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.putVpcConfig"></a>

```csharp
private void PutVpcConfig(ComprehendDocumentClassifierVpcConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig">ComprehendDocumentClassifierVpcConfig</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetModelKmsKeyId` <a name="ResetModelKmsKeyId" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetModelKmsKeyId"></a>

```csharp
private void ResetModelKmsKeyId()
```

##### `ResetOutputDataConfig` <a name="ResetOutputDataConfig" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetOutputDataConfig"></a>

```csharp
private void ResetOutputDataConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVersionName` <a name="ResetVersionName" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetVersionName"></a>

```csharp
private void ResetVersionName()
```

##### `ResetVersionNamePrefix` <a name="ResetVersionNamePrefix" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetVersionNamePrefix"></a>

```csharp
private void ResetVersionNamePrefix()
```

##### `ResetVolumeKmsKeyId` <a name="ResetVolumeKmsKeyId" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetVolumeKmsKeyId"></a>

```csharp
private void ResetVolumeKmsKeyId()
```

##### `ResetVpcConfig` <a name="ResetVpcConfig" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetVpcConfig"></a>

```csharp
private void ResetVpcConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ComprehendDocumentClassifier.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ComprehendDocumentClassifier.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ComprehendDocumentClassifier.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.inputDataConfig">InputDataConfig</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference">ComprehendDocumentClassifierInputDataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.outputDataConfig">OutputDataConfig</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference">ComprehendDocumentClassifierOutputDataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference">ComprehendDocumentClassifierTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference">ComprehendDocumentClassifierVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.dataAccessRoleArnInput">DataAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.inputDataConfigInput">InputDataConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig">ComprehendDocumentClassifierInputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.languageCodeInput">LanguageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.modelKmsKeyIdInput">ModelKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.outputDataConfigInput">OutputDataConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig">ComprehendDocumentClassifierOutputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.versionNameInput">VersionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.versionNamePrefixInput">VersionNamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.volumeKmsKeyIdInput">VolumeKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.vpcConfigInput">VpcConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig">ComprehendDocumentClassifierVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.dataAccessRoleArn">DataAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.languageCode">LanguageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.modelKmsKeyId">ModelKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.versionName">VersionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.versionNamePrefix">VersionNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.volumeKmsKeyId">VolumeKmsKeyId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `InputDataConfig`<sup>Required</sup> <a name="InputDataConfig" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.inputDataConfig"></a>

```csharp
public ComprehendDocumentClassifierInputDataConfigOutputReference InputDataConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference">ComprehendDocumentClassifierInputDataConfigOutputReference</a>

---

##### `OutputDataConfig`<sup>Required</sup> <a name="OutputDataConfig" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.outputDataConfig"></a>

```csharp
public ComprehendDocumentClassifierOutputDataConfigOutputReference OutputDataConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference">ComprehendDocumentClassifierOutputDataConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.timeouts"></a>

```csharp
public ComprehendDocumentClassifierTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference">ComprehendDocumentClassifierTimeoutsOutputReference</a>

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.vpcConfig"></a>

```csharp
public ComprehendDocumentClassifierVpcConfigOutputReference VpcConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference">ComprehendDocumentClassifierVpcConfigOutputReference</a>

---

##### `DataAccessRoleArnInput`<sup>Optional</sup> <a name="DataAccessRoleArnInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.dataAccessRoleArnInput"></a>

```csharp
public string DataAccessRoleArnInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InputDataConfigInput`<sup>Optional</sup> <a name="InputDataConfigInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.inputDataConfigInput"></a>

```csharp
public ComprehendDocumentClassifierInputDataConfig InputDataConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig">ComprehendDocumentClassifierInputDataConfig</a>

---

##### `LanguageCodeInput`<sup>Optional</sup> <a name="LanguageCodeInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.languageCodeInput"></a>

```csharp
public string LanguageCodeInput { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `ModelKmsKeyIdInput`<sup>Optional</sup> <a name="ModelKmsKeyIdInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.modelKmsKeyIdInput"></a>

```csharp
public string ModelKmsKeyIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OutputDataConfigInput`<sup>Optional</sup> <a name="OutputDataConfigInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.outputDataConfigInput"></a>

```csharp
public ComprehendDocumentClassifierOutputDataConfig OutputDataConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig">ComprehendDocumentClassifierOutputDataConfig</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VersionNameInput`<sup>Optional</sup> <a name="VersionNameInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.versionNameInput"></a>

```csharp
public string VersionNameInput { get; }
```

- *Type:* string

---

##### `VersionNamePrefixInput`<sup>Optional</sup> <a name="VersionNamePrefixInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.versionNamePrefixInput"></a>

```csharp
public string VersionNamePrefixInput { get; }
```

- *Type:* string

---

##### `VolumeKmsKeyIdInput`<sup>Optional</sup> <a name="VolumeKmsKeyIdInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.volumeKmsKeyIdInput"></a>

```csharp
public string VolumeKmsKeyIdInput { get; }
```

- *Type:* string

---

##### `VpcConfigInput`<sup>Optional</sup> <a name="VpcConfigInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.vpcConfigInput"></a>

```csharp
public ComprehendDocumentClassifierVpcConfig VpcConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig">ComprehendDocumentClassifierVpcConfig</a>

---

##### `DataAccessRoleArn`<sup>Required</sup> <a name="DataAccessRoleArn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.dataAccessRoleArn"></a>

```csharp
public string DataAccessRoleArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.languageCode"></a>

```csharp
public string LanguageCode { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `ModelKmsKeyId`<sup>Required</sup> <a name="ModelKmsKeyId" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.modelKmsKeyId"></a>

```csharp
public string ModelKmsKeyId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VersionName`<sup>Required</sup> <a name="VersionName" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.versionName"></a>

```csharp
public string VersionName { get; }
```

- *Type:* string

---

##### `VersionNamePrefix`<sup>Required</sup> <a name="VersionNamePrefix" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.versionNamePrefix"></a>

```csharp
public string VersionNamePrefix { get; }
```

- *Type:* string

---

##### `VolumeKmsKeyId`<sup>Required</sup> <a name="VolumeKmsKeyId" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.volumeKmsKeyId"></a>

```csharp
public string VolumeKmsKeyId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComprehendDocumentClassifierConfig <a name="ComprehendDocumentClassifierConfig" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ComprehendDocumentClassifierConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DataAccessRoleArn,
    ComprehendDocumentClassifierInputDataConfig InputDataConfig,
    string LanguageCode,
    string Name,
    string Id = null,
    string Mode = null,
    string ModelKmsKeyId = null,
    ComprehendDocumentClassifierOutputDataConfig OutputDataConfig = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    ComprehendDocumentClassifierTimeouts Timeouts = null,
    string VersionName = null,
    string VersionNamePrefix = null,
    string VolumeKmsKeyId = null,
    ComprehendDocumentClassifierVpcConfig VpcConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.dataAccessRoleArn">DataAccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#data_access_role_arn ComprehendDocumentClassifier#data_access_role_arn}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.inputDataConfig">InputDataConfig</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig">ComprehendDocumentClassifierInputDataConfig</a></code> | input_data_config block. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.languageCode">LanguageCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#language_code ComprehendDocumentClassifier#language_code}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#name ComprehendDocumentClassifier#name}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#id ComprehendDocumentClassifier#id}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#mode ComprehendDocumentClassifier#mode}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.modelKmsKeyId">ModelKmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#model_kms_key_id ComprehendDocumentClassifier#model_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.outputDataConfig">OutputDataConfig</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig">ComprehendDocumentClassifierOutputDataConfig</a></code> | output_data_config block. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#tags ComprehendDocumentClassifier#tags}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#tags_all ComprehendDocumentClassifier#tags_all}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeouts">ComprehendDocumentClassifierTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.versionName">VersionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#version_name ComprehendDocumentClassifier#version_name}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.versionNamePrefix">VersionNamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#version_name_prefix ComprehendDocumentClassifier#version_name_prefix}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.volumeKmsKeyId">VolumeKmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#volume_kms_key_id ComprehendDocumentClassifier#volume_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig">ComprehendDocumentClassifierVpcConfig</a></code> | vpc_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DataAccessRoleArn`<sup>Required</sup> <a name="DataAccessRoleArn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.dataAccessRoleArn"></a>

```csharp
public string DataAccessRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#data_access_role_arn ComprehendDocumentClassifier#data_access_role_arn}.

---

##### `InputDataConfig`<sup>Required</sup> <a name="InputDataConfig" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.inputDataConfig"></a>

```csharp
public ComprehendDocumentClassifierInputDataConfig InputDataConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig">ComprehendDocumentClassifierInputDataConfig</a>

input_data_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#input_data_config ComprehendDocumentClassifier#input_data_config}

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.languageCode"></a>

```csharp
public string LanguageCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#language_code ComprehendDocumentClassifier#language_code}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#name ComprehendDocumentClassifier#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#id ComprehendDocumentClassifier#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#mode ComprehendDocumentClassifier#mode}.

---

##### `ModelKmsKeyId`<sup>Optional</sup> <a name="ModelKmsKeyId" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.modelKmsKeyId"></a>

```csharp
public string ModelKmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#model_kms_key_id ComprehendDocumentClassifier#model_kms_key_id}.

---

##### `OutputDataConfig`<sup>Optional</sup> <a name="OutputDataConfig" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.outputDataConfig"></a>

```csharp
public ComprehendDocumentClassifierOutputDataConfig OutputDataConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig">ComprehendDocumentClassifierOutputDataConfig</a>

output_data_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#output_data_config ComprehendDocumentClassifier#output_data_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#tags ComprehendDocumentClassifier#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#tags_all ComprehendDocumentClassifier#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.timeouts"></a>

```csharp
public ComprehendDocumentClassifierTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeouts">ComprehendDocumentClassifierTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#timeouts ComprehendDocumentClassifier#timeouts}

---

##### `VersionName`<sup>Optional</sup> <a name="VersionName" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.versionName"></a>

```csharp
public string VersionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#version_name ComprehendDocumentClassifier#version_name}.

---

##### `VersionNamePrefix`<sup>Optional</sup> <a name="VersionNamePrefix" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.versionNamePrefix"></a>

```csharp
public string VersionNamePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#version_name_prefix ComprehendDocumentClassifier#version_name_prefix}.

---

##### `VolumeKmsKeyId`<sup>Optional</sup> <a name="VolumeKmsKeyId" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.volumeKmsKeyId"></a>

```csharp
public string VolumeKmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#volume_kms_key_id ComprehendDocumentClassifier#volume_kms_key_id}.

---

##### `VpcConfig`<sup>Optional</sup> <a name="VpcConfig" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.vpcConfig"></a>

```csharp
public ComprehendDocumentClassifierVpcConfig VpcConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig">ComprehendDocumentClassifierVpcConfig</a>

vpc_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#vpc_config ComprehendDocumentClassifier#vpc_config}

---

### ComprehendDocumentClassifierInputDataConfig <a name="ComprehendDocumentClassifierInputDataConfig" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ComprehendDocumentClassifierInputDataConfig {
    object AugmentedManifests = null,
    string DataFormat = null,
    string LabelDelimiter = null,
    string S3Uri = null,
    string TestS3Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.augmentedManifests">AugmentedManifests</a></code> | <code>object</code> | augmented_manifests block. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.dataFormat">DataFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#data_format ComprehendDocumentClassifier#data_format}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.labelDelimiter">LabelDelimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#label_delimiter ComprehendDocumentClassifier#label_delimiter}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.s3Uri">S3Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#s3_uri ComprehendDocumentClassifier#s3_uri}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.testS3Uri">TestS3Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#test_s3_uri ComprehendDocumentClassifier#test_s3_uri}. |

---

##### `AugmentedManifests`<sup>Optional</sup> <a name="AugmentedManifests" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.augmentedManifests"></a>

```csharp
public object AugmentedManifests { get; set; }
```

- *Type:* object

augmented_manifests block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#augmented_manifests ComprehendDocumentClassifier#augmented_manifests}

---

##### `DataFormat`<sup>Optional</sup> <a name="DataFormat" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.dataFormat"></a>

```csharp
public string DataFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#data_format ComprehendDocumentClassifier#data_format}.

---

##### `LabelDelimiter`<sup>Optional</sup> <a name="LabelDelimiter" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.labelDelimiter"></a>

```csharp
public string LabelDelimiter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#label_delimiter ComprehendDocumentClassifier#label_delimiter}.

---

##### `S3Uri`<sup>Optional</sup> <a name="S3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.s3Uri"></a>

```csharp
public string S3Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#s3_uri ComprehendDocumentClassifier#s3_uri}.

---

##### `TestS3Uri`<sup>Optional</sup> <a name="TestS3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.testS3Uri"></a>

```csharp
public string TestS3Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#test_s3_uri ComprehendDocumentClassifier#test_s3_uri}.

---

### ComprehendDocumentClassifierInputDataConfigAugmentedManifests <a name="ComprehendDocumentClassifierInputDataConfigAugmentedManifests" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ComprehendDocumentClassifierInputDataConfigAugmentedManifests {
    string[] AttributeNames,
    string S3Uri,
    string AnnotationDataS3Uri = null,
    string DocumentType = null,
    string SourceDocumentsS3Uri = null,
    string Split = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.property.attributeNames">AttributeNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#attribute_names ComprehendDocumentClassifier#attribute_names}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.property.s3Uri">S3Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#s3_uri ComprehendDocumentClassifier#s3_uri}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.property.annotationDataS3Uri">AnnotationDataS3Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#annotation_data_s3_uri ComprehendDocumentClassifier#annotation_data_s3_uri}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.property.documentType">DocumentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#document_type ComprehendDocumentClassifier#document_type}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.property.sourceDocumentsS3Uri">SourceDocumentsS3Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#source_documents_s3_uri ComprehendDocumentClassifier#source_documents_s3_uri}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.property.split">Split</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#split ComprehendDocumentClassifier#split}. |

---

##### `AttributeNames`<sup>Required</sup> <a name="AttributeNames" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.property.attributeNames"></a>

```csharp
public string[] AttributeNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#attribute_names ComprehendDocumentClassifier#attribute_names}.

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.property.s3Uri"></a>

```csharp
public string S3Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#s3_uri ComprehendDocumentClassifier#s3_uri}.

---

##### `AnnotationDataS3Uri`<sup>Optional</sup> <a name="AnnotationDataS3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.property.annotationDataS3Uri"></a>

```csharp
public string AnnotationDataS3Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#annotation_data_s3_uri ComprehendDocumentClassifier#annotation_data_s3_uri}.

---

##### `DocumentType`<sup>Optional</sup> <a name="DocumentType" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.property.documentType"></a>

```csharp
public string DocumentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#document_type ComprehendDocumentClassifier#document_type}.

---

##### `SourceDocumentsS3Uri`<sup>Optional</sup> <a name="SourceDocumentsS3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.property.sourceDocumentsS3Uri"></a>

```csharp
public string SourceDocumentsS3Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#source_documents_s3_uri ComprehendDocumentClassifier#source_documents_s3_uri}.

---

##### `Split`<sup>Optional</sup> <a name="Split" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.property.split"></a>

```csharp
public string Split { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#split ComprehendDocumentClassifier#split}.

---

### ComprehendDocumentClassifierOutputDataConfig <a name="ComprehendDocumentClassifierOutputDataConfig" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ComprehendDocumentClassifierOutputDataConfig {
    string S3Uri,
    string KmsKeyId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig.property.s3Uri">S3Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#s3_uri ComprehendDocumentClassifier#s3_uri}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#kms_key_id ComprehendDocumentClassifier#kms_key_id}. |

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig.property.s3Uri"></a>

```csharp
public string S3Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#s3_uri ComprehendDocumentClassifier#s3_uri}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#kms_key_id ComprehendDocumentClassifier#kms_key_id}.

---

### ComprehendDocumentClassifierTimeouts <a name="ComprehendDocumentClassifierTimeouts" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ComprehendDocumentClassifierTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#create ComprehendDocumentClassifier#create}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#delete ComprehendDocumentClassifier#delete}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#update ComprehendDocumentClassifier#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#create ComprehendDocumentClassifier#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#delete ComprehendDocumentClassifier#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#update ComprehendDocumentClassifier#update}.

---

### ComprehendDocumentClassifierVpcConfig <a name="ComprehendDocumentClassifierVpcConfig" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ComprehendDocumentClassifierVpcConfig {
    string[] SecurityGroupIds,
    string[] Subnets
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#security_group_ids ComprehendDocumentClassifier#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig.property.subnets">Subnets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#subnets ComprehendDocumentClassifier#subnets}. |

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#security_group_ids ComprehendDocumentClassifier#security_group_ids}.

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig.property.subnets"></a>

```csharp
public string[] Subnets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#subnets ComprehendDocumentClassifier#subnets}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList <a name="ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.get"></a>

```csharp
private ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference <a name="ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resetAnnotationDataS3Uri">ResetAnnotationDataS3Uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resetDocumentType">ResetDocumentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resetSourceDocumentsS3Uri">ResetSourceDocumentsS3Uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resetSplit">ResetSplit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotationDataS3Uri` <a name="ResetAnnotationDataS3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resetAnnotationDataS3Uri"></a>

```csharp
private void ResetAnnotationDataS3Uri()
```

##### `ResetDocumentType` <a name="ResetDocumentType" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resetDocumentType"></a>

```csharp
private void ResetDocumentType()
```

##### `ResetSourceDocumentsS3Uri` <a name="ResetSourceDocumentsS3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resetSourceDocumentsS3Uri"></a>

```csharp
private void ResetSourceDocumentsS3Uri()
```

##### `ResetSplit` <a name="ResetSplit" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resetSplit"></a>

```csharp
private void ResetSplit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.annotationDataS3UriInput">AnnotationDataS3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.attributeNamesInput">AttributeNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.documentTypeInput">DocumentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.sourceDocumentsS3UriInput">SourceDocumentsS3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.splitInput">SplitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.annotationDataS3Uri">AnnotationDataS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.attributeNames">AttributeNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.documentType">DocumentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.s3Uri">S3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.sourceDocumentsS3Uri">SourceDocumentsS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.split">Split</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AnnotationDataS3UriInput`<sup>Optional</sup> <a name="AnnotationDataS3UriInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.annotationDataS3UriInput"></a>

```csharp
public string AnnotationDataS3UriInput { get; }
```

- *Type:* string

---

##### `AttributeNamesInput`<sup>Optional</sup> <a name="AttributeNamesInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.attributeNamesInput"></a>

```csharp
public string[] AttributeNamesInput { get; }
```

- *Type:* string[]

---

##### `DocumentTypeInput`<sup>Optional</sup> <a name="DocumentTypeInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.documentTypeInput"></a>

```csharp
public string DocumentTypeInput { get; }
```

- *Type:* string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.s3UriInput"></a>

```csharp
public string S3UriInput { get; }
```

- *Type:* string

---

##### `SourceDocumentsS3UriInput`<sup>Optional</sup> <a name="SourceDocumentsS3UriInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.sourceDocumentsS3UriInput"></a>

```csharp
public string SourceDocumentsS3UriInput { get; }
```

- *Type:* string

---

##### `SplitInput`<sup>Optional</sup> <a name="SplitInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.splitInput"></a>

```csharp
public string SplitInput { get; }
```

- *Type:* string

---

##### `AnnotationDataS3Uri`<sup>Required</sup> <a name="AnnotationDataS3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.annotationDataS3Uri"></a>

```csharp
public string AnnotationDataS3Uri { get; }
```

- *Type:* string

---

##### `AttributeNames`<sup>Required</sup> <a name="AttributeNames" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.attributeNames"></a>

```csharp
public string[] AttributeNames { get; }
```

- *Type:* string[]

---

##### `DocumentType`<sup>Required</sup> <a name="DocumentType" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.documentType"></a>

```csharp
public string DocumentType { get; }
```

- *Type:* string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.s3Uri"></a>

```csharp
public string S3Uri { get; }
```

- *Type:* string

---

##### `SourceDocumentsS3Uri`<sup>Required</sup> <a name="SourceDocumentsS3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.sourceDocumentsS3Uri"></a>

```csharp
public string SourceDocumentsS3Uri { get; }
```

- *Type:* string

---

##### `Split`<sup>Required</sup> <a name="Split" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.split"></a>

```csharp
public string Split { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComprehendDocumentClassifierInputDataConfigOutputReference <a name="ComprehendDocumentClassifierInputDataConfigOutputReference" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ComprehendDocumentClassifierInputDataConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.putAugmentedManifests">PutAugmentedManifests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetAugmentedManifests">ResetAugmentedManifests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetDataFormat">ResetDataFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetLabelDelimiter">ResetLabelDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetS3Uri">ResetS3Uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetTestS3Uri">ResetTestS3Uri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAugmentedManifests` <a name="PutAugmentedManifests" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.putAugmentedManifests"></a>

```csharp
private void PutAugmentedManifests(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.putAugmentedManifests.parameter.value"></a>

- *Type:* object

---

##### `ResetAugmentedManifests` <a name="ResetAugmentedManifests" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetAugmentedManifests"></a>

```csharp
private void ResetAugmentedManifests()
```

##### `ResetDataFormat` <a name="ResetDataFormat" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetDataFormat"></a>

```csharp
private void ResetDataFormat()
```

##### `ResetLabelDelimiter` <a name="ResetLabelDelimiter" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetLabelDelimiter"></a>

```csharp
private void ResetLabelDelimiter()
```

##### `ResetS3Uri` <a name="ResetS3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetS3Uri"></a>

```csharp
private void ResetS3Uri()
```

##### `ResetTestS3Uri` <a name="ResetTestS3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetTestS3Uri"></a>

```csharp
private void ResetTestS3Uri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.augmentedManifests">AugmentedManifests</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList">ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.augmentedManifestsInput">AugmentedManifestsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.dataFormatInput">DataFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.labelDelimiterInput">LabelDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.testS3UriInput">TestS3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.dataFormat">DataFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.labelDelimiter">LabelDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.s3Uri">S3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.testS3Uri">TestS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig">ComprehendDocumentClassifierInputDataConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AugmentedManifests`<sup>Required</sup> <a name="AugmentedManifests" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.augmentedManifests"></a>

```csharp
public ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList AugmentedManifests { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList">ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList</a>

---

##### `AugmentedManifestsInput`<sup>Optional</sup> <a name="AugmentedManifestsInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.augmentedManifestsInput"></a>

```csharp
public object AugmentedManifestsInput { get; }
```

- *Type:* object

---

##### `DataFormatInput`<sup>Optional</sup> <a name="DataFormatInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.dataFormatInput"></a>

```csharp
public string DataFormatInput { get; }
```

- *Type:* string

---

##### `LabelDelimiterInput`<sup>Optional</sup> <a name="LabelDelimiterInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.labelDelimiterInput"></a>

```csharp
public string LabelDelimiterInput { get; }
```

- *Type:* string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.s3UriInput"></a>

```csharp
public string S3UriInput { get; }
```

- *Type:* string

---

##### `TestS3UriInput`<sup>Optional</sup> <a name="TestS3UriInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.testS3UriInput"></a>

```csharp
public string TestS3UriInput { get; }
```

- *Type:* string

---

##### `DataFormat`<sup>Required</sup> <a name="DataFormat" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.dataFormat"></a>

```csharp
public string DataFormat { get; }
```

- *Type:* string

---

##### `LabelDelimiter`<sup>Required</sup> <a name="LabelDelimiter" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.labelDelimiter"></a>

```csharp
public string LabelDelimiter { get; }
```

- *Type:* string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.s3Uri"></a>

```csharp
public string S3Uri { get; }
```

- *Type:* string

---

##### `TestS3Uri`<sup>Required</sup> <a name="TestS3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.testS3Uri"></a>

```csharp
public string TestS3Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.internalValue"></a>

```csharp
public ComprehendDocumentClassifierInputDataConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig">ComprehendDocumentClassifierInputDataConfig</a>

---


### ComprehendDocumentClassifierOutputDataConfigOutputReference <a name="ComprehendDocumentClassifierOutputDataConfigOutputReference" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ComprehendDocumentClassifierOutputDataConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.outputS3Uri">OutputS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.s3Uri">S3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig">ComprehendDocumentClassifierOutputDataConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OutputS3Uri`<sup>Required</sup> <a name="OutputS3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.outputS3Uri"></a>

```csharp
public string OutputS3Uri { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.s3UriInput"></a>

```csharp
public string S3UriInput { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.s3Uri"></a>

```csharp
public string S3Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.internalValue"></a>

```csharp
public ComprehendDocumentClassifierOutputDataConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig">ComprehendDocumentClassifierOutputDataConfig</a>

---


### ComprehendDocumentClassifierTimeoutsOutputReference <a name="ComprehendDocumentClassifierTimeoutsOutputReference" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ComprehendDocumentClassifierTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComprehendDocumentClassifierVpcConfigOutputReference <a name="ComprehendDocumentClassifierVpcConfigOutputReference" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ComprehendDocumentClassifierVpcConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.subnets">Subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig">ComprehendDocumentClassifierVpcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.subnetsInput"></a>

```csharp
public string[] SubnetsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.subnets"></a>

```csharp
public string[] Subnets { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.internalValue"></a>

```csharp
public ComprehendDocumentClassifierVpcConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig">ComprehendDocumentClassifierVpcConfig</a>

---



