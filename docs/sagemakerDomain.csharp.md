# `sagemakerDomain` Submodule <a name="`sagemakerDomain` Submodule" id="@cdktf/provider-aws.sagemakerDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerDomain <a name="SagemakerDomain" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain aws_sagemaker_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomain(Construct Scope, string Id, SagemakerDomainConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig">SagemakerDomainConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig">SagemakerDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.putDefaultSpaceSettings">PutDefaultSpaceSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.putDefaultUserSettings">PutDefaultUserSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.putDomainSettings">PutDomainSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.putRetentionPolicy">PutRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.resetAppNetworkAccessType">ResetAppNetworkAccessType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.resetAppSecurityGroupManagement">ResetAppSecurityGroupManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.resetDefaultSpaceSettings">ResetDefaultSpaceSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.resetDomainSettings">ResetDomainSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.resetRetentionPolicy">ResetRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutDefaultSpaceSettings` <a name="PutDefaultSpaceSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.putDefaultSpaceSettings"></a>

```csharp
private void PutDefaultSpaceSettings(SagemakerDomainDefaultSpaceSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.putDefaultSpaceSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettings">SagemakerDomainDefaultSpaceSettings</a>

---

##### `PutDefaultUserSettings` <a name="PutDefaultUserSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.putDefaultUserSettings"></a>

```csharp
private void PutDefaultUserSettings(SagemakerDomainDefaultUserSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.putDefaultUserSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings">SagemakerDomainDefaultUserSettings</a>

---

##### `PutDomainSettings` <a name="PutDomainSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.putDomainSettings"></a>

```csharp
private void PutDomainSettings(SagemakerDomainDomainSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.putDomainSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettings">SagemakerDomainDomainSettings</a>

---

##### `PutRetentionPolicy` <a name="PutRetentionPolicy" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.putRetentionPolicy"></a>

```csharp
private void PutRetentionPolicy(SagemakerDomainRetentionPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.putRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicy">SagemakerDomainRetentionPolicy</a>

---

##### `ResetAppNetworkAccessType` <a name="ResetAppNetworkAccessType" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.resetAppNetworkAccessType"></a>

```csharp
private void ResetAppNetworkAccessType()
```

##### `ResetAppSecurityGroupManagement` <a name="ResetAppSecurityGroupManagement" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.resetAppSecurityGroupManagement"></a>

```csharp
private void ResetAppSecurityGroupManagement()
```

##### `ResetDefaultSpaceSettings` <a name="ResetDefaultSpaceSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.resetDefaultSpaceSettings"></a>

```csharp
private void ResetDefaultSpaceSettings()
```

##### `ResetDomainSettings` <a name="ResetDomainSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.resetDomainSettings"></a>

```csharp
private void ResetDomainSettings()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetRetentionPolicy` <a name="ResetRetentionPolicy" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.resetRetentionPolicy"></a>

```csharp
private void ResetRetentionPolicy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SagemakerDomain.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SagemakerDomain.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SagemakerDomain.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.defaultSpaceSettings">DefaultSpaceSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference">SagemakerDomainDefaultSpaceSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.defaultUserSettings">DefaultUserSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference">SagemakerDomainDefaultUserSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.domainSettings">DomainSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference">SagemakerDomainDomainSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.homeEfsFileSystemId">HomeEfsFileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.retentionPolicy">RetentionPolicy</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference">SagemakerDomainRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.securityGroupIdForDomainBoundary">SecurityGroupIdForDomainBoundary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.singleSignOnManagedApplicationInstanceId">SingleSignOnManagedApplicationInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.appNetworkAccessTypeInput">AppNetworkAccessTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.appSecurityGroupManagementInput">AppSecurityGroupManagementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.authModeInput">AuthModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.defaultSpaceSettingsInput">DefaultSpaceSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettings">SagemakerDomainDefaultSpaceSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.defaultUserSettingsInput">DefaultUserSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings">SagemakerDomainDefaultUserSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.domainSettingsInput">DomainSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettings">SagemakerDomainDomainSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.retentionPolicyInput">RetentionPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicy">SagemakerDomainRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.appNetworkAccessType">AppNetworkAccessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.appSecurityGroupManagement">AppSecurityGroupManagement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.authMode">AuthMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DefaultSpaceSettings`<sup>Required</sup> <a name="DefaultSpaceSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.defaultSpaceSettings"></a>

```csharp
public SagemakerDomainDefaultSpaceSettingsOutputReference DefaultSpaceSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference">SagemakerDomainDefaultSpaceSettingsOutputReference</a>

---

##### `DefaultUserSettings`<sup>Required</sup> <a name="DefaultUserSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.defaultUserSettings"></a>

```csharp
public SagemakerDomainDefaultUserSettingsOutputReference DefaultUserSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference">SagemakerDomainDefaultUserSettingsOutputReference</a>

---

##### `DomainSettings`<sup>Required</sup> <a name="DomainSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.domainSettings"></a>

```csharp
public SagemakerDomainDomainSettingsOutputReference DomainSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference">SagemakerDomainDomainSettingsOutputReference</a>

---

##### `HomeEfsFileSystemId`<sup>Required</sup> <a name="HomeEfsFileSystemId" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.homeEfsFileSystemId"></a>

```csharp
public string HomeEfsFileSystemId { get; }
```

- *Type:* string

---

##### `RetentionPolicy`<sup>Required</sup> <a name="RetentionPolicy" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.retentionPolicy"></a>

```csharp
public SagemakerDomainRetentionPolicyOutputReference RetentionPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference">SagemakerDomainRetentionPolicyOutputReference</a>

---

##### `SecurityGroupIdForDomainBoundary`<sup>Required</sup> <a name="SecurityGroupIdForDomainBoundary" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.securityGroupIdForDomainBoundary"></a>

```csharp
public string SecurityGroupIdForDomainBoundary { get; }
```

- *Type:* string

---

##### `SingleSignOnManagedApplicationInstanceId`<sup>Required</sup> <a name="SingleSignOnManagedApplicationInstanceId" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.singleSignOnManagedApplicationInstanceId"></a>

```csharp
public string SingleSignOnManagedApplicationInstanceId { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `AppNetworkAccessTypeInput`<sup>Optional</sup> <a name="AppNetworkAccessTypeInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.appNetworkAccessTypeInput"></a>

```csharp
public string AppNetworkAccessTypeInput { get; }
```

- *Type:* string

---

##### `AppSecurityGroupManagementInput`<sup>Optional</sup> <a name="AppSecurityGroupManagementInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.appSecurityGroupManagementInput"></a>

```csharp
public string AppSecurityGroupManagementInput { get; }
```

- *Type:* string

---

##### `AuthModeInput`<sup>Optional</sup> <a name="AuthModeInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.authModeInput"></a>

```csharp
public string AuthModeInput { get; }
```

- *Type:* string

---

##### `DefaultSpaceSettingsInput`<sup>Optional</sup> <a name="DefaultSpaceSettingsInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.defaultSpaceSettingsInput"></a>

```csharp
public SagemakerDomainDefaultSpaceSettings DefaultSpaceSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettings">SagemakerDomainDefaultSpaceSettings</a>

---

##### `DefaultUserSettingsInput`<sup>Optional</sup> <a name="DefaultUserSettingsInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.defaultUserSettingsInput"></a>

```csharp
public SagemakerDomainDefaultUserSettings DefaultUserSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings">SagemakerDomainDefaultUserSettings</a>

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `DomainSettingsInput`<sup>Optional</sup> <a name="DomainSettingsInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.domainSettingsInput"></a>

```csharp
public SagemakerDomainDomainSettings DomainSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettings">SagemakerDomainDomainSettings</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `RetentionPolicyInput`<sup>Optional</sup> <a name="RetentionPolicyInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.retentionPolicyInput"></a>

```csharp
public SagemakerDomainRetentionPolicy RetentionPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicy">SagemakerDomainRetentionPolicy</a>

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `AppNetworkAccessType`<sup>Required</sup> <a name="AppNetworkAccessType" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.appNetworkAccessType"></a>

```csharp
public string AppNetworkAccessType { get; }
```

- *Type:* string

---

##### `AppSecurityGroupManagement`<sup>Required</sup> <a name="AppSecurityGroupManagement" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.appSecurityGroupManagement"></a>

```csharp
public string AppSecurityGroupManagement { get; }
```

- *Type:* string

---

##### `AuthMode`<sup>Required</sup> <a name="AuthMode" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.authMode"></a>

```csharp
public string AuthMode { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomain.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerDomainConfig <a name="SagemakerDomainConfig" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AuthMode,
    SagemakerDomainDefaultUserSettings DefaultUserSettings,
    string DomainName,
    string[] SubnetIds,
    string VpcId,
    string AppNetworkAccessType = null,
    string AppSecurityGroupManagement = null,
    SagemakerDomainDefaultSpaceSettings DefaultSpaceSettings = null,
    SagemakerDomainDomainSettings DomainSettings = null,
    string Id = null,
    string KmsKeyId = null,
    SagemakerDomainRetentionPolicy RetentionPolicy = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.authMode">AuthMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#auth_mode SagemakerDomain#auth_mode}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.defaultUserSettings">DefaultUserSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings">SagemakerDomainDefaultUserSettings</a></code> | default_user_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.domainName">DomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#domain_name SagemakerDomain#domain_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#subnet_ids SagemakerDomain#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#vpc_id SagemakerDomain#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.appNetworkAccessType">AppNetworkAccessType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#app_network_access_type SagemakerDomain#app_network_access_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.appSecurityGroupManagement">AppSecurityGroupManagement</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#app_security_group_management SagemakerDomain#app_security_group_management}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.defaultSpaceSettings">DefaultSpaceSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettings">SagemakerDomainDefaultSpaceSettings</a></code> | default_space_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.domainSettings">DomainSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettings">SagemakerDomainDomainSettings</a></code> | domain_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#id SagemakerDomain#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#kms_key_id SagemakerDomain#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.retentionPolicy">RetentionPolicy</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicy">SagemakerDomainRetentionPolicy</a></code> | retention_policy block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#tags SagemakerDomain#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#tags_all SagemakerDomain#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AuthMode`<sup>Required</sup> <a name="AuthMode" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.authMode"></a>

```csharp
public string AuthMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#auth_mode SagemakerDomain#auth_mode}.

---

##### `DefaultUserSettings`<sup>Required</sup> <a name="DefaultUserSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.defaultUserSettings"></a>

```csharp
public SagemakerDomainDefaultUserSettings DefaultUserSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings">SagemakerDomainDefaultUserSettings</a>

default_user_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#default_user_settings SagemakerDomain#default_user_settings}

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#domain_name SagemakerDomain#domain_name}.

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#subnet_ids SagemakerDomain#subnet_ids}.

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#vpc_id SagemakerDomain#vpc_id}.

---

##### `AppNetworkAccessType`<sup>Optional</sup> <a name="AppNetworkAccessType" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.appNetworkAccessType"></a>

```csharp
public string AppNetworkAccessType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#app_network_access_type SagemakerDomain#app_network_access_type}.

---

##### `AppSecurityGroupManagement`<sup>Optional</sup> <a name="AppSecurityGroupManagement" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.appSecurityGroupManagement"></a>

```csharp
public string AppSecurityGroupManagement { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#app_security_group_management SagemakerDomain#app_security_group_management}.

---

##### `DefaultSpaceSettings`<sup>Optional</sup> <a name="DefaultSpaceSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.defaultSpaceSettings"></a>

```csharp
public SagemakerDomainDefaultSpaceSettings DefaultSpaceSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettings">SagemakerDomainDefaultSpaceSettings</a>

default_space_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#default_space_settings SagemakerDomain#default_space_settings}

---

##### `DomainSettings`<sup>Optional</sup> <a name="DomainSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.domainSettings"></a>

```csharp
public SagemakerDomainDomainSettings DomainSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettings">SagemakerDomainDomainSettings</a>

domain_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#domain_settings SagemakerDomain#domain_settings}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#id SagemakerDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#kms_key_id SagemakerDomain#kms_key_id}.

---

##### `RetentionPolicy`<sup>Optional</sup> <a name="RetentionPolicy" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.retentionPolicy"></a>

```csharp
public SagemakerDomainRetentionPolicy RetentionPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicy">SagemakerDomainRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#retention_policy SagemakerDomain#retention_policy}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#tags SagemakerDomain#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#tags_all SagemakerDomain#tags_all}.

---

### SagemakerDomainDefaultSpaceSettings <a name="SagemakerDomainDefaultSpaceSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDefaultSpaceSettings {
    string ExecutionRole,
    SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings JupyterServerAppSettings = null,
    SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings KernelGatewayAppSettings = null,
    string[] SecurityGroups = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettings.property.executionRole">ExecutionRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#execution_role SagemakerDomain#execution_role}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettings.property.jupyterServerAppSettings">JupyterServerAppSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings">SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings</a></code> | jupyter_server_app_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettings.property.kernelGatewayAppSettings">KernelGatewayAppSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings">SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings</a></code> | kernel_gateway_app_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettings.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#security_groups SagemakerDomain#security_groups}. |

---

##### `ExecutionRole`<sup>Required</sup> <a name="ExecutionRole" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettings.property.executionRole"></a>

```csharp
public string ExecutionRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#execution_role SagemakerDomain#execution_role}.

---

##### `JupyterServerAppSettings`<sup>Optional</sup> <a name="JupyterServerAppSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettings.property.jupyterServerAppSettings"></a>

```csharp
public SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings JupyterServerAppSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings">SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings</a>

jupyter_server_app_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#jupyter_server_app_settings SagemakerDomain#jupyter_server_app_settings}

---

##### `KernelGatewayAppSettings`<sup>Optional</sup> <a name="KernelGatewayAppSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettings.property.kernelGatewayAppSettings"></a>

```csharp
public SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings KernelGatewayAppSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings">SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings</a>

kernel_gateway_app_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#kernel_gateway_app_settings SagemakerDomain#kernel_gateway_app_settings}

---

##### `SecurityGroups`<sup>Optional</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettings.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#security_groups SagemakerDomain#security_groups}.

---

### SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings <a name="SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings {
    object CodeRepository = null,
    SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec DefaultResourceSpec = null,
    string[] LifecycleConfigArns = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings.property.codeRepository">CodeRepository</a></code> | <code>object</code> | code_repository block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings.property.defaultResourceSpec">DefaultResourceSpec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec</a></code> | default_resource_spec block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings.property.lifecycleConfigArns">LifecycleConfigArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arns SagemakerDomain#lifecycle_config_arns}. |

---

##### `CodeRepository`<sup>Optional</sup> <a name="CodeRepository" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings.property.codeRepository"></a>

```csharp
public object CodeRepository { get; set; }
```

- *Type:* object

code_repository block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#code_repository SagemakerDomain#code_repository}

---

##### `DefaultResourceSpec`<sup>Optional</sup> <a name="DefaultResourceSpec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings.property.defaultResourceSpec"></a>

```csharp
public SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec DefaultResourceSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

default_resource_spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}

---

##### `LifecycleConfigArns`<sup>Optional</sup> <a name="LifecycleConfigArns" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings.property.lifecycleConfigArns"></a>

```csharp
public string[] LifecycleConfigArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arns SagemakerDomain#lifecycle_config_arns}.

---

### SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository <a name="SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository {
    string RepositoryUrl
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository.property.repositoryUrl">RepositoryUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#repository_url SagemakerDomain#repository_url}. |

---

##### `RepositoryUrl`<sup>Required</sup> <a name="RepositoryUrl" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository.property.repositoryUrl"></a>

```csharp
public string RepositoryUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#repository_url SagemakerDomain#repository_url}.

---

### SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec <a name="SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec {
    string InstanceType = null,
    string LifecycleConfigArn = null,
    string SagemakerImageArn = null,
    string SagemakerImageVersionArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.instanceType">InstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#instance_type SagemakerDomain#instance_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.lifecycleConfigArn">LifecycleConfigArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sagemakerImageArn">SagemakerImageArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn">SagemakerImageVersionArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}. |

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#instance_type SagemakerDomain#instance_type}.

---

##### `LifecycleConfigArn`<sup>Optional</sup> <a name="LifecycleConfigArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.lifecycleConfigArn"></a>

```csharp
public string LifecycleConfigArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}.

---

##### `SagemakerImageArn`<sup>Optional</sup> <a name="SagemakerImageArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sagemakerImageArn"></a>

```csharp
public string SagemakerImageArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}.

---

##### `SagemakerImageVersionArn`<sup>Optional</sup> <a name="SagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn"></a>

```csharp
public string SagemakerImageVersionArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}.

---

### SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings <a name="SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings {
    object CustomImage = null,
    SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec DefaultResourceSpec = null,
    string[] LifecycleConfigArns = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings.property.customImage">CustomImage</a></code> | <code>object</code> | custom_image block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings.property.defaultResourceSpec">DefaultResourceSpec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec</a></code> | default_resource_spec block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings.property.lifecycleConfigArns">LifecycleConfigArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arns SagemakerDomain#lifecycle_config_arns}. |

---

##### `CustomImage`<sup>Optional</sup> <a name="CustomImage" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings.property.customImage"></a>

```csharp
public object CustomImage { get; set; }
```

- *Type:* object

custom_image block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#custom_image SagemakerDomain#custom_image}

---

##### `DefaultResourceSpec`<sup>Optional</sup> <a name="DefaultResourceSpec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings.property.defaultResourceSpec"></a>

```csharp
public SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec DefaultResourceSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

default_resource_spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}

---

##### `LifecycleConfigArns`<sup>Optional</sup> <a name="LifecycleConfigArns" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings.property.lifecycleConfigArns"></a>

```csharp
public string[] LifecycleConfigArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arns SagemakerDomain#lifecycle_config_arns}.

---

### SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage <a name="SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage {
    string AppImageConfigName,
    string ImageName,
    double ImageVersionNumber = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage.property.appImageConfigName">AppImageConfigName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#app_image_config_name SagemakerDomain#app_image_config_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage.property.imageName">ImageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#image_name SagemakerDomain#image_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage.property.imageVersionNumber">ImageVersionNumber</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#image_version_number SagemakerDomain#image_version_number}. |

---

##### `AppImageConfigName`<sup>Required</sup> <a name="AppImageConfigName" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage.property.appImageConfigName"></a>

```csharp
public string AppImageConfigName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#app_image_config_name SagemakerDomain#app_image_config_name}.

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage.property.imageName"></a>

```csharp
public string ImageName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#image_name SagemakerDomain#image_name}.

---

##### `ImageVersionNumber`<sup>Optional</sup> <a name="ImageVersionNumber" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage.property.imageVersionNumber"></a>

```csharp
public double ImageVersionNumber { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#image_version_number SagemakerDomain#image_version_number}.

---

### SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec <a name="SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec {
    string InstanceType = null,
    string LifecycleConfigArn = null,
    string SagemakerImageArn = null,
    string SagemakerImageVersionArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.instanceType">InstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#instance_type SagemakerDomain#instance_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.lifecycleConfigArn">LifecycleConfigArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sagemakerImageArn">SagemakerImageArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn">SagemakerImageVersionArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}. |

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#instance_type SagemakerDomain#instance_type}.

---

##### `LifecycleConfigArn`<sup>Optional</sup> <a name="LifecycleConfigArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.lifecycleConfigArn"></a>

```csharp
public string LifecycleConfigArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}.

---

##### `SagemakerImageArn`<sup>Optional</sup> <a name="SagemakerImageArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sagemakerImageArn"></a>

```csharp
public string SagemakerImageArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}.

---

##### `SagemakerImageVersionArn`<sup>Optional</sup> <a name="SagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn"></a>

```csharp
public string SagemakerImageVersionArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}.

---

### SagemakerDomainDefaultUserSettings <a name="SagemakerDomainDefaultUserSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDefaultUserSettings {
    string ExecutionRole,
    SagemakerDomainDefaultUserSettingsCanvasAppSettings CanvasAppSettings = null,
    SagemakerDomainDefaultUserSettingsJupyterServerAppSettings JupyterServerAppSettings = null,
    SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings KernelGatewayAppSettings = null,
    SagemakerDomainDefaultUserSettingsRSessionAppSettings RSessionAppSettings = null,
    string[] SecurityGroups = null,
    SagemakerDomainDefaultUserSettingsSharingSettings SharingSettings = null,
    SagemakerDomainDefaultUserSettingsTensorBoardAppSettings TensorBoardAppSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings.property.executionRole">ExecutionRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#execution_role SagemakerDomain#execution_role}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings.property.canvasAppSettings">CanvasAppSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettings">SagemakerDomainDefaultUserSettingsCanvasAppSettings</a></code> | canvas_app_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings.property.jupyterServerAppSettings">JupyterServerAppSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettings">SagemakerDomainDefaultUserSettingsJupyterServerAppSettings</a></code> | jupyter_server_app_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings.property.kernelGatewayAppSettings">KernelGatewayAppSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings">SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings</a></code> | kernel_gateway_app_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings.property.rSessionAppSettings">RSessionAppSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettings">SagemakerDomainDefaultUserSettingsRSessionAppSettings</a></code> | r_session_app_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#security_groups SagemakerDomain#security_groups}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings.property.sharingSettings">SharingSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettings">SagemakerDomainDefaultUserSettingsSharingSettings</a></code> | sharing_settings block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings.property.tensorBoardAppSettings">TensorBoardAppSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettings">SagemakerDomainDefaultUserSettingsTensorBoardAppSettings</a></code> | tensor_board_app_settings block. |

---

##### `ExecutionRole`<sup>Required</sup> <a name="ExecutionRole" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings.property.executionRole"></a>

```csharp
public string ExecutionRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#execution_role SagemakerDomain#execution_role}.

---

##### `CanvasAppSettings`<sup>Optional</sup> <a name="CanvasAppSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings.property.canvasAppSettings"></a>

```csharp
public SagemakerDomainDefaultUserSettingsCanvasAppSettings CanvasAppSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettings">SagemakerDomainDefaultUserSettingsCanvasAppSettings</a>

canvas_app_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#canvas_app_settings SagemakerDomain#canvas_app_settings}

---

##### `JupyterServerAppSettings`<sup>Optional</sup> <a name="JupyterServerAppSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings.property.jupyterServerAppSettings"></a>

```csharp
public SagemakerDomainDefaultUserSettingsJupyterServerAppSettings JupyterServerAppSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettings">SagemakerDomainDefaultUserSettingsJupyterServerAppSettings</a>

jupyter_server_app_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#jupyter_server_app_settings SagemakerDomain#jupyter_server_app_settings}

---

##### `KernelGatewayAppSettings`<sup>Optional</sup> <a name="KernelGatewayAppSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings.property.kernelGatewayAppSettings"></a>

```csharp
public SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings KernelGatewayAppSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings">SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings</a>

kernel_gateway_app_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#kernel_gateway_app_settings SagemakerDomain#kernel_gateway_app_settings}

---

##### `RSessionAppSettings`<sup>Optional</sup> <a name="RSessionAppSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings.property.rSessionAppSettings"></a>

```csharp
public SagemakerDomainDefaultUserSettingsRSessionAppSettings RSessionAppSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettings">SagemakerDomainDefaultUserSettingsRSessionAppSettings</a>

r_session_app_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#r_session_app_settings SagemakerDomain#r_session_app_settings}

---

##### `SecurityGroups`<sup>Optional</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#security_groups SagemakerDomain#security_groups}.

---

##### `SharingSettings`<sup>Optional</sup> <a name="SharingSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings.property.sharingSettings"></a>

```csharp
public SagemakerDomainDefaultUserSettingsSharingSettings SharingSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettings">SagemakerDomainDefaultUserSettingsSharingSettings</a>

sharing_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sharing_settings SagemakerDomain#sharing_settings}

---

##### `TensorBoardAppSettings`<sup>Optional</sup> <a name="TensorBoardAppSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings.property.tensorBoardAppSettings"></a>

```csharp
public SagemakerDomainDefaultUserSettingsTensorBoardAppSettings TensorBoardAppSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettings">SagemakerDomainDefaultUserSettingsTensorBoardAppSettings</a>

tensor_board_app_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#tensor_board_app_settings SagemakerDomain#tensor_board_app_settings}

---

### SagemakerDomainDefaultUserSettingsCanvasAppSettings <a name="SagemakerDomainDefaultUserSettingsCanvasAppSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDefaultUserSettingsCanvasAppSettings {
    SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings TimeSeriesForecastingSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettings.property.timeSeriesForecastingSettings">TimeSeriesForecastingSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings">SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings</a></code> | time_series_forecasting_settings block. |

---

##### `TimeSeriesForecastingSettings`<sup>Optional</sup> <a name="TimeSeriesForecastingSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettings.property.timeSeriesForecastingSettings"></a>

```csharp
public SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings TimeSeriesForecastingSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings">SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings</a>

time_series_forecasting_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#time_series_forecasting_settings SagemakerDomain#time_series_forecasting_settings}

---

### SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings <a name="SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings {
    string AmazonForecastRoleArn = null,
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings.property.amazonForecastRoleArn">AmazonForecastRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#amazon_forecast_role_arn SagemakerDomain#amazon_forecast_role_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#status SagemakerDomain#status}. |

---

##### `AmazonForecastRoleArn`<sup>Optional</sup> <a name="AmazonForecastRoleArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings.property.amazonForecastRoleArn"></a>

```csharp
public string AmazonForecastRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#amazon_forecast_role_arn SagemakerDomain#amazon_forecast_role_arn}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#status SagemakerDomain#status}.

---

### SagemakerDomainDefaultUserSettingsJupyterServerAppSettings <a name="SagemakerDomainDefaultUserSettingsJupyterServerAppSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDefaultUserSettingsJupyterServerAppSettings {
    object CodeRepository = null,
    SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec DefaultResourceSpec = null,
    string[] LifecycleConfigArns = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettings.property.codeRepository">CodeRepository</a></code> | <code>object</code> | code_repository block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettings.property.defaultResourceSpec">DefaultResourceSpec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec</a></code> | default_resource_spec block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettings.property.lifecycleConfigArns">LifecycleConfigArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arns SagemakerDomain#lifecycle_config_arns}. |

---

##### `CodeRepository`<sup>Optional</sup> <a name="CodeRepository" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettings.property.codeRepository"></a>

```csharp
public object CodeRepository { get; set; }
```

- *Type:* object

code_repository block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#code_repository SagemakerDomain#code_repository}

---

##### `DefaultResourceSpec`<sup>Optional</sup> <a name="DefaultResourceSpec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettings.property.defaultResourceSpec"></a>

```csharp
public SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec DefaultResourceSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

default_resource_spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}

---

##### `LifecycleConfigArns`<sup>Optional</sup> <a name="LifecycleConfigArns" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettings.property.lifecycleConfigArns"></a>

```csharp
public string[] LifecycleConfigArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arns SagemakerDomain#lifecycle_config_arns}.

---

### SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository <a name="SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository {
    string RepositoryUrl
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository.property.repositoryUrl">RepositoryUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#repository_url SagemakerDomain#repository_url}. |

---

##### `RepositoryUrl`<sup>Required</sup> <a name="RepositoryUrl" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository.property.repositoryUrl"></a>

```csharp
public string RepositoryUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#repository_url SagemakerDomain#repository_url}.

---

### SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec <a name="SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec {
    string InstanceType = null,
    string LifecycleConfigArn = null,
    string SagemakerImageArn = null,
    string SagemakerImageVersionArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.instanceType">InstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#instance_type SagemakerDomain#instance_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.lifecycleConfigArn">LifecycleConfigArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sagemakerImageArn">SagemakerImageArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn">SagemakerImageVersionArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}. |

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#instance_type SagemakerDomain#instance_type}.

---

##### `LifecycleConfigArn`<sup>Optional</sup> <a name="LifecycleConfigArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.lifecycleConfigArn"></a>

```csharp
public string LifecycleConfigArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}.

---

##### `SagemakerImageArn`<sup>Optional</sup> <a name="SagemakerImageArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sagemakerImageArn"></a>

```csharp
public string SagemakerImageArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}.

---

##### `SagemakerImageVersionArn`<sup>Optional</sup> <a name="SagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn"></a>

```csharp
public string SagemakerImageVersionArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}.

---

### SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings <a name="SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings {
    object CustomImage = null,
    SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec DefaultResourceSpec = null,
    string[] LifecycleConfigArns = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings.property.customImage">CustomImage</a></code> | <code>object</code> | custom_image block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings.property.defaultResourceSpec">DefaultResourceSpec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec</a></code> | default_resource_spec block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings.property.lifecycleConfigArns">LifecycleConfigArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arns SagemakerDomain#lifecycle_config_arns}. |

---

##### `CustomImage`<sup>Optional</sup> <a name="CustomImage" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings.property.customImage"></a>

```csharp
public object CustomImage { get; set; }
```

- *Type:* object

custom_image block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#custom_image SagemakerDomain#custom_image}

---

##### `DefaultResourceSpec`<sup>Optional</sup> <a name="DefaultResourceSpec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings.property.defaultResourceSpec"></a>

```csharp
public SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec DefaultResourceSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

default_resource_spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}

---

##### `LifecycleConfigArns`<sup>Optional</sup> <a name="LifecycleConfigArns" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings.property.lifecycleConfigArns"></a>

```csharp
public string[] LifecycleConfigArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arns SagemakerDomain#lifecycle_config_arns}.

---

### SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage <a name="SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage {
    string AppImageConfigName,
    string ImageName,
    double ImageVersionNumber = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage.property.appImageConfigName">AppImageConfigName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#app_image_config_name SagemakerDomain#app_image_config_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage.property.imageName">ImageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#image_name SagemakerDomain#image_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage.property.imageVersionNumber">ImageVersionNumber</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#image_version_number SagemakerDomain#image_version_number}. |

---

##### `AppImageConfigName`<sup>Required</sup> <a name="AppImageConfigName" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage.property.appImageConfigName"></a>

```csharp
public string AppImageConfigName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#app_image_config_name SagemakerDomain#app_image_config_name}.

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage.property.imageName"></a>

```csharp
public string ImageName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#image_name SagemakerDomain#image_name}.

---

##### `ImageVersionNumber`<sup>Optional</sup> <a name="ImageVersionNumber" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage.property.imageVersionNumber"></a>

```csharp
public double ImageVersionNumber { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#image_version_number SagemakerDomain#image_version_number}.

---

### SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec <a name="SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec {
    string InstanceType = null,
    string LifecycleConfigArn = null,
    string SagemakerImageArn = null,
    string SagemakerImageVersionArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.instanceType">InstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#instance_type SagemakerDomain#instance_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.lifecycleConfigArn">LifecycleConfigArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sagemakerImageArn">SagemakerImageArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn">SagemakerImageVersionArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}. |

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#instance_type SagemakerDomain#instance_type}.

---

##### `LifecycleConfigArn`<sup>Optional</sup> <a name="LifecycleConfigArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.lifecycleConfigArn"></a>

```csharp
public string LifecycleConfigArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}.

---

##### `SagemakerImageArn`<sup>Optional</sup> <a name="SagemakerImageArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sagemakerImageArn"></a>

```csharp
public string SagemakerImageArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}.

---

##### `SagemakerImageVersionArn`<sup>Optional</sup> <a name="SagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn"></a>

```csharp
public string SagemakerImageVersionArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}.

---

### SagemakerDomainDefaultUserSettingsRSessionAppSettings <a name="SagemakerDomainDefaultUserSettingsRSessionAppSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDefaultUserSettingsRSessionAppSettings {
    object CustomImage = null,
    SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec DefaultResourceSpec = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettings.property.customImage">CustomImage</a></code> | <code>object</code> | custom_image block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettings.property.defaultResourceSpec">DefaultResourceSpec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec</a></code> | default_resource_spec block. |

---

##### `CustomImage`<sup>Optional</sup> <a name="CustomImage" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettings.property.customImage"></a>

```csharp
public object CustomImage { get; set; }
```

- *Type:* object

custom_image block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#custom_image SagemakerDomain#custom_image}

---

##### `DefaultResourceSpec`<sup>Optional</sup> <a name="DefaultResourceSpec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettings.property.defaultResourceSpec"></a>

```csharp
public SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec DefaultResourceSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec</a>

default_resource_spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}

---

### SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage <a name="SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage {
    string AppImageConfigName,
    string ImageName,
    double ImageVersionNumber = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage.property.appImageConfigName">AppImageConfigName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#app_image_config_name SagemakerDomain#app_image_config_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage.property.imageName">ImageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#image_name SagemakerDomain#image_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage.property.imageVersionNumber">ImageVersionNumber</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#image_version_number SagemakerDomain#image_version_number}. |

---

##### `AppImageConfigName`<sup>Required</sup> <a name="AppImageConfigName" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage.property.appImageConfigName"></a>

```csharp
public string AppImageConfigName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#app_image_config_name SagemakerDomain#app_image_config_name}.

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage.property.imageName"></a>

```csharp
public string ImageName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#image_name SagemakerDomain#image_name}.

---

##### `ImageVersionNumber`<sup>Optional</sup> <a name="ImageVersionNumber" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage.property.imageVersionNumber"></a>

```csharp
public double ImageVersionNumber { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#image_version_number SagemakerDomain#image_version_number}.

---

### SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec <a name="SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec {
    string InstanceType = null,
    string LifecycleConfigArn = null,
    string SagemakerImageArn = null,
    string SagemakerImageVersionArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec.property.instanceType">InstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#instance_type SagemakerDomain#instance_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec.property.lifecycleConfigArn">LifecycleConfigArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec.property.sagemakerImageArn">SagemakerImageArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn">SagemakerImageVersionArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}. |

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#instance_type SagemakerDomain#instance_type}.

---

##### `LifecycleConfigArn`<sup>Optional</sup> <a name="LifecycleConfigArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec.property.lifecycleConfigArn"></a>

```csharp
public string LifecycleConfigArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}.

---

##### `SagemakerImageArn`<sup>Optional</sup> <a name="SagemakerImageArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec.property.sagemakerImageArn"></a>

```csharp
public string SagemakerImageArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}.

---

##### `SagemakerImageVersionArn`<sup>Optional</sup> <a name="SagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn"></a>

```csharp
public string SagemakerImageVersionArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}.

---

### SagemakerDomainDefaultUserSettingsSharingSettings <a name="SagemakerDomainDefaultUserSettingsSharingSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDefaultUserSettingsSharingSettings {
    string NotebookOutputOption = null,
    string S3KmsKeyId = null,
    string S3OutputPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettings.property.notebookOutputOption">NotebookOutputOption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#notebook_output_option SagemakerDomain#notebook_output_option}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettings.property.s3KmsKeyId">S3KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#s3_kms_key_id SagemakerDomain#s3_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettings.property.s3OutputPath">S3OutputPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#s3_output_path SagemakerDomain#s3_output_path}. |

---

##### `NotebookOutputOption`<sup>Optional</sup> <a name="NotebookOutputOption" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettings.property.notebookOutputOption"></a>

```csharp
public string NotebookOutputOption { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#notebook_output_option SagemakerDomain#notebook_output_option}.

---

##### `S3KmsKeyId`<sup>Optional</sup> <a name="S3KmsKeyId" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettings.property.s3KmsKeyId"></a>

```csharp
public string S3KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#s3_kms_key_id SagemakerDomain#s3_kms_key_id}.

---

##### `S3OutputPath`<sup>Optional</sup> <a name="S3OutputPath" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettings.property.s3OutputPath"></a>

```csharp
public string S3OutputPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#s3_output_path SagemakerDomain#s3_output_path}.

---

### SagemakerDomainDefaultUserSettingsTensorBoardAppSettings <a name="SagemakerDomainDefaultUserSettingsTensorBoardAppSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDefaultUserSettingsTensorBoardAppSettings {
    SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec DefaultResourceSpec = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettings.property.defaultResourceSpec">DefaultResourceSpec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec</a></code> | default_resource_spec block. |

---

##### `DefaultResourceSpec`<sup>Optional</sup> <a name="DefaultResourceSpec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettings.property.defaultResourceSpec"></a>

```csharp
public SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec DefaultResourceSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec</a>

default_resource_spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}

---

### SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec <a name="SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec {
    string InstanceType = null,
    string LifecycleConfigArn = null,
    string SagemakerImageArn = null,
    string SagemakerImageVersionArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec.property.instanceType">InstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#instance_type SagemakerDomain#instance_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec.property.lifecycleConfigArn">LifecycleConfigArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec.property.sagemakerImageArn">SagemakerImageArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn">SagemakerImageVersionArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}. |

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#instance_type SagemakerDomain#instance_type}.

---

##### `LifecycleConfigArn`<sup>Optional</sup> <a name="LifecycleConfigArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec.property.lifecycleConfigArn"></a>

```csharp
public string LifecycleConfigArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}.

---

##### `SagemakerImageArn`<sup>Optional</sup> <a name="SagemakerImageArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec.property.sagemakerImageArn"></a>

```csharp
public string SagemakerImageArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}.

---

##### `SagemakerImageVersionArn`<sup>Optional</sup> <a name="SagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec.property.sagemakerImageVersionArn"></a>

```csharp
public string SagemakerImageVersionArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}.

---

### SagemakerDomainDomainSettings <a name="SagemakerDomainDomainSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDomainSettings {
    string ExecutionRoleIdentityConfig = null,
    string[] SecurityGroupIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettings.property.executionRoleIdentityConfig">ExecutionRoleIdentityConfig</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#execution_role_identity_config SagemakerDomain#execution_role_identity_config}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettings.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#security_group_ids SagemakerDomain#security_group_ids}. |

---

##### `ExecutionRoleIdentityConfig`<sup>Optional</sup> <a name="ExecutionRoleIdentityConfig" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettings.property.executionRoleIdentityConfig"></a>

```csharp
public string ExecutionRoleIdentityConfig { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#execution_role_identity_config SagemakerDomain#execution_role_identity_config}.

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettings.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#security_group_ids SagemakerDomain#security_group_ids}.

---

### SagemakerDomainRetentionPolicy <a name="SagemakerDomainRetentionPolicy" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainRetentionPolicy {
    string HomeEfsFileSystem = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicy.property.homeEfsFileSystem">HomeEfsFileSystem</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#home_efs_file_system SagemakerDomain#home_efs_file_system}. |

---

##### `HomeEfsFileSystem`<sup>Optional</sup> <a name="HomeEfsFileSystem" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicy.property.homeEfsFileSystem"></a>

```csharp
public string HomeEfsFileSystem { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain#home_efs_file_system SagemakerDomain#home_efs_file_system}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList <a name="SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.get"></a>

```csharp
private SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference <a name="SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.repositoryUrlInput">RepositoryUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.repositoryUrl">RepositoryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RepositoryUrlInput`<sup>Optional</sup> <a name="RepositoryUrlInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.repositoryUrlInput"></a>

```csharp
public string RepositoryUrlInput { get; }
```

- *Type:* string

---

##### `RepositoryUrl`<sup>Required</sup> <a name="RepositoryUrl" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.repositoryUrl"></a>

```csharp
public string RepositoryUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference <a name="SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn">ResetLifecycleConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn">ResetSagemakerImageArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn">ResetSagemakerImageVersionArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetInstanceType"></a>

```csharp
private void ResetInstanceType()
```

##### `ResetLifecycleConfigArn` <a name="ResetLifecycleConfigArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```csharp
private void ResetLifecycleConfigArn()
```

##### `ResetSagemakerImageArn` <a name="ResetSagemakerImageArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn"></a>

```csharp
private void ResetSagemakerImageArn()
```

##### `ResetSagemakerImageVersionArn` <a name="ResetSagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn"></a>

```csharp
private void ResetSagemakerImageVersionArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput">LifecycleConfigArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput">SagemakerImageArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput">SagemakerImageVersionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">LifecycleConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn">SagemakerImageArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn">SagemakerImageVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `LifecycleConfigArnInput`<sup>Optional</sup> <a name="LifecycleConfigArnInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```csharp
public string LifecycleConfigArnInput { get; }
```

- *Type:* string

---

##### `SagemakerImageArnInput`<sup>Optional</sup> <a name="SagemakerImageArnInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput"></a>

```csharp
public string SagemakerImageArnInput { get; }
```

- *Type:* string

---

##### `SagemakerImageVersionArnInput`<sup>Optional</sup> <a name="SagemakerImageVersionArnInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput"></a>

```csharp
public string SagemakerImageVersionArnInput { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `LifecycleConfigArn`<sup>Required</sup> <a name="LifecycleConfigArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```csharp
public string LifecycleConfigArn { get; }
```

- *Type:* string

---

##### `SagemakerImageArn`<sup>Required</sup> <a name="SagemakerImageArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn"></a>

```csharp
public string SagemakerImageArn { get; }
```

- *Type:* string

---

##### `SagemakerImageVersionArn`<sup>Required</sup> <a name="SagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn"></a>

```csharp
public string SagemakerImageVersionArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```csharp
public SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

---


### SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference <a name="SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.putCodeRepository">PutCodeRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.putDefaultResourceSpec">PutDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.resetCodeRepository">ResetCodeRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.resetDefaultResourceSpec">ResetDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.resetLifecycleConfigArns">ResetLifecycleConfigArns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCodeRepository` <a name="PutCodeRepository" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.putCodeRepository"></a>

```csharp
private void PutCodeRepository(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.putCodeRepository.parameter.value"></a>

- *Type:* object

---

##### `PutDefaultResourceSpec` <a name="PutDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.putDefaultResourceSpec"></a>

```csharp
private void PutDefaultResourceSpec(SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.putDefaultResourceSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

---

##### `ResetCodeRepository` <a name="ResetCodeRepository" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.resetCodeRepository"></a>

```csharp
private void ResetCodeRepository()
```

##### `ResetDefaultResourceSpec` <a name="ResetDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.resetDefaultResourceSpec"></a>

```csharp
private void ResetDefaultResourceSpec()
```

##### `ResetLifecycleConfigArns` <a name="ResetLifecycleConfigArns" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.resetLifecycleConfigArns"></a>

```csharp
private void ResetLifecycleConfigArns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.property.codeRepository">CodeRepository</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList">SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpec">DefaultResourceSpec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference">SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.property.codeRepositoryInput">CodeRepositoryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpecInput">DefaultResourceSpecInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArnsInput">LifecycleConfigArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArns">LifecycleConfigArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings">SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CodeRepository`<sup>Required</sup> <a name="CodeRepository" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.property.codeRepository"></a>

```csharp
public SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList CodeRepository { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList">SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList</a>

---

##### `DefaultResourceSpec`<sup>Required</sup> <a name="DefaultResourceSpec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpec"></a>

```csharp
public SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference DefaultResourceSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference">SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `CodeRepositoryInput`<sup>Optional</sup> <a name="CodeRepositoryInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.property.codeRepositoryInput"></a>

```csharp
public object CodeRepositoryInput { get; }
```

- *Type:* object

---

##### `DefaultResourceSpecInput`<sup>Optional</sup> <a name="DefaultResourceSpecInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpecInput"></a>

```csharp
public SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec DefaultResourceSpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

---

##### `LifecycleConfigArnsInput`<sup>Optional</sup> <a name="LifecycleConfigArnsInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArnsInput"></a>

```csharp
public string[] LifecycleConfigArnsInput { get; }
```

- *Type:* string[]

---

##### `LifecycleConfigArns`<sup>Required</sup> <a name="LifecycleConfigArns" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArns"></a>

```csharp
public string[] LifecycleConfigArns { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference.property.internalValue"></a>

```csharp
public SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings">SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings</a>

---


### SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList <a name="SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList.get"></a>

```csharp
private SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference <a name="SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.resetImageVersionNumber">ResetImageVersionNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetImageVersionNumber` <a name="ResetImageVersionNumber" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.resetImageVersionNumber"></a>

```csharp
private void ResetImageVersionNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.appImageConfigNameInput">AppImageConfigNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageNameInput">ImageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageVersionNumberInput">ImageVersionNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.appImageConfigName">AppImageConfigName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageName">ImageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageVersionNumber">ImageVersionNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppImageConfigNameInput`<sup>Optional</sup> <a name="AppImageConfigNameInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.appImageConfigNameInput"></a>

```csharp
public string AppImageConfigNameInput { get; }
```

- *Type:* string

---

##### `ImageNameInput`<sup>Optional</sup> <a name="ImageNameInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageNameInput"></a>

```csharp
public string ImageNameInput { get; }
```

- *Type:* string

---

##### `ImageVersionNumberInput`<sup>Optional</sup> <a name="ImageVersionNumberInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageVersionNumberInput"></a>

```csharp
public double ImageVersionNumberInput { get; }
```

- *Type:* double

---

##### `AppImageConfigName`<sup>Required</sup> <a name="AppImageConfigName" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.appImageConfigName"></a>

```csharp
public string AppImageConfigName { get; }
```

- *Type:* string

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageName"></a>

```csharp
public string ImageName { get; }
```

- *Type:* string

---

##### `ImageVersionNumber`<sup>Required</sup> <a name="ImageVersionNumber" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageVersionNumber"></a>

```csharp
public double ImageVersionNumber { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference <a name="SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn">ResetLifecycleConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn">ResetSagemakerImageArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn">ResetSagemakerImageVersionArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetInstanceType"></a>

```csharp
private void ResetInstanceType()
```

##### `ResetLifecycleConfigArn` <a name="ResetLifecycleConfigArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```csharp
private void ResetLifecycleConfigArn()
```

##### `ResetSagemakerImageArn` <a name="ResetSagemakerImageArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn"></a>

```csharp
private void ResetSagemakerImageArn()
```

##### `ResetSagemakerImageVersionArn` <a name="ResetSagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn"></a>

```csharp
private void ResetSagemakerImageVersionArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput">LifecycleConfigArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput">SagemakerImageArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput">SagemakerImageVersionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">LifecycleConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn">SagemakerImageArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn">SagemakerImageVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `LifecycleConfigArnInput`<sup>Optional</sup> <a name="LifecycleConfigArnInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```csharp
public string LifecycleConfigArnInput { get; }
```

- *Type:* string

---

##### `SagemakerImageArnInput`<sup>Optional</sup> <a name="SagemakerImageArnInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput"></a>

```csharp
public string SagemakerImageArnInput { get; }
```

- *Type:* string

---

##### `SagemakerImageVersionArnInput`<sup>Optional</sup> <a name="SagemakerImageVersionArnInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput"></a>

```csharp
public string SagemakerImageVersionArnInput { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `LifecycleConfigArn`<sup>Required</sup> <a name="LifecycleConfigArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```csharp
public string LifecycleConfigArn { get; }
```

- *Type:* string

---

##### `SagemakerImageArn`<sup>Required</sup> <a name="SagemakerImageArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn"></a>

```csharp
public string SagemakerImageArn { get; }
```

- *Type:* string

---

##### `SagemakerImageVersionArn`<sup>Required</sup> <a name="SagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn"></a>

```csharp
public string SagemakerImageVersionArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```csharp
public SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

---


### SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference <a name="SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.putCustomImage">PutCustomImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.putDefaultResourceSpec">PutDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.resetCustomImage">ResetCustomImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.resetDefaultResourceSpec">ResetDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.resetLifecycleConfigArns">ResetLifecycleConfigArns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomImage` <a name="PutCustomImage" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.putCustomImage"></a>

```csharp
private void PutCustomImage(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.putCustomImage.parameter.value"></a>

- *Type:* object

---

##### `PutDefaultResourceSpec` <a name="PutDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.putDefaultResourceSpec"></a>

```csharp
private void PutDefaultResourceSpec(SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.putDefaultResourceSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

---

##### `ResetCustomImage` <a name="ResetCustomImage" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.resetCustomImage"></a>

```csharp
private void ResetCustomImage()
```

##### `ResetDefaultResourceSpec` <a name="ResetDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.resetDefaultResourceSpec"></a>

```csharp
private void ResetDefaultResourceSpec()
```

##### `ResetLifecycleConfigArns` <a name="ResetLifecycleConfigArns" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.resetLifecycleConfigArns"></a>

```csharp
private void ResetLifecycleConfigArns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.property.customImage">CustomImage</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList">SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpec">DefaultResourceSpec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference">SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.property.customImageInput">CustomImageInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpecInput">DefaultResourceSpecInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArnsInput">LifecycleConfigArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArns">LifecycleConfigArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings">SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomImage`<sup>Required</sup> <a name="CustomImage" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.property.customImage"></a>

```csharp
public SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList CustomImage { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList">SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList</a>

---

##### `DefaultResourceSpec`<sup>Required</sup> <a name="DefaultResourceSpec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpec"></a>

```csharp
public SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference DefaultResourceSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference">SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `CustomImageInput`<sup>Optional</sup> <a name="CustomImageInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.property.customImageInput"></a>

```csharp
public object CustomImageInput { get; }
```

- *Type:* object

---

##### `DefaultResourceSpecInput`<sup>Optional</sup> <a name="DefaultResourceSpecInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpecInput"></a>

```csharp
public SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec DefaultResourceSpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

---

##### `LifecycleConfigArnsInput`<sup>Optional</sup> <a name="LifecycleConfigArnsInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArnsInput"></a>

```csharp
public string[] LifecycleConfigArnsInput { get; }
```

- *Type:* string[]

---

##### `LifecycleConfigArns`<sup>Required</sup> <a name="LifecycleConfigArns" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArns"></a>

```csharp
public string[] LifecycleConfigArns { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference.property.internalValue"></a>

```csharp
public SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings">SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings</a>

---


### SagemakerDomainDefaultSpaceSettingsOutputReference <a name="SagemakerDomainDefaultSpaceSettingsOutputReference" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDefaultSpaceSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.putJupyterServerAppSettings">PutJupyterServerAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.putKernelGatewayAppSettings">PutKernelGatewayAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.resetJupyterServerAppSettings">ResetJupyterServerAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.resetKernelGatewayAppSettings">ResetKernelGatewayAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.resetSecurityGroups">ResetSecurityGroups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutJupyterServerAppSettings` <a name="PutJupyterServerAppSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.putJupyterServerAppSettings"></a>

```csharp
private void PutJupyterServerAppSettings(SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.putJupyterServerAppSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings">SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings</a>

---

##### `PutKernelGatewayAppSettings` <a name="PutKernelGatewayAppSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.putKernelGatewayAppSettings"></a>

```csharp
private void PutKernelGatewayAppSettings(SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.putKernelGatewayAppSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings">SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings</a>

---

##### `ResetJupyterServerAppSettings` <a name="ResetJupyterServerAppSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.resetJupyterServerAppSettings"></a>

```csharp
private void ResetJupyterServerAppSettings()
```

##### `ResetKernelGatewayAppSettings` <a name="ResetKernelGatewayAppSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.resetKernelGatewayAppSettings"></a>

```csharp
private void ResetKernelGatewayAppSettings()
```

##### `ResetSecurityGroups` <a name="ResetSecurityGroups" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.resetSecurityGroups"></a>

```csharp
private void ResetSecurityGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.property.jupyterServerAppSettings">JupyterServerAppSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference">SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.property.kernelGatewayAppSettings">KernelGatewayAppSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference">SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.property.executionRoleInput">ExecutionRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.property.jupyterServerAppSettingsInput">JupyterServerAppSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings">SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.property.kernelGatewayAppSettingsInput">KernelGatewayAppSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings">SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.property.executionRole">ExecutionRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettings">SagemakerDomainDefaultSpaceSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `JupyterServerAppSettings`<sup>Required</sup> <a name="JupyterServerAppSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.property.jupyterServerAppSettings"></a>

```csharp
public SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference JupyterServerAppSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference">SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference</a>

---

##### `KernelGatewayAppSettings`<sup>Required</sup> <a name="KernelGatewayAppSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.property.kernelGatewayAppSettings"></a>

```csharp
public SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference KernelGatewayAppSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference">SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference</a>

---

##### `ExecutionRoleInput`<sup>Optional</sup> <a name="ExecutionRoleInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.property.executionRoleInput"></a>

```csharp
public string ExecutionRoleInput { get; }
```

- *Type:* string

---

##### `JupyterServerAppSettingsInput`<sup>Optional</sup> <a name="JupyterServerAppSettingsInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.property.jupyterServerAppSettingsInput"></a>

```csharp
public SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings JupyterServerAppSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings">SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings</a>

---

##### `KernelGatewayAppSettingsInput`<sup>Optional</sup> <a name="KernelGatewayAppSettingsInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.property.kernelGatewayAppSettingsInput"></a>

```csharp
public SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings KernelGatewayAppSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings">SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings</a>

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.property.securityGroupsInput"></a>

```csharp
public string[] SecurityGroupsInput { get; }
```

- *Type:* string[]

---

##### `ExecutionRole`<sup>Required</sup> <a name="ExecutionRole" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.property.executionRole"></a>

```csharp
public string ExecutionRole { get; }
```

- *Type:* string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettingsOutputReference.property.internalValue"></a>

```csharp
public SagemakerDomainDefaultSpaceSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultSpaceSettings">SagemakerDomainDefaultSpaceSettings</a>

---


### SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference <a name="SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.putTimeSeriesForecastingSettings">PutTimeSeriesForecastingSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.resetTimeSeriesForecastingSettings">ResetTimeSeriesForecastingSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTimeSeriesForecastingSettings` <a name="PutTimeSeriesForecastingSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.putTimeSeriesForecastingSettings"></a>

```csharp
private void PutTimeSeriesForecastingSettings(SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.putTimeSeriesForecastingSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings">SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings</a>

---

##### `ResetTimeSeriesForecastingSettings` <a name="ResetTimeSeriesForecastingSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.resetTimeSeriesForecastingSettings"></a>

```csharp
private void ResetTimeSeriesForecastingSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.property.timeSeriesForecastingSettings">TimeSeriesForecastingSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference">SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.property.timeSeriesForecastingSettingsInput">TimeSeriesForecastingSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings">SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettings">SagemakerDomainDefaultUserSettingsCanvasAppSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TimeSeriesForecastingSettings`<sup>Required</sup> <a name="TimeSeriesForecastingSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.property.timeSeriesForecastingSettings"></a>

```csharp
public SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference TimeSeriesForecastingSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference">SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference</a>

---

##### `TimeSeriesForecastingSettingsInput`<sup>Optional</sup> <a name="TimeSeriesForecastingSettingsInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.property.timeSeriesForecastingSettingsInput"></a>

```csharp
public SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings TimeSeriesForecastingSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings">SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference.property.internalValue"></a>

```csharp
public SagemakerDomainDefaultUserSettingsCanvasAppSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettings">SagemakerDomainDefaultUserSettingsCanvasAppSettings</a>

---


### SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference <a name="SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.resetAmazonForecastRoleArn">ResetAmazonForecastRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAmazonForecastRoleArn` <a name="ResetAmazonForecastRoleArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.resetAmazonForecastRoleArn"></a>

```csharp
private void ResetAmazonForecastRoleArn()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.resetStatus"></a>

```csharp
private void ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.amazonForecastRoleArnInput">AmazonForecastRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.amazonForecastRoleArn">AmazonForecastRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings">SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AmazonForecastRoleArnInput`<sup>Optional</sup> <a name="AmazonForecastRoleArnInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.amazonForecastRoleArnInput"></a>

```csharp
public string AmazonForecastRoleArnInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `AmazonForecastRoleArn`<sup>Required</sup> <a name="AmazonForecastRoleArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.amazonForecastRoleArn"></a>

```csharp
public string AmazonForecastRoleArn { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference.property.internalValue"></a>

```csharp
public SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings">SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings</a>

---


### SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList <a name="SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList.get"></a>

```csharp
private SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference <a name="SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.repositoryUrlInput">RepositoryUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.repositoryUrl">RepositoryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RepositoryUrlInput`<sup>Optional</sup> <a name="RepositoryUrlInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.repositoryUrlInput"></a>

```csharp
public string RepositoryUrlInput { get; }
```

- *Type:* string

---

##### `RepositoryUrl`<sup>Required</sup> <a name="RepositoryUrl" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.repositoryUrl"></a>

```csharp
public string RepositoryUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference <a name="SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn">ResetLifecycleConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn">ResetSagemakerImageArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn">ResetSagemakerImageVersionArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetInstanceType"></a>

```csharp
private void ResetInstanceType()
```

##### `ResetLifecycleConfigArn` <a name="ResetLifecycleConfigArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```csharp
private void ResetLifecycleConfigArn()
```

##### `ResetSagemakerImageArn` <a name="ResetSagemakerImageArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn"></a>

```csharp
private void ResetSagemakerImageArn()
```

##### `ResetSagemakerImageVersionArn` <a name="ResetSagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn"></a>

```csharp
private void ResetSagemakerImageVersionArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput">LifecycleConfigArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput">SagemakerImageArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput">SagemakerImageVersionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">LifecycleConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn">SagemakerImageArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn">SagemakerImageVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `LifecycleConfigArnInput`<sup>Optional</sup> <a name="LifecycleConfigArnInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```csharp
public string LifecycleConfigArnInput { get; }
```

- *Type:* string

---

##### `SagemakerImageArnInput`<sup>Optional</sup> <a name="SagemakerImageArnInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput"></a>

```csharp
public string SagemakerImageArnInput { get; }
```

- *Type:* string

---

##### `SagemakerImageVersionArnInput`<sup>Optional</sup> <a name="SagemakerImageVersionArnInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput"></a>

```csharp
public string SagemakerImageVersionArnInput { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `LifecycleConfigArn`<sup>Required</sup> <a name="LifecycleConfigArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```csharp
public string LifecycleConfigArn { get; }
```

- *Type:* string

---

##### `SagemakerImageArn`<sup>Required</sup> <a name="SagemakerImageArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn"></a>

```csharp
public string SagemakerImageArn { get; }
```

- *Type:* string

---

##### `SagemakerImageVersionArn`<sup>Required</sup> <a name="SagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn"></a>

```csharp
public string SagemakerImageVersionArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```csharp
public SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

---


### SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference <a name="SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.putCodeRepository">PutCodeRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.putDefaultResourceSpec">PutDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.resetCodeRepository">ResetCodeRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.resetDefaultResourceSpec">ResetDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.resetLifecycleConfigArns">ResetLifecycleConfigArns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCodeRepository` <a name="PutCodeRepository" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.putCodeRepository"></a>

```csharp
private void PutCodeRepository(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.putCodeRepository.parameter.value"></a>

- *Type:* object

---

##### `PutDefaultResourceSpec` <a name="PutDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.putDefaultResourceSpec"></a>

```csharp
private void PutDefaultResourceSpec(SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.putDefaultResourceSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

---

##### `ResetCodeRepository` <a name="ResetCodeRepository" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.resetCodeRepository"></a>

```csharp
private void ResetCodeRepository()
```

##### `ResetDefaultResourceSpec` <a name="ResetDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.resetDefaultResourceSpec"></a>

```csharp
private void ResetDefaultResourceSpec()
```

##### `ResetLifecycleConfigArns` <a name="ResetLifecycleConfigArns" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.resetLifecycleConfigArns"></a>

```csharp
private void ResetLifecycleConfigArns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.property.codeRepository">CodeRepository</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList">SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpec">DefaultResourceSpec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference">SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.property.codeRepositoryInput">CodeRepositoryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpecInput">DefaultResourceSpecInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArnsInput">LifecycleConfigArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArns">LifecycleConfigArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettings">SagemakerDomainDefaultUserSettingsJupyterServerAppSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CodeRepository`<sup>Required</sup> <a name="CodeRepository" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.property.codeRepository"></a>

```csharp
public SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList CodeRepository { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList">SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList</a>

---

##### `DefaultResourceSpec`<sup>Required</sup> <a name="DefaultResourceSpec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpec"></a>

```csharp
public SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference DefaultResourceSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference">SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `CodeRepositoryInput`<sup>Optional</sup> <a name="CodeRepositoryInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.property.codeRepositoryInput"></a>

```csharp
public object CodeRepositoryInput { get; }
```

- *Type:* object

---

##### `DefaultResourceSpecInput`<sup>Optional</sup> <a name="DefaultResourceSpecInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpecInput"></a>

```csharp
public SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec DefaultResourceSpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

---

##### `LifecycleConfigArnsInput`<sup>Optional</sup> <a name="LifecycleConfigArnsInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArnsInput"></a>

```csharp
public string[] LifecycleConfigArnsInput { get; }
```

- *Type:* string[]

---

##### `LifecycleConfigArns`<sup>Required</sup> <a name="LifecycleConfigArns" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArns"></a>

```csharp
public string[] LifecycleConfigArns { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference.property.internalValue"></a>

```csharp
public SagemakerDomainDefaultUserSettingsJupyterServerAppSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettings">SagemakerDomainDefaultUserSettingsJupyterServerAppSettings</a>

---


### SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList <a name="SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList.get"></a>

```csharp
private SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference <a name="SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.resetImageVersionNumber">ResetImageVersionNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetImageVersionNumber` <a name="ResetImageVersionNumber" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.resetImageVersionNumber"></a>

```csharp
private void ResetImageVersionNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.appImageConfigNameInput">AppImageConfigNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageNameInput">ImageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageVersionNumberInput">ImageVersionNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.appImageConfigName">AppImageConfigName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageName">ImageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageVersionNumber">ImageVersionNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppImageConfigNameInput`<sup>Optional</sup> <a name="AppImageConfigNameInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.appImageConfigNameInput"></a>

```csharp
public string AppImageConfigNameInput { get; }
```

- *Type:* string

---

##### `ImageNameInput`<sup>Optional</sup> <a name="ImageNameInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageNameInput"></a>

```csharp
public string ImageNameInput { get; }
```

- *Type:* string

---

##### `ImageVersionNumberInput`<sup>Optional</sup> <a name="ImageVersionNumberInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageVersionNumberInput"></a>

```csharp
public double ImageVersionNumberInput { get; }
```

- *Type:* double

---

##### `AppImageConfigName`<sup>Required</sup> <a name="AppImageConfigName" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.appImageConfigName"></a>

```csharp
public string AppImageConfigName { get; }
```

- *Type:* string

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageName"></a>

```csharp
public string ImageName { get; }
```

- *Type:* string

---

##### `ImageVersionNumber`<sup>Required</sup> <a name="ImageVersionNumber" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.imageVersionNumber"></a>

```csharp
public double ImageVersionNumber { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference <a name="SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn">ResetLifecycleConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn">ResetSagemakerImageArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn">ResetSagemakerImageVersionArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetInstanceType"></a>

```csharp
private void ResetInstanceType()
```

##### `ResetLifecycleConfigArn` <a name="ResetLifecycleConfigArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```csharp
private void ResetLifecycleConfigArn()
```

##### `ResetSagemakerImageArn` <a name="ResetSagemakerImageArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn"></a>

```csharp
private void ResetSagemakerImageArn()
```

##### `ResetSagemakerImageVersionArn` <a name="ResetSagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn"></a>

```csharp
private void ResetSagemakerImageVersionArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput">LifecycleConfigArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput">SagemakerImageArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput">SagemakerImageVersionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">LifecycleConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn">SagemakerImageArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn">SagemakerImageVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `LifecycleConfigArnInput`<sup>Optional</sup> <a name="LifecycleConfigArnInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```csharp
public string LifecycleConfigArnInput { get; }
```

- *Type:* string

---

##### `SagemakerImageArnInput`<sup>Optional</sup> <a name="SagemakerImageArnInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput"></a>

```csharp
public string SagemakerImageArnInput { get; }
```

- *Type:* string

---

##### `SagemakerImageVersionArnInput`<sup>Optional</sup> <a name="SagemakerImageVersionArnInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput"></a>

```csharp
public string SagemakerImageVersionArnInput { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `LifecycleConfigArn`<sup>Required</sup> <a name="LifecycleConfigArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```csharp
public string LifecycleConfigArn { get; }
```

- *Type:* string

---

##### `SagemakerImageArn`<sup>Required</sup> <a name="SagemakerImageArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn"></a>

```csharp
public string SagemakerImageArn { get; }
```

- *Type:* string

---

##### `SagemakerImageVersionArn`<sup>Required</sup> <a name="SagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn"></a>

```csharp
public string SagemakerImageVersionArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```csharp
public SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

---


### SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference <a name="SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.putCustomImage">PutCustomImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.putDefaultResourceSpec">PutDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.resetCustomImage">ResetCustomImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.resetDefaultResourceSpec">ResetDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.resetLifecycleConfigArns">ResetLifecycleConfigArns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomImage` <a name="PutCustomImage" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.putCustomImage"></a>

```csharp
private void PutCustomImage(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.putCustomImage.parameter.value"></a>

- *Type:* object

---

##### `PutDefaultResourceSpec` <a name="PutDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.putDefaultResourceSpec"></a>

```csharp
private void PutDefaultResourceSpec(SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.putDefaultResourceSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

---

##### `ResetCustomImage` <a name="ResetCustomImage" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.resetCustomImage"></a>

```csharp
private void ResetCustomImage()
```

##### `ResetDefaultResourceSpec` <a name="ResetDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.resetDefaultResourceSpec"></a>

```csharp
private void ResetDefaultResourceSpec()
```

##### `ResetLifecycleConfigArns` <a name="ResetLifecycleConfigArns" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.resetLifecycleConfigArns"></a>

```csharp
private void ResetLifecycleConfigArns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.property.customImage">CustomImage</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList">SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpec">DefaultResourceSpec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference">SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.property.customImageInput">CustomImageInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpecInput">DefaultResourceSpecInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArnsInput">LifecycleConfigArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArns">LifecycleConfigArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings">SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomImage`<sup>Required</sup> <a name="CustomImage" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.property.customImage"></a>

```csharp
public SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList CustomImage { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList">SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList</a>

---

##### `DefaultResourceSpec`<sup>Required</sup> <a name="DefaultResourceSpec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpec"></a>

```csharp
public SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference DefaultResourceSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference">SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `CustomImageInput`<sup>Optional</sup> <a name="CustomImageInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.property.customImageInput"></a>

```csharp
public object CustomImageInput { get; }
```

- *Type:* object

---

##### `DefaultResourceSpecInput`<sup>Optional</sup> <a name="DefaultResourceSpecInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpecInput"></a>

```csharp
public SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec DefaultResourceSpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

---

##### `LifecycleConfigArnsInput`<sup>Optional</sup> <a name="LifecycleConfigArnsInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArnsInput"></a>

```csharp
public string[] LifecycleConfigArnsInput { get; }
```

- *Type:* string[]

---

##### `LifecycleConfigArns`<sup>Required</sup> <a name="LifecycleConfigArns" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArns"></a>

```csharp
public string[] LifecycleConfigArns { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference.property.internalValue"></a>

```csharp
public SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings">SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings</a>

---


### SagemakerDomainDefaultUserSettingsOutputReference <a name="SagemakerDomainDefaultUserSettingsOutputReference" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDefaultUserSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.putCanvasAppSettings">PutCanvasAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.putJupyterServerAppSettings">PutJupyterServerAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.putKernelGatewayAppSettings">PutKernelGatewayAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.putRSessionAppSettings">PutRSessionAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.putSharingSettings">PutSharingSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.putTensorBoardAppSettings">PutTensorBoardAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.resetCanvasAppSettings">ResetCanvasAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.resetJupyterServerAppSettings">ResetJupyterServerAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.resetKernelGatewayAppSettings">ResetKernelGatewayAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.resetRSessionAppSettings">ResetRSessionAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.resetSecurityGroups">ResetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.resetSharingSettings">ResetSharingSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.resetTensorBoardAppSettings">ResetTensorBoardAppSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCanvasAppSettings` <a name="PutCanvasAppSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.putCanvasAppSettings"></a>

```csharp
private void PutCanvasAppSettings(SagemakerDomainDefaultUserSettingsCanvasAppSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.putCanvasAppSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettings">SagemakerDomainDefaultUserSettingsCanvasAppSettings</a>

---

##### `PutJupyterServerAppSettings` <a name="PutJupyterServerAppSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.putJupyterServerAppSettings"></a>

```csharp
private void PutJupyterServerAppSettings(SagemakerDomainDefaultUserSettingsJupyterServerAppSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.putJupyterServerAppSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettings">SagemakerDomainDefaultUserSettingsJupyterServerAppSettings</a>

---

##### `PutKernelGatewayAppSettings` <a name="PutKernelGatewayAppSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.putKernelGatewayAppSettings"></a>

```csharp
private void PutKernelGatewayAppSettings(SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.putKernelGatewayAppSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings">SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings</a>

---

##### `PutRSessionAppSettings` <a name="PutRSessionAppSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.putRSessionAppSettings"></a>

```csharp
private void PutRSessionAppSettings(SagemakerDomainDefaultUserSettingsRSessionAppSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.putRSessionAppSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettings">SagemakerDomainDefaultUserSettingsRSessionAppSettings</a>

---

##### `PutSharingSettings` <a name="PutSharingSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.putSharingSettings"></a>

```csharp
private void PutSharingSettings(SagemakerDomainDefaultUserSettingsSharingSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.putSharingSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettings">SagemakerDomainDefaultUserSettingsSharingSettings</a>

---

##### `PutTensorBoardAppSettings` <a name="PutTensorBoardAppSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.putTensorBoardAppSettings"></a>

```csharp
private void PutTensorBoardAppSettings(SagemakerDomainDefaultUserSettingsTensorBoardAppSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.putTensorBoardAppSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettings">SagemakerDomainDefaultUserSettingsTensorBoardAppSettings</a>

---

##### `ResetCanvasAppSettings` <a name="ResetCanvasAppSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.resetCanvasAppSettings"></a>

```csharp
private void ResetCanvasAppSettings()
```

##### `ResetJupyterServerAppSettings` <a name="ResetJupyterServerAppSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.resetJupyterServerAppSettings"></a>

```csharp
private void ResetJupyterServerAppSettings()
```

##### `ResetKernelGatewayAppSettings` <a name="ResetKernelGatewayAppSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.resetKernelGatewayAppSettings"></a>

```csharp
private void ResetKernelGatewayAppSettings()
```

##### `ResetRSessionAppSettings` <a name="ResetRSessionAppSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.resetRSessionAppSettings"></a>

```csharp
private void ResetRSessionAppSettings()
```

##### `ResetSecurityGroups` <a name="ResetSecurityGroups" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.resetSecurityGroups"></a>

```csharp
private void ResetSecurityGroups()
```

##### `ResetSharingSettings` <a name="ResetSharingSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.resetSharingSettings"></a>

```csharp
private void ResetSharingSettings()
```

##### `ResetTensorBoardAppSettings` <a name="ResetTensorBoardAppSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.resetTensorBoardAppSettings"></a>

```csharp
private void ResetTensorBoardAppSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.canvasAppSettings">CanvasAppSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference">SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.jupyterServerAppSettings">JupyterServerAppSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference">SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.kernelGatewayAppSettings">KernelGatewayAppSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference">SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.rSessionAppSettings">RSessionAppSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference">SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.sharingSettings">SharingSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference">SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.tensorBoardAppSettings">TensorBoardAppSettings</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference">SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.canvasAppSettingsInput">CanvasAppSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettings">SagemakerDomainDefaultUserSettingsCanvasAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.executionRoleInput">ExecutionRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.jupyterServerAppSettingsInput">JupyterServerAppSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettings">SagemakerDomainDefaultUserSettingsJupyterServerAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.kernelGatewayAppSettingsInput">KernelGatewayAppSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings">SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.rSessionAppSettingsInput">RSessionAppSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettings">SagemakerDomainDefaultUserSettingsRSessionAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.sharingSettingsInput">SharingSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettings">SagemakerDomainDefaultUserSettingsSharingSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.tensorBoardAppSettingsInput">TensorBoardAppSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettings">SagemakerDomainDefaultUserSettingsTensorBoardAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.executionRole">ExecutionRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings">SagemakerDomainDefaultUserSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CanvasAppSettings`<sup>Required</sup> <a name="CanvasAppSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.canvasAppSettings"></a>

```csharp
public SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference CanvasAppSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference">SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference</a>

---

##### `JupyterServerAppSettings`<sup>Required</sup> <a name="JupyterServerAppSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.jupyterServerAppSettings"></a>

```csharp
public SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference JupyterServerAppSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference">SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference</a>

---

##### `KernelGatewayAppSettings`<sup>Required</sup> <a name="KernelGatewayAppSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.kernelGatewayAppSettings"></a>

```csharp
public SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference KernelGatewayAppSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference">SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference</a>

---

##### `RSessionAppSettings`<sup>Required</sup> <a name="RSessionAppSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.rSessionAppSettings"></a>

```csharp
public SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference RSessionAppSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference">SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference</a>

---

##### `SharingSettings`<sup>Required</sup> <a name="SharingSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.sharingSettings"></a>

```csharp
public SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference SharingSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference">SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference</a>

---

##### `TensorBoardAppSettings`<sup>Required</sup> <a name="TensorBoardAppSettings" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.tensorBoardAppSettings"></a>

```csharp
public SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference TensorBoardAppSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference">SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference</a>

---

##### `CanvasAppSettingsInput`<sup>Optional</sup> <a name="CanvasAppSettingsInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.canvasAppSettingsInput"></a>

```csharp
public SagemakerDomainDefaultUserSettingsCanvasAppSettings CanvasAppSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsCanvasAppSettings">SagemakerDomainDefaultUserSettingsCanvasAppSettings</a>

---

##### `ExecutionRoleInput`<sup>Optional</sup> <a name="ExecutionRoleInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.executionRoleInput"></a>

```csharp
public string ExecutionRoleInput { get; }
```

- *Type:* string

---

##### `JupyterServerAppSettingsInput`<sup>Optional</sup> <a name="JupyterServerAppSettingsInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.jupyterServerAppSettingsInput"></a>

```csharp
public SagemakerDomainDefaultUserSettingsJupyterServerAppSettings JupyterServerAppSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsJupyterServerAppSettings">SagemakerDomainDefaultUserSettingsJupyterServerAppSettings</a>

---

##### `KernelGatewayAppSettingsInput`<sup>Optional</sup> <a name="KernelGatewayAppSettingsInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.kernelGatewayAppSettingsInput"></a>

```csharp
public SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings KernelGatewayAppSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings">SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings</a>

---

##### `RSessionAppSettingsInput`<sup>Optional</sup> <a name="RSessionAppSettingsInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.rSessionAppSettingsInput"></a>

```csharp
public SagemakerDomainDefaultUserSettingsRSessionAppSettings RSessionAppSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettings">SagemakerDomainDefaultUserSettingsRSessionAppSettings</a>

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.securityGroupsInput"></a>

```csharp
public string[] SecurityGroupsInput { get; }
```

- *Type:* string[]

---

##### `SharingSettingsInput`<sup>Optional</sup> <a name="SharingSettingsInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.sharingSettingsInput"></a>

```csharp
public SagemakerDomainDefaultUserSettingsSharingSettings SharingSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettings">SagemakerDomainDefaultUserSettingsSharingSettings</a>

---

##### `TensorBoardAppSettingsInput`<sup>Optional</sup> <a name="TensorBoardAppSettingsInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.tensorBoardAppSettingsInput"></a>

```csharp
public SagemakerDomainDefaultUserSettingsTensorBoardAppSettings TensorBoardAppSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettings">SagemakerDomainDefaultUserSettingsTensorBoardAppSettings</a>

---

##### `ExecutionRole`<sup>Required</sup> <a name="ExecutionRole" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.executionRole"></a>

```csharp
public string ExecutionRole { get; }
```

- *Type:* string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsOutputReference.property.internalValue"></a>

```csharp
public SagemakerDomainDefaultUserSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettings">SagemakerDomainDefaultUserSettings</a>

---


### SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList <a name="SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList.get"></a>

```csharp
private SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference <a name="SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.resetImageVersionNumber">ResetImageVersionNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetImageVersionNumber` <a name="ResetImageVersionNumber" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.resetImageVersionNumber"></a>

```csharp
private void ResetImageVersionNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.property.appImageConfigNameInput">AppImageConfigNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.property.imageNameInput">ImageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.property.imageVersionNumberInput">ImageVersionNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.property.appImageConfigName">AppImageConfigName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.property.imageName">ImageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.property.imageVersionNumber">ImageVersionNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppImageConfigNameInput`<sup>Optional</sup> <a name="AppImageConfigNameInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.property.appImageConfigNameInput"></a>

```csharp
public string AppImageConfigNameInput { get; }
```

- *Type:* string

---

##### `ImageNameInput`<sup>Optional</sup> <a name="ImageNameInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.property.imageNameInput"></a>

```csharp
public string ImageNameInput { get; }
```

- *Type:* string

---

##### `ImageVersionNumberInput`<sup>Optional</sup> <a name="ImageVersionNumberInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.property.imageVersionNumberInput"></a>

```csharp
public double ImageVersionNumberInput { get; }
```

- *Type:* double

---

##### `AppImageConfigName`<sup>Required</sup> <a name="AppImageConfigName" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.property.appImageConfigName"></a>

```csharp
public string AppImageConfigName { get; }
```

- *Type:* string

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.property.imageName"></a>

```csharp
public string ImageName { get; }
```

- *Type:* string

---

##### `ImageVersionNumber`<sup>Required</sup> <a name="ImageVersionNumber" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.property.imageVersionNumber"></a>

```csharp
public double ImageVersionNumber { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference <a name="SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn">ResetLifecycleConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn">ResetSagemakerImageArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn">ResetSagemakerImageVersionArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.resetInstanceType"></a>

```csharp
private void ResetInstanceType()
```

##### `ResetLifecycleConfigArn` <a name="ResetLifecycleConfigArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```csharp
private void ResetLifecycleConfigArn()
```

##### `ResetSagemakerImageArn` <a name="ResetSagemakerImageArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn"></a>

```csharp
private void ResetSagemakerImageArn()
```

##### `ResetSagemakerImageVersionArn` <a name="ResetSagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn"></a>

```csharp
private void ResetSagemakerImageVersionArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput">LifecycleConfigArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput">SagemakerImageArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput">SagemakerImageVersionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">LifecycleConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn">SagemakerImageArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn">SagemakerImageVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `LifecycleConfigArnInput`<sup>Optional</sup> <a name="LifecycleConfigArnInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```csharp
public string LifecycleConfigArnInput { get; }
```

- *Type:* string

---

##### `SagemakerImageArnInput`<sup>Optional</sup> <a name="SagemakerImageArnInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput"></a>

```csharp
public string SagemakerImageArnInput { get; }
```

- *Type:* string

---

##### `SagemakerImageVersionArnInput`<sup>Optional</sup> <a name="SagemakerImageVersionArnInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput"></a>

```csharp
public string SagemakerImageVersionArnInput { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `LifecycleConfigArn`<sup>Required</sup> <a name="LifecycleConfigArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```csharp
public string LifecycleConfigArn { get; }
```

- *Type:* string

---

##### `SagemakerImageArn`<sup>Required</sup> <a name="SagemakerImageArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn"></a>

```csharp
public string SagemakerImageArn { get; }
```

- *Type:* string

---

##### `SagemakerImageVersionArn`<sup>Required</sup> <a name="SagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn"></a>

```csharp
public string SagemakerImageVersionArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```csharp
public SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec</a>

---


### SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference <a name="SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.putCustomImage">PutCustomImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.putDefaultResourceSpec">PutDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.resetCustomImage">ResetCustomImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.resetDefaultResourceSpec">ResetDefaultResourceSpec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomImage` <a name="PutCustomImage" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.putCustomImage"></a>

```csharp
private void PutCustomImage(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.putCustomImage.parameter.value"></a>

- *Type:* object

---

##### `PutDefaultResourceSpec` <a name="PutDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.putDefaultResourceSpec"></a>

```csharp
private void PutDefaultResourceSpec(SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.putDefaultResourceSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec</a>

---

##### `ResetCustomImage` <a name="ResetCustomImage" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.resetCustomImage"></a>

```csharp
private void ResetCustomImage()
```

##### `ResetDefaultResourceSpec` <a name="ResetDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.resetDefaultResourceSpec"></a>

```csharp
private void ResetDefaultResourceSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.property.customImage">CustomImage</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList">SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.property.defaultResourceSpec">DefaultResourceSpec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference">SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.property.customImageInput">CustomImageInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.property.defaultResourceSpecInput">DefaultResourceSpecInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettings">SagemakerDomainDefaultUserSettingsRSessionAppSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomImage`<sup>Required</sup> <a name="CustomImage" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.property.customImage"></a>

```csharp
public SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList CustomImage { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList">SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList</a>

---

##### `DefaultResourceSpec`<sup>Required</sup> <a name="DefaultResourceSpec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.property.defaultResourceSpec"></a>

```csharp
public SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference DefaultResourceSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference">SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `CustomImageInput`<sup>Optional</sup> <a name="CustomImageInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.property.customImageInput"></a>

```csharp
public object CustomImageInput { get; }
```

- *Type:* object

---

##### `DefaultResourceSpecInput`<sup>Optional</sup> <a name="DefaultResourceSpecInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.property.defaultResourceSpecInput"></a>

```csharp
public SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec DefaultResourceSpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference.property.internalValue"></a>

```csharp
public SagemakerDomainDefaultUserSettingsRSessionAppSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsRSessionAppSettings">SagemakerDomainDefaultUserSettingsRSessionAppSettings</a>

---


### SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference <a name="SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.resetNotebookOutputOption">ResetNotebookOutputOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.resetS3KmsKeyId">ResetS3KmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.resetS3OutputPath">ResetS3OutputPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNotebookOutputOption` <a name="ResetNotebookOutputOption" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.resetNotebookOutputOption"></a>

```csharp
private void ResetNotebookOutputOption()
```

##### `ResetS3KmsKeyId` <a name="ResetS3KmsKeyId" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.resetS3KmsKeyId"></a>

```csharp
private void ResetS3KmsKeyId()
```

##### `ResetS3OutputPath` <a name="ResetS3OutputPath" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.resetS3OutputPath"></a>

```csharp
private void ResetS3OutputPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.property.notebookOutputOptionInput">NotebookOutputOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.property.s3KmsKeyIdInput">S3KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.property.s3OutputPathInput">S3OutputPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.property.notebookOutputOption">NotebookOutputOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.property.s3KmsKeyId">S3KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.property.s3OutputPath">S3OutputPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettings">SagemakerDomainDefaultUserSettingsSharingSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NotebookOutputOptionInput`<sup>Optional</sup> <a name="NotebookOutputOptionInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.property.notebookOutputOptionInput"></a>

```csharp
public string NotebookOutputOptionInput { get; }
```

- *Type:* string

---

##### `S3KmsKeyIdInput`<sup>Optional</sup> <a name="S3KmsKeyIdInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.property.s3KmsKeyIdInput"></a>

```csharp
public string S3KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `S3OutputPathInput`<sup>Optional</sup> <a name="S3OutputPathInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.property.s3OutputPathInput"></a>

```csharp
public string S3OutputPathInput { get; }
```

- *Type:* string

---

##### `NotebookOutputOption`<sup>Required</sup> <a name="NotebookOutputOption" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.property.notebookOutputOption"></a>

```csharp
public string NotebookOutputOption { get; }
```

- *Type:* string

---

##### `S3KmsKeyId`<sup>Required</sup> <a name="S3KmsKeyId" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.property.s3KmsKeyId"></a>

```csharp
public string S3KmsKeyId { get; }
```

- *Type:* string

---

##### `S3OutputPath`<sup>Required</sup> <a name="S3OutputPath" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.property.s3OutputPath"></a>

```csharp
public string S3OutputPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference.property.internalValue"></a>

```csharp
public SagemakerDomainDefaultUserSettingsSharingSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsSharingSettings">SagemakerDomainDefaultUserSettingsSharingSettings</a>

---


### SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference <a name="SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn">ResetLifecycleConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn">ResetSagemakerImageArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn">ResetSagemakerImageVersionArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.resetInstanceType"></a>

```csharp
private void ResetInstanceType()
```

##### `ResetLifecycleConfigArn` <a name="ResetLifecycleConfigArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```csharp
private void ResetLifecycleConfigArn()
```

##### `ResetSagemakerImageArn` <a name="ResetSagemakerImageArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageArn"></a>

```csharp
private void ResetSagemakerImageArn()
```

##### `ResetSagemakerImageVersionArn` <a name="ResetSagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.resetSagemakerImageVersionArn"></a>

```csharp
private void ResetSagemakerImageVersionArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput">LifecycleConfigArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput">SagemakerImageArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput">SagemakerImageVersionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">LifecycleConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn">SagemakerImageArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn">SagemakerImageVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `LifecycleConfigArnInput`<sup>Optional</sup> <a name="LifecycleConfigArnInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```csharp
public string LifecycleConfigArnInput { get; }
```

- *Type:* string

---

##### `SagemakerImageArnInput`<sup>Optional</sup> <a name="SagemakerImageArnInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArnInput"></a>

```csharp
public string SagemakerImageArnInput { get; }
```

- *Type:* string

---

##### `SagemakerImageVersionArnInput`<sup>Optional</sup> <a name="SagemakerImageVersionArnInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArnInput"></a>

```csharp
public string SagemakerImageVersionArnInput { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `LifecycleConfigArn`<sup>Required</sup> <a name="LifecycleConfigArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```csharp
public string LifecycleConfigArn { get; }
```

- *Type:* string

---

##### `SagemakerImageArn`<sup>Required</sup> <a name="SagemakerImageArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageArn"></a>

```csharp
public string SagemakerImageArn { get; }
```

- *Type:* string

---

##### `SagemakerImageVersionArn`<sup>Required</sup> <a name="SagemakerImageVersionArn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.sagemakerImageVersionArn"></a>

```csharp
public string SagemakerImageVersionArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```csharp
public SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec</a>

---


### SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference <a name="SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.putDefaultResourceSpec">PutDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.resetDefaultResourceSpec">ResetDefaultResourceSpec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDefaultResourceSpec` <a name="PutDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.putDefaultResourceSpec"></a>

```csharp
private void PutDefaultResourceSpec(SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.putDefaultResourceSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec</a>

---

##### `ResetDefaultResourceSpec` <a name="ResetDefaultResourceSpec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.resetDefaultResourceSpec"></a>

```csharp
private void ResetDefaultResourceSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.property.defaultResourceSpec">DefaultResourceSpec</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference">SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.property.defaultResourceSpecInput">DefaultResourceSpecInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettings">SagemakerDomainDefaultUserSettingsTensorBoardAppSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultResourceSpec`<sup>Required</sup> <a name="DefaultResourceSpec" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.property.defaultResourceSpec"></a>

```csharp
public SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference DefaultResourceSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference">SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `DefaultResourceSpecInput`<sup>Optional</sup> <a name="DefaultResourceSpecInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.property.defaultResourceSpecInput"></a>

```csharp
public SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec DefaultResourceSpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec">SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference.property.internalValue"></a>

```csharp
public SagemakerDomainDefaultUserSettingsTensorBoardAppSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDefaultUserSettingsTensorBoardAppSettings">SagemakerDomainDefaultUserSettingsTensorBoardAppSettings</a>

---


### SagemakerDomainDomainSettingsOutputReference <a name="SagemakerDomainDomainSettingsOutputReference" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainDomainSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.resetExecutionRoleIdentityConfig">ResetExecutionRoleIdentityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExecutionRoleIdentityConfig` <a name="ResetExecutionRoleIdentityConfig" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.resetExecutionRoleIdentityConfig"></a>

```csharp
private void ResetExecutionRoleIdentityConfig()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.property.executionRoleIdentityConfigInput">ExecutionRoleIdentityConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.property.executionRoleIdentityConfig">ExecutionRoleIdentityConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettings">SagemakerDomainDomainSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExecutionRoleIdentityConfigInput`<sup>Optional</sup> <a name="ExecutionRoleIdentityConfigInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.property.executionRoleIdentityConfigInput"></a>

```csharp
public string ExecutionRoleIdentityConfigInput { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `ExecutionRoleIdentityConfig`<sup>Required</sup> <a name="ExecutionRoleIdentityConfig" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.property.executionRoleIdentityConfig"></a>

```csharp
public string ExecutionRoleIdentityConfig { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettingsOutputReference.property.internalValue"></a>

```csharp
public SagemakerDomainDomainSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainDomainSettings">SagemakerDomainDomainSettings</a>

---


### SagemakerDomainRetentionPolicyOutputReference <a name="SagemakerDomainRetentionPolicyOutputReference" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerDomainRetentionPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.resetHomeEfsFileSystem">ResetHomeEfsFileSystem</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHomeEfsFileSystem` <a name="ResetHomeEfsFileSystem" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.resetHomeEfsFileSystem"></a>

```csharp
private void ResetHomeEfsFileSystem()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.property.homeEfsFileSystemInput">HomeEfsFileSystemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.property.homeEfsFileSystem">HomeEfsFileSystem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicy">SagemakerDomainRetentionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HomeEfsFileSystemInput`<sup>Optional</sup> <a name="HomeEfsFileSystemInput" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.property.homeEfsFileSystemInput"></a>

```csharp
public string HomeEfsFileSystemInput { get; }
```

- *Type:* string

---

##### `HomeEfsFileSystem`<sup>Required</sup> <a name="HomeEfsFileSystem" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.property.homeEfsFileSystem"></a>

```csharp
public string HomeEfsFileSystem { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicyOutputReference.property.internalValue"></a>

```csharp
public SagemakerDomainRetentionPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDomain.SagemakerDomainRetentionPolicy">SagemakerDomainRetentionPolicy</a>

---



