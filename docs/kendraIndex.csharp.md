# `kendraIndex` Submodule <a name="`kendraIndex` Submodule" id="@cdktf/provider-aws.kendraIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KendraIndex <a name="KendraIndex" id="@cdktf/provider-aws.kendraIndex.KendraIndex"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/kendra_index aws_kendra_index}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraIndex(Construct Scope, string Id, KendraIndexConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig">KendraIndexConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig">KendraIndexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.putCapacityUnits">PutCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.putDocumentMetadataConfigurationUpdates">PutDocumentMetadataConfigurationUpdates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.putServerSideEncryptionConfiguration">PutServerSideEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.putUserGroupResolutionConfiguration">PutUserGroupResolutionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.putUserTokenConfigurations">PutUserTokenConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetCapacityUnits">ResetCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetDocumentMetadataConfigurationUpdates">ResetDocumentMetadataConfigurationUpdates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetEdition">ResetEdition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetServerSideEncryptionConfiguration">ResetServerSideEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetUserContextPolicy">ResetUserContextPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetUserGroupResolutionConfiguration">ResetUserGroupResolutionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetUserTokenConfigurations">ResetUserTokenConfigurations</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraIndex.KendraIndex.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.kendraIndex.KendraIndex.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.kendraIndex.KendraIndex.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kendraIndex.KendraIndex.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.kendraIndex.KendraIndex.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.kendraIndex.KendraIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.kendraIndex.KendraIndex.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.kendraIndex.KendraIndex.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutCapacityUnits` <a name="PutCapacityUnits" id="@cdktf/provider-aws.kendraIndex.KendraIndex.putCapacityUnits"></a>

```csharp
private void PutCapacityUnits(KendraIndexCapacityUnits Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kendraIndex.KendraIndex.putCapacityUnits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits">KendraIndexCapacityUnits</a>

---

##### `PutDocumentMetadataConfigurationUpdates` <a name="PutDocumentMetadataConfigurationUpdates" id="@cdktf/provider-aws.kendraIndex.KendraIndex.putDocumentMetadataConfigurationUpdates"></a>

```csharp
private void PutDocumentMetadataConfigurationUpdates(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kendraIndex.KendraIndex.putDocumentMetadataConfigurationUpdates.parameter.value"></a>

- *Type:* object

---

##### `PutServerSideEncryptionConfiguration` <a name="PutServerSideEncryptionConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndex.putServerSideEncryptionConfiguration"></a>

```csharp
private void PutServerSideEncryptionConfiguration(KendraIndexServerSideEncryptionConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kendraIndex.KendraIndex.putServerSideEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfiguration">KendraIndexServerSideEncryptionConfiguration</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.kendraIndex.KendraIndex.putTimeouts"></a>

```csharp
private void PutTimeouts(KendraIndexTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kendraIndex.KendraIndex.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts">KendraIndexTimeouts</a>

---

##### `PutUserGroupResolutionConfiguration` <a name="PutUserGroupResolutionConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndex.putUserGroupResolutionConfiguration"></a>

```csharp
private void PutUserGroupResolutionConfiguration(KendraIndexUserGroupResolutionConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kendraIndex.KendraIndex.putUserGroupResolutionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfiguration">KendraIndexUserGroupResolutionConfiguration</a>

---

##### `PutUserTokenConfigurations` <a name="PutUserTokenConfigurations" id="@cdktf/provider-aws.kendraIndex.KendraIndex.putUserTokenConfigurations"></a>

```csharp
private void PutUserTokenConfigurations(KendraIndexUserTokenConfigurations Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kendraIndex.KendraIndex.putUserTokenConfigurations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations">KendraIndexUserTokenConfigurations</a>

---

##### `ResetCapacityUnits` <a name="ResetCapacityUnits" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetCapacityUnits"></a>

```csharp
private void ResetCapacityUnits()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDocumentMetadataConfigurationUpdates` <a name="ResetDocumentMetadataConfigurationUpdates" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetDocumentMetadataConfigurationUpdates"></a>

```csharp
private void ResetDocumentMetadataConfigurationUpdates()
```

##### `ResetEdition` <a name="ResetEdition" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetEdition"></a>

```csharp
private void ResetEdition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetServerSideEncryptionConfiguration` <a name="ResetServerSideEncryptionConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetServerSideEncryptionConfiguration"></a>

```csharp
private void ResetServerSideEncryptionConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUserContextPolicy` <a name="ResetUserContextPolicy" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetUserContextPolicy"></a>

```csharp
private void ResetUserContextPolicy()
```

##### `ResetUserGroupResolutionConfiguration` <a name="ResetUserGroupResolutionConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetUserGroupResolutionConfiguration"></a>

```csharp
private void ResetUserGroupResolutionConfiguration()
```

##### `ResetUserTokenConfigurations` <a name="ResetUserTokenConfigurations" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetUserTokenConfigurations"></a>

```csharp
private void ResetUserTokenConfigurations()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.kendraIndex.KendraIndex.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

KendraIndex.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.kendraIndex.KendraIndex.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.kendraIndex.KendraIndex.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

KendraIndex.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.kendraIndex.KendraIndex.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndex.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

KendraIndex.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.kendraIndex.KendraIndex.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.capacityUnits">CapacityUnits</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference">KendraIndexCapacityUnitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.documentMetadataConfigurationUpdates">DocumentMetadataConfigurationUpdates</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList">KendraIndexDocumentMetadataConfigurationUpdatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.errorMessage">ErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.indexStatistics">IndexStatistics</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList">KendraIndexIndexStatisticsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.serverSideEncryptionConfiguration">ServerSideEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference">KendraIndexServerSideEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference">KendraIndexTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.userGroupResolutionConfiguration">UserGroupResolutionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference">KendraIndexUserGroupResolutionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.userTokenConfigurations">UserTokenConfigurations</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference">KendraIndexUserTokenConfigurationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.capacityUnitsInput">CapacityUnitsInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits">KendraIndexCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.documentMetadataConfigurationUpdatesInput">DocumentMetadataConfigurationUpdatesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.editionInput">EditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.serverSideEncryptionConfigurationInput">ServerSideEncryptionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfiguration">KendraIndexServerSideEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.userContextPolicyInput">UserContextPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.userGroupResolutionConfigurationInput">UserGroupResolutionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfiguration">KendraIndexUserGroupResolutionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.userTokenConfigurationsInput">UserTokenConfigurationsInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations">KendraIndexUserTokenConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.edition">Edition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.userContextPolicy">UserContextPolicy</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CapacityUnits`<sup>Required</sup> <a name="CapacityUnits" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.capacityUnits"></a>

```csharp
public KendraIndexCapacityUnitsOutputReference CapacityUnits { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference">KendraIndexCapacityUnitsOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DocumentMetadataConfigurationUpdates`<sup>Required</sup> <a name="DocumentMetadataConfigurationUpdates" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.documentMetadataConfigurationUpdates"></a>

```csharp
public KendraIndexDocumentMetadataConfigurationUpdatesList DocumentMetadataConfigurationUpdates { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList">KendraIndexDocumentMetadataConfigurationUpdatesList</a>

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.errorMessage"></a>

```csharp
public string ErrorMessage { get; }
```

- *Type:* string

---

##### `IndexStatistics`<sup>Required</sup> <a name="IndexStatistics" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.indexStatistics"></a>

```csharp
public KendraIndexIndexStatisticsList IndexStatistics { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList">KendraIndexIndexStatisticsList</a>

---

##### `ServerSideEncryptionConfiguration`<sup>Required</sup> <a name="ServerSideEncryptionConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.serverSideEncryptionConfiguration"></a>

```csharp
public KendraIndexServerSideEncryptionConfigurationOutputReference ServerSideEncryptionConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference">KendraIndexServerSideEncryptionConfigurationOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.timeouts"></a>

```csharp
public KendraIndexTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference">KendraIndexTimeoutsOutputReference</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `UserGroupResolutionConfiguration`<sup>Required</sup> <a name="UserGroupResolutionConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.userGroupResolutionConfiguration"></a>

```csharp
public KendraIndexUserGroupResolutionConfigurationOutputReference UserGroupResolutionConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference">KendraIndexUserGroupResolutionConfigurationOutputReference</a>

---

##### `UserTokenConfigurations`<sup>Required</sup> <a name="UserTokenConfigurations" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.userTokenConfigurations"></a>

```csharp
public KendraIndexUserTokenConfigurationsOutputReference UserTokenConfigurations { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference">KendraIndexUserTokenConfigurationsOutputReference</a>

---

##### `CapacityUnitsInput`<sup>Optional</sup> <a name="CapacityUnitsInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.capacityUnitsInput"></a>

```csharp
public KendraIndexCapacityUnits CapacityUnitsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits">KendraIndexCapacityUnits</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DocumentMetadataConfigurationUpdatesInput`<sup>Optional</sup> <a name="DocumentMetadataConfigurationUpdatesInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.documentMetadataConfigurationUpdatesInput"></a>

```csharp
public object DocumentMetadataConfigurationUpdatesInput { get; }
```

- *Type:* object

---

##### `EditionInput`<sup>Optional</sup> <a name="EditionInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.editionInput"></a>

```csharp
public string EditionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `ServerSideEncryptionConfigurationInput`<sup>Optional</sup> <a name="ServerSideEncryptionConfigurationInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.serverSideEncryptionConfigurationInput"></a>

```csharp
public KendraIndexServerSideEncryptionConfiguration ServerSideEncryptionConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfiguration">KendraIndexServerSideEncryptionConfiguration</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UserContextPolicyInput`<sup>Optional</sup> <a name="UserContextPolicyInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.userContextPolicyInput"></a>

```csharp
public string UserContextPolicyInput { get; }
```

- *Type:* string

---

##### `UserGroupResolutionConfigurationInput`<sup>Optional</sup> <a name="UserGroupResolutionConfigurationInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.userGroupResolutionConfigurationInput"></a>

```csharp
public KendraIndexUserGroupResolutionConfiguration UserGroupResolutionConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfiguration">KendraIndexUserGroupResolutionConfiguration</a>

---

##### `UserTokenConfigurationsInput`<sup>Optional</sup> <a name="UserTokenConfigurationsInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.userTokenConfigurationsInput"></a>

```csharp
public KendraIndexUserTokenConfigurations UserTokenConfigurationsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations">KendraIndexUserTokenConfigurations</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Edition`<sup>Required</sup> <a name="Edition" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.edition"></a>

```csharp
public string Edition { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UserContextPolicy`<sup>Required</sup> <a name="UserContextPolicy" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.userContextPolicy"></a>

```csharp
public string UserContextPolicy { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KendraIndexCapacityUnits <a name="KendraIndexCapacityUnits" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraIndexCapacityUnits {
    double QueryCapacityUnits = null,
    double StorageCapacityUnits = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits.property.queryCapacityUnits">QueryCapacityUnits</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#query_capacity_units KendraIndex#query_capacity_units}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits.property.storageCapacityUnits">StorageCapacityUnits</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#storage_capacity_units KendraIndex#storage_capacity_units}. |

---

##### `QueryCapacityUnits`<sup>Optional</sup> <a name="QueryCapacityUnits" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits.property.queryCapacityUnits"></a>

```csharp
public double QueryCapacityUnits { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#query_capacity_units KendraIndex#query_capacity_units}.

---

##### `StorageCapacityUnits`<sup>Optional</sup> <a name="StorageCapacityUnits" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits.property.storageCapacityUnits"></a>

```csharp
public double StorageCapacityUnits { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#storage_capacity_units KendraIndex#storage_capacity_units}.

---

### KendraIndexConfig <a name="KendraIndexConfig" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraIndexConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string RoleArn,
    KendraIndexCapacityUnits CapacityUnits = null,
    string Description = null,
    object DocumentMetadataConfigurationUpdates = null,
    string Edition = null,
    string Id = null,
    KendraIndexServerSideEncryptionConfiguration ServerSideEncryptionConfiguration = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    KendraIndexTimeouts Timeouts = null,
    string UserContextPolicy = null,
    KendraIndexUserGroupResolutionConfiguration UserGroupResolutionConfiguration = null,
    KendraIndexUserTokenConfigurations UserTokenConfigurations = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#name KendraIndex#name}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#role_arn KendraIndex#role_arn}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.capacityUnits">CapacityUnits</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits">KendraIndexCapacityUnits</a></code> | capacity_units block. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#description KendraIndex#description}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.documentMetadataConfigurationUpdates">DocumentMetadataConfigurationUpdates</a></code> | <code>object</code> | document_metadata_configuration_updates block. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.edition">Edition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#edition KendraIndex#edition}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#id KendraIndex#id}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.serverSideEncryptionConfiguration">ServerSideEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfiguration">KendraIndexServerSideEncryptionConfiguration</a></code> | server_side_encryption_configuration block. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#tags KendraIndex#tags}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#tags_all KendraIndex#tags_all}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts">KendraIndexTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.userContextPolicy">UserContextPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#user_context_policy KendraIndex#user_context_policy}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.userGroupResolutionConfiguration">UserGroupResolutionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfiguration">KendraIndexUserGroupResolutionConfiguration</a></code> | user_group_resolution_configuration block. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.userTokenConfigurations">UserTokenConfigurations</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations">KendraIndexUserTokenConfigurations</a></code> | user_token_configurations block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#name KendraIndex#name}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#role_arn KendraIndex#role_arn}.

---

##### `CapacityUnits`<sup>Optional</sup> <a name="CapacityUnits" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.capacityUnits"></a>

```csharp
public KendraIndexCapacityUnits CapacityUnits { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits">KendraIndexCapacityUnits</a>

capacity_units block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#capacity_units KendraIndex#capacity_units}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#description KendraIndex#description}.

---

##### `DocumentMetadataConfigurationUpdates`<sup>Optional</sup> <a name="DocumentMetadataConfigurationUpdates" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.documentMetadataConfigurationUpdates"></a>

```csharp
public object DocumentMetadataConfigurationUpdates { get; set; }
```

- *Type:* object

document_metadata_configuration_updates block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#document_metadata_configuration_updates KendraIndex#document_metadata_configuration_updates}

---

##### `Edition`<sup>Optional</sup> <a name="Edition" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.edition"></a>

```csharp
public string Edition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#edition KendraIndex#edition}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#id KendraIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ServerSideEncryptionConfiguration`<sup>Optional</sup> <a name="ServerSideEncryptionConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.serverSideEncryptionConfiguration"></a>

```csharp
public KendraIndexServerSideEncryptionConfiguration ServerSideEncryptionConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfiguration">KendraIndexServerSideEncryptionConfiguration</a>

server_side_encryption_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#server_side_encryption_configuration KendraIndex#server_side_encryption_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#tags KendraIndex#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#tags_all KendraIndex#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.timeouts"></a>

```csharp
public KendraIndexTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts">KendraIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#timeouts KendraIndex#timeouts}

---

##### `UserContextPolicy`<sup>Optional</sup> <a name="UserContextPolicy" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.userContextPolicy"></a>

```csharp
public string UserContextPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#user_context_policy KendraIndex#user_context_policy}.

---

##### `UserGroupResolutionConfiguration`<sup>Optional</sup> <a name="UserGroupResolutionConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.userGroupResolutionConfiguration"></a>

```csharp
public KendraIndexUserGroupResolutionConfiguration UserGroupResolutionConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfiguration">KendraIndexUserGroupResolutionConfiguration</a>

user_group_resolution_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#user_group_resolution_configuration KendraIndex#user_group_resolution_configuration}

---

##### `UserTokenConfigurations`<sup>Optional</sup> <a name="UserTokenConfigurations" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.userTokenConfigurations"></a>

```csharp
public KendraIndexUserTokenConfigurations UserTokenConfigurations { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations">KendraIndexUserTokenConfigurations</a>

user_token_configurations block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#user_token_configurations KendraIndex#user_token_configurations}

---

### KendraIndexDocumentMetadataConfigurationUpdates <a name="KendraIndexDocumentMetadataConfigurationUpdates" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraIndexDocumentMetadataConfigurationUpdates {
    string Name,
    string Type,
    KendraIndexDocumentMetadataConfigurationUpdatesRelevance Relevance = null,
    KendraIndexDocumentMetadataConfigurationUpdatesSearch Search = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#name KendraIndex#name}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#type KendraIndex#type}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates.property.relevance">Relevance</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance">KendraIndexDocumentMetadataConfigurationUpdatesRelevance</a></code> | relevance block. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates.property.search">Search</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch">KendraIndexDocumentMetadataConfigurationUpdatesSearch</a></code> | search block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#name KendraIndex#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#type KendraIndex#type}.

---

##### `Relevance`<sup>Optional</sup> <a name="Relevance" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates.property.relevance"></a>

```csharp
public KendraIndexDocumentMetadataConfigurationUpdatesRelevance Relevance { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance">KendraIndexDocumentMetadataConfigurationUpdatesRelevance</a>

relevance block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#relevance KendraIndex#relevance}

---

##### `Search`<sup>Optional</sup> <a name="Search" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates.property.search"></a>

```csharp
public KendraIndexDocumentMetadataConfigurationUpdatesSearch Search { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch">KendraIndexDocumentMetadataConfigurationUpdatesSearch</a>

search block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#search KendraIndex#search}

---

### KendraIndexDocumentMetadataConfigurationUpdatesRelevance <a name="KendraIndexDocumentMetadataConfigurationUpdatesRelevance" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraIndexDocumentMetadataConfigurationUpdatesRelevance {
    string Duration = null,
    object Freshness = null,
    double Importance = null,
    string RankOrder = null,
    System.Collections.Generic.IDictionary<string, double> ValuesImportanceMap = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance.property.duration">Duration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#duration KendraIndex#duration}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance.property.freshness">Freshness</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#freshness KendraIndex#freshness}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance.property.importance">Importance</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#importance KendraIndex#importance}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance.property.rankOrder">RankOrder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#rank_order KendraIndex#rank_order}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance.property.valuesImportanceMap">ValuesImportanceMap</a></code> | <code>System.Collections.Generic.IDictionary<string, double></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#values_importance_map KendraIndex#values_importance_map}. |

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance.property.duration"></a>

```csharp
public string Duration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#duration KendraIndex#duration}.

---

##### `Freshness`<sup>Optional</sup> <a name="Freshness" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance.property.freshness"></a>

```csharp
public object Freshness { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#freshness KendraIndex#freshness}.

---

##### `Importance`<sup>Optional</sup> <a name="Importance" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance.property.importance"></a>

```csharp
public double Importance { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#importance KendraIndex#importance}.

---

##### `RankOrder`<sup>Optional</sup> <a name="RankOrder" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance.property.rankOrder"></a>

```csharp
public string RankOrder { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#rank_order KendraIndex#rank_order}.

---

##### `ValuesImportanceMap`<sup>Optional</sup> <a name="ValuesImportanceMap" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance.property.valuesImportanceMap"></a>

```csharp
public System.Collections.Generic.IDictionary<string, double> ValuesImportanceMap { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, double>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#values_importance_map KendraIndex#values_importance_map}.

---

### KendraIndexDocumentMetadataConfigurationUpdatesSearch <a name="KendraIndexDocumentMetadataConfigurationUpdatesSearch" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraIndexDocumentMetadataConfigurationUpdatesSearch {
    object Displayable = null,
    object Facetable = null,
    object Searchable = null,
    object Sortable = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch.property.displayable">Displayable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#displayable KendraIndex#displayable}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch.property.facetable">Facetable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#facetable KendraIndex#facetable}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch.property.searchable">Searchable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#searchable KendraIndex#searchable}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch.property.sortable">Sortable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#sortable KendraIndex#sortable}. |

---

##### `Displayable`<sup>Optional</sup> <a name="Displayable" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch.property.displayable"></a>

```csharp
public object Displayable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#displayable KendraIndex#displayable}.

---

##### `Facetable`<sup>Optional</sup> <a name="Facetable" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch.property.facetable"></a>

```csharp
public object Facetable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#facetable KendraIndex#facetable}.

---

##### `Searchable`<sup>Optional</sup> <a name="Searchable" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch.property.searchable"></a>

```csharp
public object Searchable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#searchable KendraIndex#searchable}.

---

##### `Sortable`<sup>Optional</sup> <a name="Sortable" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch.property.sortable"></a>

```csharp
public object Sortable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#sortable KendraIndex#sortable}.

---

### KendraIndexIndexStatistics <a name="KendraIndexIndexStatistics" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatistics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatistics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraIndexIndexStatistics {

};
```


### KendraIndexIndexStatisticsFaqStatistics <a name="KendraIndexIndexStatisticsFaqStatistics" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatistics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatistics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraIndexIndexStatisticsFaqStatistics {

};
```


### KendraIndexIndexStatisticsTextDocumentStatistics <a name="KendraIndexIndexStatisticsTextDocumentStatistics" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatistics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatistics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraIndexIndexStatisticsTextDocumentStatistics {

};
```


### KendraIndexServerSideEncryptionConfiguration <a name="KendraIndexServerSideEncryptionConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraIndexServerSideEncryptionConfiguration {
    string KmsKeyId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfiguration.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#kms_key_id KendraIndex#kms_key_id}. |

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfiguration.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#kms_key_id KendraIndex#kms_key_id}.

---

### KendraIndexTimeouts <a name="KendraIndexTimeouts" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraIndexTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#create KendraIndex#create}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#delete KendraIndex#delete}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#update KendraIndex#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#create KendraIndex#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#delete KendraIndex#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#update KendraIndex#update}.

---

### KendraIndexUserGroupResolutionConfiguration <a name="KendraIndexUserGroupResolutionConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraIndexUserGroupResolutionConfiguration {
    string UserGroupResolutionMode
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfiguration.property.userGroupResolutionMode">UserGroupResolutionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#user_group_resolution_mode KendraIndex#user_group_resolution_mode}. |

---

##### `UserGroupResolutionMode`<sup>Required</sup> <a name="UserGroupResolutionMode" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfiguration.property.userGroupResolutionMode"></a>

```csharp
public string UserGroupResolutionMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#user_group_resolution_mode KendraIndex#user_group_resolution_mode}.

---

### KendraIndexUserTokenConfigurations <a name="KendraIndexUserTokenConfigurations" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraIndexUserTokenConfigurations {
    KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration JsonTokenTypeConfiguration = null,
    KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration JwtTokenTypeConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations.property.jsonTokenTypeConfiguration">JsonTokenTypeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration</a></code> | json_token_type_configuration block. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations.property.jwtTokenTypeConfiguration">JwtTokenTypeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration</a></code> | jwt_token_type_configuration block. |

---

##### `JsonTokenTypeConfiguration`<sup>Optional</sup> <a name="JsonTokenTypeConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations.property.jsonTokenTypeConfiguration"></a>

```csharp
public KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration JsonTokenTypeConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration</a>

json_token_type_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#json_token_type_configuration KendraIndex#json_token_type_configuration}

---

##### `JwtTokenTypeConfiguration`<sup>Optional</sup> <a name="JwtTokenTypeConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations.property.jwtTokenTypeConfiguration"></a>

```csharp
public KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration JwtTokenTypeConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration</a>

jwt_token_type_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#jwt_token_type_configuration KendraIndex#jwt_token_type_configuration}

---

### KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration <a name="KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration {
    string GroupAttributeField,
    string UserNameAttributeField
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration.property.groupAttributeField">GroupAttributeField</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#group_attribute_field KendraIndex#group_attribute_field}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration.property.userNameAttributeField">UserNameAttributeField</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#user_name_attribute_field KendraIndex#user_name_attribute_field}. |

---

##### `GroupAttributeField`<sup>Required</sup> <a name="GroupAttributeField" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration.property.groupAttributeField"></a>

```csharp
public string GroupAttributeField { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#group_attribute_field KendraIndex#group_attribute_field}.

---

##### `UserNameAttributeField`<sup>Required</sup> <a name="UserNameAttributeField" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration.property.userNameAttributeField"></a>

```csharp
public string UserNameAttributeField { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#user_name_attribute_field KendraIndex#user_name_attribute_field}.

---

### KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration <a name="KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration {
    string KeyLocation,
    string ClaimRegex = null,
    string GroupAttributeField = null,
    string Issuer = null,
    string SecretsManagerArn = null,
    string Url = null,
    string UserNameAttributeField = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.keyLocation">KeyLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#key_location KendraIndex#key_location}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.claimRegex">ClaimRegex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#claim_regex KendraIndex#claim_regex}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.groupAttributeField">GroupAttributeField</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#group_attribute_field KendraIndex#group_attribute_field}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.issuer">Issuer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#issuer KendraIndex#issuer}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.secretsManagerArn">SecretsManagerArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#secrets_manager_arn KendraIndex#secrets_manager_arn}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#url KendraIndex#url}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.userNameAttributeField">UserNameAttributeField</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#user_name_attribute_field KendraIndex#user_name_attribute_field}. |

---

##### `KeyLocation`<sup>Required</sup> <a name="KeyLocation" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.keyLocation"></a>

```csharp
public string KeyLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#key_location KendraIndex#key_location}.

---

##### `ClaimRegex`<sup>Optional</sup> <a name="ClaimRegex" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.claimRegex"></a>

```csharp
public string ClaimRegex { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#claim_regex KendraIndex#claim_regex}.

---

##### `GroupAttributeField`<sup>Optional</sup> <a name="GroupAttributeField" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.groupAttributeField"></a>

```csharp
public string GroupAttributeField { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#group_attribute_field KendraIndex#group_attribute_field}.

---

##### `Issuer`<sup>Optional</sup> <a name="Issuer" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.issuer"></a>

```csharp
public string Issuer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#issuer KendraIndex#issuer}.

---

##### `SecretsManagerArn`<sup>Optional</sup> <a name="SecretsManagerArn" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.secretsManagerArn"></a>

```csharp
public string SecretsManagerArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#secrets_manager_arn KendraIndex#secrets_manager_arn}.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#url KendraIndex#url}.

---

##### `UserNameAttributeField`<sup>Optional</sup> <a name="UserNameAttributeField" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.userNameAttributeField"></a>

```csharp
public string UserNameAttributeField { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#user_name_attribute_field KendraIndex#user_name_attribute_field}.

---

## Classes <a name="Classes" id="Classes"></a>

### KendraIndexCapacityUnitsOutputReference <a name="KendraIndexCapacityUnitsOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraIndexCapacityUnitsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.resetQueryCapacityUnits">ResetQueryCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.resetStorageCapacityUnits">ResetStorageCapacityUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetQueryCapacityUnits` <a name="ResetQueryCapacityUnits" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.resetQueryCapacityUnits"></a>

```csharp
private void ResetQueryCapacityUnits()
```

##### `ResetStorageCapacityUnits` <a name="ResetStorageCapacityUnits" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.resetStorageCapacityUnits"></a>

```csharp
private void ResetStorageCapacityUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.queryCapacityUnitsInput">QueryCapacityUnitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.storageCapacityUnitsInput">StorageCapacityUnitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.queryCapacityUnits">QueryCapacityUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.storageCapacityUnits">StorageCapacityUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits">KendraIndexCapacityUnits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `QueryCapacityUnitsInput`<sup>Optional</sup> <a name="QueryCapacityUnitsInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.queryCapacityUnitsInput"></a>

```csharp
public double QueryCapacityUnitsInput { get; }
```

- *Type:* double

---

##### `StorageCapacityUnitsInput`<sup>Optional</sup> <a name="StorageCapacityUnitsInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.storageCapacityUnitsInput"></a>

```csharp
public double StorageCapacityUnitsInput { get; }
```

- *Type:* double

---

##### `QueryCapacityUnits`<sup>Required</sup> <a name="QueryCapacityUnits" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.queryCapacityUnits"></a>

```csharp
public double QueryCapacityUnits { get; }
```

- *Type:* double

---

##### `StorageCapacityUnits`<sup>Required</sup> <a name="StorageCapacityUnits" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.storageCapacityUnits"></a>

```csharp
public double StorageCapacityUnits { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.internalValue"></a>

```csharp
public KendraIndexCapacityUnits InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits">KendraIndexCapacityUnits</a>

---


### KendraIndexDocumentMetadataConfigurationUpdatesList <a name="KendraIndexDocumentMetadataConfigurationUpdatesList" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraIndexDocumentMetadataConfigurationUpdatesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.get"></a>

```csharp
private KendraIndexDocumentMetadataConfigurationUpdatesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KendraIndexDocumentMetadataConfigurationUpdatesOutputReference <a name="KendraIndexDocumentMetadataConfigurationUpdatesOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraIndexDocumentMetadataConfigurationUpdatesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.putRelevance">PutRelevance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.putSearch">PutSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.resetRelevance">ResetRelevance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.resetSearch">ResetSearch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRelevance` <a name="PutRelevance" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.putRelevance"></a>

```csharp
private void PutRelevance(KendraIndexDocumentMetadataConfigurationUpdatesRelevance Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.putRelevance.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance">KendraIndexDocumentMetadataConfigurationUpdatesRelevance</a>

---

##### `PutSearch` <a name="PutSearch" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.putSearch"></a>

```csharp
private void PutSearch(KendraIndexDocumentMetadataConfigurationUpdatesSearch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.putSearch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch">KendraIndexDocumentMetadataConfigurationUpdatesSearch</a>

---

##### `ResetRelevance` <a name="ResetRelevance" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.resetRelevance"></a>

```csharp
private void ResetRelevance()
```

##### `ResetSearch` <a name="ResetSearch" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.resetSearch"></a>

```csharp
private void ResetSearch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.relevance">Relevance</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference">KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.search">Search</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference">KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.relevanceInput">RelevanceInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance">KendraIndexDocumentMetadataConfigurationUpdatesRelevance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.searchInput">SearchInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch">KendraIndexDocumentMetadataConfigurationUpdatesSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Relevance`<sup>Required</sup> <a name="Relevance" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.relevance"></a>

```csharp
public KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference Relevance { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference">KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference</a>

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.search"></a>

```csharp
public KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference Search { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference">KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RelevanceInput`<sup>Optional</sup> <a name="RelevanceInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.relevanceInput"></a>

```csharp
public KendraIndexDocumentMetadataConfigurationUpdatesRelevance RelevanceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance">KendraIndexDocumentMetadataConfigurationUpdatesRelevance</a>

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.searchInput"></a>

```csharp
public KendraIndexDocumentMetadataConfigurationUpdatesSearch SearchInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch">KendraIndexDocumentMetadataConfigurationUpdatesSearch</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference <a name="KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resetDuration">ResetDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resetFreshness">ResetFreshness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resetImportance">ResetImportance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resetRankOrder">ResetRankOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resetValuesImportanceMap">ResetValuesImportanceMap</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDuration` <a name="ResetDuration" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resetDuration"></a>

```csharp
private void ResetDuration()
```

##### `ResetFreshness` <a name="ResetFreshness" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resetFreshness"></a>

```csharp
private void ResetFreshness()
```

##### `ResetImportance` <a name="ResetImportance" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resetImportance"></a>

```csharp
private void ResetImportance()
```

##### `ResetRankOrder` <a name="ResetRankOrder" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resetRankOrder"></a>

```csharp
private void ResetRankOrder()
```

##### `ResetValuesImportanceMap` <a name="ResetValuesImportanceMap" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resetValuesImportanceMap"></a>

```csharp
private void ResetValuesImportanceMap()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.durationInput">DurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.freshnessInput">FreshnessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.importanceInput">ImportanceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.rankOrderInput">RankOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.valuesImportanceMapInput">ValuesImportanceMapInput</a></code> | <code>System.Collections.Generic.IDictionary<string, double></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.freshness">Freshness</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.importance">Importance</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.rankOrder">RankOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.valuesImportanceMap">ValuesImportanceMap</a></code> | <code>System.Collections.Generic.IDictionary<string, double></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance">KendraIndexDocumentMetadataConfigurationUpdatesRelevance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.durationInput"></a>

```csharp
public string DurationInput { get; }
```

- *Type:* string

---

##### `FreshnessInput`<sup>Optional</sup> <a name="FreshnessInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.freshnessInput"></a>

```csharp
public object FreshnessInput { get; }
```

- *Type:* object

---

##### `ImportanceInput`<sup>Optional</sup> <a name="ImportanceInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.importanceInput"></a>

```csharp
public double ImportanceInput { get; }
```

- *Type:* double

---

##### `RankOrderInput`<sup>Optional</sup> <a name="RankOrderInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.rankOrderInput"></a>

```csharp
public string RankOrderInput { get; }
```

- *Type:* string

---

##### `ValuesImportanceMapInput`<sup>Optional</sup> <a name="ValuesImportanceMapInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.valuesImportanceMapInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, double> ValuesImportanceMapInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, double>

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `Freshness`<sup>Required</sup> <a name="Freshness" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.freshness"></a>

```csharp
public object Freshness { get; }
```

- *Type:* object

---

##### `Importance`<sup>Required</sup> <a name="Importance" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.importance"></a>

```csharp
public double Importance { get; }
```

- *Type:* double

---

##### `RankOrder`<sup>Required</sup> <a name="RankOrder" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.rankOrder"></a>

```csharp
public string RankOrder { get; }
```

- *Type:* string

---

##### `ValuesImportanceMap`<sup>Required</sup> <a name="ValuesImportanceMap" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.valuesImportanceMap"></a>

```csharp
public System.Collections.Generic.IDictionary<string, double> ValuesImportanceMap { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, double>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.internalValue"></a>

```csharp
public KendraIndexDocumentMetadataConfigurationUpdatesRelevance InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance">KendraIndexDocumentMetadataConfigurationUpdatesRelevance</a>

---


### KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference <a name="KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resetDisplayable">ResetDisplayable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resetFacetable">ResetFacetable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resetSearchable">ResetSearchable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resetSortable">ResetSortable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayable` <a name="ResetDisplayable" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resetDisplayable"></a>

```csharp
private void ResetDisplayable()
```

##### `ResetFacetable` <a name="ResetFacetable" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resetFacetable"></a>

```csharp
private void ResetFacetable()
```

##### `ResetSearchable` <a name="ResetSearchable" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resetSearchable"></a>

```csharp
private void ResetSearchable()
```

##### `ResetSortable` <a name="ResetSortable" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resetSortable"></a>

```csharp
private void ResetSortable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.displayableInput">DisplayableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.facetableInput">FacetableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.searchableInput">SearchableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.sortableInput">SortableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.displayable">Displayable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.facetable">Facetable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.searchable">Searchable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.sortable">Sortable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch">KendraIndexDocumentMetadataConfigurationUpdatesSearch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayableInput`<sup>Optional</sup> <a name="DisplayableInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.displayableInput"></a>

```csharp
public object DisplayableInput { get; }
```

- *Type:* object

---

##### `FacetableInput`<sup>Optional</sup> <a name="FacetableInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.facetableInput"></a>

```csharp
public object FacetableInput { get; }
```

- *Type:* object

---

##### `SearchableInput`<sup>Optional</sup> <a name="SearchableInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.searchableInput"></a>

```csharp
public object SearchableInput { get; }
```

- *Type:* object

---

##### `SortableInput`<sup>Optional</sup> <a name="SortableInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.sortableInput"></a>

```csharp
public object SortableInput { get; }
```

- *Type:* object

---

##### `Displayable`<sup>Required</sup> <a name="Displayable" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.displayable"></a>

```csharp
public object Displayable { get; }
```

- *Type:* object

---

##### `Facetable`<sup>Required</sup> <a name="Facetable" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.facetable"></a>

```csharp
public object Facetable { get; }
```

- *Type:* object

---

##### `Searchable`<sup>Required</sup> <a name="Searchable" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.searchable"></a>

```csharp
public object Searchable { get; }
```

- *Type:* object

---

##### `Sortable`<sup>Required</sup> <a name="Sortable" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.sortable"></a>

```csharp
public object Sortable { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.internalValue"></a>

```csharp
public KendraIndexDocumentMetadataConfigurationUpdatesSearch InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch">KendraIndexDocumentMetadataConfigurationUpdatesSearch</a>

---


### KendraIndexIndexStatisticsFaqStatisticsList <a name="KendraIndexIndexStatisticsFaqStatisticsList" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraIndexIndexStatisticsFaqStatisticsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.get"></a>

```csharp
private KendraIndexIndexStatisticsFaqStatisticsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### KendraIndexIndexStatisticsFaqStatisticsOutputReference <a name="KendraIndexIndexStatisticsFaqStatisticsOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraIndexIndexStatisticsFaqStatisticsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.property.indexedQuestionAnswersCount">IndexedQuestionAnswersCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatistics">KendraIndexIndexStatisticsFaqStatistics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IndexedQuestionAnswersCount`<sup>Required</sup> <a name="IndexedQuestionAnswersCount" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.property.indexedQuestionAnswersCount"></a>

```csharp
public double IndexedQuestionAnswersCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.property.internalValue"></a>

```csharp
public KendraIndexIndexStatisticsFaqStatistics InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatistics">KendraIndexIndexStatisticsFaqStatistics</a>

---


### KendraIndexIndexStatisticsList <a name="KendraIndexIndexStatisticsList" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraIndexIndexStatisticsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.get"></a>

```csharp
private KendraIndexIndexStatisticsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### KendraIndexIndexStatisticsOutputReference <a name="KendraIndexIndexStatisticsOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraIndexIndexStatisticsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.property.faqStatistics">FaqStatistics</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList">KendraIndexIndexStatisticsFaqStatisticsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.property.textDocumentStatistics">TextDocumentStatistics</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList">KendraIndexIndexStatisticsTextDocumentStatisticsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatistics">KendraIndexIndexStatistics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FaqStatistics`<sup>Required</sup> <a name="FaqStatistics" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.property.faqStatistics"></a>

```csharp
public KendraIndexIndexStatisticsFaqStatisticsList FaqStatistics { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList">KendraIndexIndexStatisticsFaqStatisticsList</a>

---

##### `TextDocumentStatistics`<sup>Required</sup> <a name="TextDocumentStatistics" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.property.textDocumentStatistics"></a>

```csharp
public KendraIndexIndexStatisticsTextDocumentStatisticsList TextDocumentStatistics { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList">KendraIndexIndexStatisticsTextDocumentStatisticsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.property.internalValue"></a>

```csharp
public KendraIndexIndexStatistics InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatistics">KendraIndexIndexStatistics</a>

---


### KendraIndexIndexStatisticsTextDocumentStatisticsList <a name="KendraIndexIndexStatisticsTextDocumentStatisticsList" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraIndexIndexStatisticsTextDocumentStatisticsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.get"></a>

```csharp
private KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference <a name="KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.indexedTextBytes">IndexedTextBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.indexedTextDocumentsCount">IndexedTextDocumentsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatistics">KendraIndexIndexStatisticsTextDocumentStatistics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IndexedTextBytes`<sup>Required</sup> <a name="IndexedTextBytes" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.indexedTextBytes"></a>

```csharp
public double IndexedTextBytes { get; }
```

- *Type:* double

---

##### `IndexedTextDocumentsCount`<sup>Required</sup> <a name="IndexedTextDocumentsCount" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.indexedTextDocumentsCount"></a>

```csharp
public double IndexedTextDocumentsCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.internalValue"></a>

```csharp
public KendraIndexIndexStatisticsTextDocumentStatistics InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatistics">KendraIndexIndexStatisticsTextDocumentStatistics</a>

---


### KendraIndexServerSideEncryptionConfigurationOutputReference <a name="KendraIndexServerSideEncryptionConfigurationOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraIndexServerSideEncryptionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfiguration">KendraIndexServerSideEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.property.internalValue"></a>

```csharp
public KendraIndexServerSideEncryptionConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfiguration">KendraIndexServerSideEncryptionConfiguration</a>

---


### KendraIndexTimeoutsOutputReference <a name="KendraIndexTimeoutsOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraIndexTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KendraIndexUserGroupResolutionConfigurationOutputReference <a name="KendraIndexUserGroupResolutionConfigurationOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraIndexUserGroupResolutionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.property.userGroupResolutionModeInput">UserGroupResolutionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.property.userGroupResolutionMode">UserGroupResolutionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfiguration">KendraIndexUserGroupResolutionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UserGroupResolutionModeInput`<sup>Optional</sup> <a name="UserGroupResolutionModeInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.property.userGroupResolutionModeInput"></a>

```csharp
public string UserGroupResolutionModeInput { get; }
```

- *Type:* string

---

##### `UserGroupResolutionMode`<sup>Required</sup> <a name="UserGroupResolutionMode" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.property.userGroupResolutionMode"></a>

```csharp
public string UserGroupResolutionMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.property.internalValue"></a>

```csharp
public KendraIndexUserGroupResolutionConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfiguration">KendraIndexUserGroupResolutionConfiguration</a>

---


### KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference <a name="KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.groupAttributeFieldInput">GroupAttributeFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.userNameAttributeFieldInput">UserNameAttributeFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.groupAttributeField">GroupAttributeField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.userNameAttributeField">UserNameAttributeField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroupAttributeFieldInput`<sup>Optional</sup> <a name="GroupAttributeFieldInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.groupAttributeFieldInput"></a>

```csharp
public string GroupAttributeFieldInput { get; }
```

- *Type:* string

---

##### `UserNameAttributeFieldInput`<sup>Optional</sup> <a name="UserNameAttributeFieldInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.userNameAttributeFieldInput"></a>

```csharp
public string UserNameAttributeFieldInput { get; }
```

- *Type:* string

---

##### `GroupAttributeField`<sup>Required</sup> <a name="GroupAttributeField" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.groupAttributeField"></a>

```csharp
public string GroupAttributeField { get; }
```

- *Type:* string

---

##### `UserNameAttributeField`<sup>Required</sup> <a name="UserNameAttributeField" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.userNameAttributeField"></a>

```csharp
public string UserNameAttributeField { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.internalValue"></a>

```csharp
public KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration</a>

---


### KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference <a name="KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetClaimRegex">ResetClaimRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetGroupAttributeField">ResetGroupAttributeField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetIssuer">ResetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetSecretsManagerArn">ResetSecretsManagerArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetUserNameAttributeField">ResetUserNameAttributeField</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClaimRegex` <a name="ResetClaimRegex" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetClaimRegex"></a>

```csharp
private void ResetClaimRegex()
```

##### `ResetGroupAttributeField` <a name="ResetGroupAttributeField" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetGroupAttributeField"></a>

```csharp
private void ResetGroupAttributeField()
```

##### `ResetIssuer` <a name="ResetIssuer" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetIssuer"></a>

```csharp
private void ResetIssuer()
```

##### `ResetSecretsManagerArn` <a name="ResetSecretsManagerArn" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetSecretsManagerArn"></a>

```csharp
private void ResetSecretsManagerArn()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetUrl"></a>

```csharp
private void ResetUrl()
```

##### `ResetUserNameAttributeField` <a name="ResetUserNameAttributeField" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetUserNameAttributeField"></a>

```csharp
private void ResetUserNameAttributeField()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.claimRegexInput">ClaimRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.groupAttributeFieldInput">GroupAttributeFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.issuerInput">IssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.keyLocationInput">KeyLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.secretsManagerArnInput">SecretsManagerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.userNameAttributeFieldInput">UserNameAttributeFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.claimRegex">ClaimRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.groupAttributeField">GroupAttributeField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.keyLocation">KeyLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.secretsManagerArn">SecretsManagerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.userNameAttributeField">UserNameAttributeField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClaimRegexInput`<sup>Optional</sup> <a name="ClaimRegexInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.claimRegexInput"></a>

```csharp
public string ClaimRegexInput { get; }
```

- *Type:* string

---

##### `GroupAttributeFieldInput`<sup>Optional</sup> <a name="GroupAttributeFieldInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.groupAttributeFieldInput"></a>

```csharp
public string GroupAttributeFieldInput { get; }
```

- *Type:* string

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.issuerInput"></a>

```csharp
public string IssuerInput { get; }
```

- *Type:* string

---

##### `KeyLocationInput`<sup>Optional</sup> <a name="KeyLocationInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.keyLocationInput"></a>

```csharp
public string KeyLocationInput { get; }
```

- *Type:* string

---

##### `SecretsManagerArnInput`<sup>Optional</sup> <a name="SecretsManagerArnInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.secretsManagerArnInput"></a>

```csharp
public string SecretsManagerArnInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `UserNameAttributeFieldInput`<sup>Optional</sup> <a name="UserNameAttributeFieldInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.userNameAttributeFieldInput"></a>

```csharp
public string UserNameAttributeFieldInput { get; }
```

- *Type:* string

---

##### `ClaimRegex`<sup>Required</sup> <a name="ClaimRegex" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.claimRegex"></a>

```csharp
public string ClaimRegex { get; }
```

- *Type:* string

---

##### `GroupAttributeField`<sup>Required</sup> <a name="GroupAttributeField" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.groupAttributeField"></a>

```csharp
public string GroupAttributeField { get; }
```

- *Type:* string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `KeyLocation`<sup>Required</sup> <a name="KeyLocation" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.keyLocation"></a>

```csharp
public string KeyLocation { get; }
```

- *Type:* string

---

##### `SecretsManagerArn`<sup>Required</sup> <a name="SecretsManagerArn" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.secretsManagerArn"></a>

```csharp
public string SecretsManagerArn { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `UserNameAttributeField`<sup>Required</sup> <a name="UserNameAttributeField" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.userNameAttributeField"></a>

```csharp
public string UserNameAttributeField { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.internalValue"></a>

```csharp
public KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration</a>

---


### KendraIndexUserTokenConfigurationsOutputReference <a name="KendraIndexUserTokenConfigurationsOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KendraIndexUserTokenConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.putJsonTokenTypeConfiguration">PutJsonTokenTypeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.putJwtTokenTypeConfiguration">PutJwtTokenTypeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.resetJsonTokenTypeConfiguration">ResetJsonTokenTypeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.resetJwtTokenTypeConfiguration">ResetJwtTokenTypeConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutJsonTokenTypeConfiguration` <a name="PutJsonTokenTypeConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.putJsonTokenTypeConfiguration"></a>

```csharp
private void PutJsonTokenTypeConfiguration(KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.putJsonTokenTypeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration</a>

---

##### `PutJwtTokenTypeConfiguration` <a name="PutJwtTokenTypeConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.putJwtTokenTypeConfiguration"></a>

```csharp
private void PutJwtTokenTypeConfiguration(KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.putJwtTokenTypeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration</a>

---

##### `ResetJsonTokenTypeConfiguration` <a name="ResetJsonTokenTypeConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.resetJsonTokenTypeConfiguration"></a>

```csharp
private void ResetJsonTokenTypeConfiguration()
```

##### `ResetJwtTokenTypeConfiguration` <a name="ResetJwtTokenTypeConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.resetJwtTokenTypeConfiguration"></a>

```csharp
private void ResetJwtTokenTypeConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.jsonTokenTypeConfiguration">JsonTokenTypeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference">KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.jwtTokenTypeConfiguration">JwtTokenTypeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference">KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.jsonTokenTypeConfigurationInput">JsonTokenTypeConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.jwtTokenTypeConfigurationInput">JwtTokenTypeConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations">KendraIndexUserTokenConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `JsonTokenTypeConfiguration`<sup>Required</sup> <a name="JsonTokenTypeConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.jsonTokenTypeConfiguration"></a>

```csharp
public KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference JsonTokenTypeConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference">KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference</a>

---

##### `JwtTokenTypeConfiguration`<sup>Required</sup> <a name="JwtTokenTypeConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.jwtTokenTypeConfiguration"></a>

```csharp
public KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference JwtTokenTypeConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference">KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference</a>

---

##### `JsonTokenTypeConfigurationInput`<sup>Optional</sup> <a name="JsonTokenTypeConfigurationInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.jsonTokenTypeConfigurationInput"></a>

```csharp
public KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration JsonTokenTypeConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration</a>

---

##### `JwtTokenTypeConfigurationInput`<sup>Optional</sup> <a name="JwtTokenTypeConfigurationInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.jwtTokenTypeConfigurationInput"></a>

```csharp
public KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration JwtTokenTypeConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.internalValue"></a>

```csharp
public KendraIndexUserTokenConfigurations InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations">KendraIndexUserTokenConfigurations</a>

---



