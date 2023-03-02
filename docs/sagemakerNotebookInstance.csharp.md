# `sagemakerNotebookInstance` Submodule <a name="`sagemakerNotebookInstance` Submodule" id="@cdktf/provider-aws.sagemakerNotebookInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerNotebookInstance <a name="SagemakerNotebookInstance" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance aws_sagemaker_notebook_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerNotebookInstance(Construct Scope, string Id, SagemakerNotebookInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig">SagemakerNotebookInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig">SagemakerNotebookInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.putInstanceMetadataServiceConfiguration">PutInstanceMetadataServiceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetAcceleratorTypes">ResetAcceleratorTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetAdditionalCodeRepositories">ResetAdditionalCodeRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetDefaultCodeRepository">ResetDefaultCodeRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetDirectInternetAccess">ResetDirectInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetInstanceMetadataServiceConfiguration">ResetInstanceMetadataServiceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetLifecycleConfigName">ResetLifecycleConfigName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetPlatformIdentifier">ResetPlatformIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetRootAccess">ResetRootAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetSecurityGroups">ResetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetVolumeSize">ResetVolumeSize</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutInstanceMetadataServiceConfiguration` <a name="PutInstanceMetadataServiceConfiguration" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.putInstanceMetadataServiceConfiguration"></a>

```csharp
private void PutInstanceMetadataServiceConfiguration(SagemakerNotebookInstanceInstanceMetadataServiceConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.putInstanceMetadataServiceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration">SagemakerNotebookInstanceInstanceMetadataServiceConfiguration</a>

---

##### `ResetAcceleratorTypes` <a name="ResetAcceleratorTypes" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetAcceleratorTypes"></a>

```csharp
private void ResetAcceleratorTypes()
```

##### `ResetAdditionalCodeRepositories` <a name="ResetAdditionalCodeRepositories" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetAdditionalCodeRepositories"></a>

```csharp
private void ResetAdditionalCodeRepositories()
```

##### `ResetDefaultCodeRepository` <a name="ResetDefaultCodeRepository" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetDefaultCodeRepository"></a>

```csharp
private void ResetDefaultCodeRepository()
```

##### `ResetDirectInternetAccess` <a name="ResetDirectInternetAccess" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetDirectInternetAccess"></a>

```csharp
private void ResetDirectInternetAccess()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstanceMetadataServiceConfiguration` <a name="ResetInstanceMetadataServiceConfiguration" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetInstanceMetadataServiceConfiguration"></a>

```csharp
private void ResetInstanceMetadataServiceConfiguration()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetLifecycleConfigName` <a name="ResetLifecycleConfigName" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetLifecycleConfigName"></a>

```csharp
private void ResetLifecycleConfigName()
```

##### `ResetPlatformIdentifier` <a name="ResetPlatformIdentifier" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetPlatformIdentifier"></a>

```csharp
private void ResetPlatformIdentifier()
```

##### `ResetRootAccess` <a name="ResetRootAccess" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetRootAccess"></a>

```csharp
private void ResetRootAccess()
```

##### `ResetSecurityGroups` <a name="ResetSecurityGroups" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetSecurityGroups"></a>

```csharp
private void ResetSecurityGroups()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetVolumeSize` <a name="ResetVolumeSize" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.resetVolumeSize"></a>

```csharp
private void ResetVolumeSize()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SagemakerNotebookInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SagemakerNotebookInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SagemakerNotebookInstance.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.instanceMetadataServiceConfiguration">InstanceMetadataServiceConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference">SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.acceleratorTypesInput">AcceleratorTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.additionalCodeRepositoriesInput">AdditionalCodeRepositoriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.defaultCodeRepositoryInput">DefaultCodeRepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.directInternetAccessInput">DirectInternetAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.instanceMetadataServiceConfigurationInput">InstanceMetadataServiceConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration">SagemakerNotebookInstanceInstanceMetadataServiceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.lifecycleConfigNameInput">LifecycleConfigNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.platformIdentifierInput">PlatformIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.rootAccessInput">RootAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.volumeSizeInput">VolumeSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.acceleratorTypes">AcceleratorTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.additionalCodeRepositories">AdditionalCodeRepositories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.defaultCodeRepository">DefaultCodeRepository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.directInternetAccess">DirectInternetAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.lifecycleConfigName">LifecycleConfigName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.platformIdentifier">PlatformIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.rootAccess">RootAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.volumeSize">VolumeSize</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `InstanceMetadataServiceConfiguration`<sup>Required</sup> <a name="InstanceMetadataServiceConfiguration" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.instanceMetadataServiceConfiguration"></a>

```csharp
public SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference InstanceMetadataServiceConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference">SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference</a>

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.networkInterfaceId"></a>

```csharp
public string NetworkInterfaceId { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `AcceleratorTypesInput`<sup>Optional</sup> <a name="AcceleratorTypesInput" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.acceleratorTypesInput"></a>

```csharp
public string[] AcceleratorTypesInput { get; }
```

- *Type:* string[]

---

##### `AdditionalCodeRepositoriesInput`<sup>Optional</sup> <a name="AdditionalCodeRepositoriesInput" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.additionalCodeRepositoriesInput"></a>

```csharp
public string[] AdditionalCodeRepositoriesInput { get; }
```

- *Type:* string[]

---

##### `DefaultCodeRepositoryInput`<sup>Optional</sup> <a name="DefaultCodeRepositoryInput" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.defaultCodeRepositoryInput"></a>

```csharp
public string DefaultCodeRepositoryInput { get; }
```

- *Type:* string

---

##### `DirectInternetAccessInput`<sup>Optional</sup> <a name="DirectInternetAccessInput" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.directInternetAccessInput"></a>

```csharp
public string DirectInternetAccessInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceMetadataServiceConfigurationInput`<sup>Optional</sup> <a name="InstanceMetadataServiceConfigurationInput" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.instanceMetadataServiceConfigurationInput"></a>

```csharp
public SagemakerNotebookInstanceInstanceMetadataServiceConfiguration InstanceMetadataServiceConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration">SagemakerNotebookInstanceInstanceMetadataServiceConfiguration</a>

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `LifecycleConfigNameInput`<sup>Optional</sup> <a name="LifecycleConfigNameInput" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.lifecycleConfigNameInput"></a>

```csharp
public string LifecycleConfigNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PlatformIdentifierInput`<sup>Optional</sup> <a name="PlatformIdentifierInput" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.platformIdentifierInput"></a>

```csharp
public string PlatformIdentifierInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `RootAccessInput`<sup>Optional</sup> <a name="RootAccessInput" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.rootAccessInput"></a>

```csharp
public string RootAccessInput { get; }
```

- *Type:* string

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.securityGroupsInput"></a>

```csharp
public string[] SecurityGroupsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VolumeSizeInput`<sup>Optional</sup> <a name="VolumeSizeInput" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.volumeSizeInput"></a>

```csharp
public double VolumeSizeInput { get; }
```

- *Type:* double

---

##### `AcceleratorTypes`<sup>Required</sup> <a name="AcceleratorTypes" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.acceleratorTypes"></a>

```csharp
public string[] AcceleratorTypes { get; }
```

- *Type:* string[]

---

##### `AdditionalCodeRepositories`<sup>Required</sup> <a name="AdditionalCodeRepositories" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.additionalCodeRepositories"></a>

```csharp
public string[] AdditionalCodeRepositories { get; }
```

- *Type:* string[]

---

##### `DefaultCodeRepository`<sup>Required</sup> <a name="DefaultCodeRepository" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.defaultCodeRepository"></a>

```csharp
public string DefaultCodeRepository { get; }
```

- *Type:* string

---

##### `DirectInternetAccess`<sup>Required</sup> <a name="DirectInternetAccess" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.directInternetAccess"></a>

```csharp
public string DirectInternetAccess { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `LifecycleConfigName`<sup>Required</sup> <a name="LifecycleConfigName" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.lifecycleConfigName"></a>

```csharp
public string LifecycleConfigName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PlatformIdentifier`<sup>Required</sup> <a name="PlatformIdentifier" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.platformIdentifier"></a>

```csharp
public string PlatformIdentifier { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `RootAccess`<sup>Required</sup> <a name="RootAccess" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.rootAccess"></a>

```csharp
public string RootAccess { get; }
```

- *Type:* string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; }
```

- *Type:* string[]

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.volumeSize"></a>

```csharp
public double VolumeSize { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerNotebookInstanceConfig <a name="SagemakerNotebookInstanceConfig" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerNotebookInstanceConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string InstanceType,
    string Name,
    string RoleArn,
    string[] AcceleratorTypes = null,
    string[] AdditionalCodeRepositories = null,
    string DefaultCodeRepository = null,
    string DirectInternetAccess = null,
    string Id = null,
    SagemakerNotebookInstanceInstanceMetadataServiceConfiguration InstanceMetadataServiceConfiguration = null,
    string KmsKeyId = null,
    string LifecycleConfigName = null,
    string PlatformIdentifier = null,
    string RootAccess = null,
    string[] SecurityGroups = null,
    string SubnetId = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    double VolumeSize = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.instanceType">InstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#instance_type SagemakerNotebookInstance#instance_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#name SagemakerNotebookInstance#name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#role_arn SagemakerNotebookInstance#role_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.acceleratorTypes">AcceleratorTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#accelerator_types SagemakerNotebookInstance#accelerator_types}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.additionalCodeRepositories">AdditionalCodeRepositories</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#additional_code_repositories SagemakerNotebookInstance#additional_code_repositories}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.defaultCodeRepository">DefaultCodeRepository</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#default_code_repository SagemakerNotebookInstance#default_code_repository}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.directInternetAccess">DirectInternetAccess</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#direct_internet_access SagemakerNotebookInstance#direct_internet_access}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#id SagemakerNotebookInstance#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.instanceMetadataServiceConfiguration">InstanceMetadataServiceConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration">SagemakerNotebookInstanceInstanceMetadataServiceConfiguration</a></code> | instance_metadata_service_configuration block. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#kms_key_id SagemakerNotebookInstance#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.lifecycleConfigName">LifecycleConfigName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#lifecycle_config_name SagemakerNotebookInstance#lifecycle_config_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.platformIdentifier">PlatformIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#platform_identifier SagemakerNotebookInstance#platform_identifier}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.rootAccess">RootAccess</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#root_access SagemakerNotebookInstance#root_access}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#security_groups SagemakerNotebookInstance#security_groups}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#subnet_id SagemakerNotebookInstance#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#tags SagemakerNotebookInstance#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#tags_all SagemakerNotebookInstance#tags_all}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.volumeSize">VolumeSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#volume_size SagemakerNotebookInstance#volume_size}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#instance_type SagemakerNotebookInstance#instance_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#name SagemakerNotebookInstance#name}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#role_arn SagemakerNotebookInstance#role_arn}.

---

##### `AcceleratorTypes`<sup>Optional</sup> <a name="AcceleratorTypes" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.acceleratorTypes"></a>

```csharp
public string[] AcceleratorTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#accelerator_types SagemakerNotebookInstance#accelerator_types}.

---

##### `AdditionalCodeRepositories`<sup>Optional</sup> <a name="AdditionalCodeRepositories" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.additionalCodeRepositories"></a>

```csharp
public string[] AdditionalCodeRepositories { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#additional_code_repositories SagemakerNotebookInstance#additional_code_repositories}.

---

##### `DefaultCodeRepository`<sup>Optional</sup> <a name="DefaultCodeRepository" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.defaultCodeRepository"></a>

```csharp
public string DefaultCodeRepository { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#default_code_repository SagemakerNotebookInstance#default_code_repository}.

---

##### `DirectInternetAccess`<sup>Optional</sup> <a name="DirectInternetAccess" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.directInternetAccess"></a>

```csharp
public string DirectInternetAccess { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#direct_internet_access SagemakerNotebookInstance#direct_internet_access}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#id SagemakerNotebookInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceMetadataServiceConfiguration`<sup>Optional</sup> <a name="InstanceMetadataServiceConfiguration" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.instanceMetadataServiceConfiguration"></a>

```csharp
public SagemakerNotebookInstanceInstanceMetadataServiceConfiguration InstanceMetadataServiceConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration">SagemakerNotebookInstanceInstanceMetadataServiceConfiguration</a>

instance_metadata_service_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#instance_metadata_service_configuration SagemakerNotebookInstance#instance_metadata_service_configuration}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#kms_key_id SagemakerNotebookInstance#kms_key_id}.

---

##### `LifecycleConfigName`<sup>Optional</sup> <a name="LifecycleConfigName" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.lifecycleConfigName"></a>

```csharp
public string LifecycleConfigName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#lifecycle_config_name SagemakerNotebookInstance#lifecycle_config_name}.

---

##### `PlatformIdentifier`<sup>Optional</sup> <a name="PlatformIdentifier" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.platformIdentifier"></a>

```csharp
public string PlatformIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#platform_identifier SagemakerNotebookInstance#platform_identifier}.

---

##### `RootAccess`<sup>Optional</sup> <a name="RootAccess" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.rootAccess"></a>

```csharp
public string RootAccess { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#root_access SagemakerNotebookInstance#root_access}.

---

##### `SecurityGroups`<sup>Optional</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#security_groups SagemakerNotebookInstance#security_groups}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#subnet_id SagemakerNotebookInstance#subnet_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#tags SagemakerNotebookInstance#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#tags_all SagemakerNotebookInstance#tags_all}.

---

##### `VolumeSize`<sup>Optional</sup> <a name="VolumeSize" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.volumeSize"></a>

```csharp
public double VolumeSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#volume_size SagemakerNotebookInstance#volume_size}.

---

### SagemakerNotebookInstanceInstanceMetadataServiceConfiguration <a name="SagemakerNotebookInstanceInstanceMetadataServiceConfiguration" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerNotebookInstanceInstanceMetadataServiceConfiguration {
    string MinimumInstanceMetadataServiceVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration.property.minimumInstanceMetadataServiceVersion">MinimumInstanceMetadataServiceVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#minimum_instance_metadata_service_version SagemakerNotebookInstance#minimum_instance_metadata_service_version}. |

---

##### `MinimumInstanceMetadataServiceVersion`<sup>Optional</sup> <a name="MinimumInstanceMetadataServiceVersion" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration.property.minimumInstanceMetadataServiceVersion"></a>

```csharp
public string MinimumInstanceMetadataServiceVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance#minimum_instance_metadata_service_version SagemakerNotebookInstance#minimum_instance_metadata_service_version}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference <a name="SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.resetMinimumInstanceMetadataServiceVersion">ResetMinimumInstanceMetadataServiceVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMinimumInstanceMetadataServiceVersion` <a name="ResetMinimumInstanceMetadataServiceVersion" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.resetMinimumInstanceMetadataServiceVersion"></a>

```csharp
private void ResetMinimumInstanceMetadataServiceVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.minimumInstanceMetadataServiceVersionInput">MinimumInstanceMetadataServiceVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.minimumInstanceMetadataServiceVersion">MinimumInstanceMetadataServiceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration">SagemakerNotebookInstanceInstanceMetadataServiceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MinimumInstanceMetadataServiceVersionInput`<sup>Optional</sup> <a name="MinimumInstanceMetadataServiceVersionInput" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.minimumInstanceMetadataServiceVersionInput"></a>

```csharp
public string MinimumInstanceMetadataServiceVersionInput { get; }
```

- *Type:* string

---

##### `MinimumInstanceMetadataServiceVersion`<sup>Required</sup> <a name="MinimumInstanceMetadataServiceVersion" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.minimumInstanceMetadataServiceVersion"></a>

```csharp
public string MinimumInstanceMetadataServiceVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.internalValue"></a>

```csharp
public SagemakerNotebookInstanceInstanceMetadataServiceConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration">SagemakerNotebookInstanceInstanceMetadataServiceConfiguration</a>

---



