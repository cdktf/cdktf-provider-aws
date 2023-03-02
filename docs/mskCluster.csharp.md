# `mskCluster` Submodule <a name="`mskCluster` Submodule" id="@cdktf/provider-aws.mskCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MskCluster <a name="MskCluster" id="@cdktf/provider-aws.mskCluster.MskCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster aws_msk_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskCluster(Construct Scope, string Id, MskClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig">MskClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.mskCluster.MskCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig">MskClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.putBrokerNodeGroupInfo">PutBrokerNodeGroupInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.putClientAuthentication">PutClientAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.putConfigurationInfo">PutConfigurationInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.putEncryptionInfo">PutEncryptionInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.putLoggingInfo">PutLoggingInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.putOpenMonitoring">PutOpenMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.resetClientAuthentication">ResetClientAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.resetConfigurationInfo">ResetConfigurationInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.resetEncryptionInfo">ResetEncryptionInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.resetEnhancedMonitoring">ResetEnhancedMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.resetLoggingInfo">ResetLoggingInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.resetOpenMonitoring">ResetOpenMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.resetStorageMode">ResetStorageMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskCluster.MskCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.mskCluster.MskCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.mskCluster.MskCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mskCluster.MskCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.mskCluster.MskCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.mskCluster.MskCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.mskCluster.MskCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.mskCluster.MskCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.mskCluster.MskCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutBrokerNodeGroupInfo` <a name="PutBrokerNodeGroupInfo" id="@cdktf/provider-aws.mskCluster.MskCluster.putBrokerNodeGroupInfo"></a>

```csharp
private void PutBrokerNodeGroupInfo(MskClusterBrokerNodeGroupInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mskCluster.MskCluster.putBrokerNodeGroupInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo">MskClusterBrokerNodeGroupInfo</a>

---

##### `PutClientAuthentication` <a name="PutClientAuthentication" id="@cdktf/provider-aws.mskCluster.MskCluster.putClientAuthentication"></a>

```csharp
private void PutClientAuthentication(MskClusterClientAuthentication Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mskCluster.MskCluster.putClientAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthentication">MskClusterClientAuthentication</a>

---

##### `PutConfigurationInfo` <a name="PutConfigurationInfo" id="@cdktf/provider-aws.mskCluster.MskCluster.putConfigurationInfo"></a>

```csharp
private void PutConfigurationInfo(MskClusterConfigurationInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mskCluster.MskCluster.putConfigurationInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfo">MskClusterConfigurationInfo</a>

---

##### `PutEncryptionInfo` <a name="PutEncryptionInfo" id="@cdktf/provider-aws.mskCluster.MskCluster.putEncryptionInfo"></a>

```csharp
private void PutEncryptionInfo(MskClusterEncryptionInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mskCluster.MskCluster.putEncryptionInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfo">MskClusterEncryptionInfo</a>

---

##### `PutLoggingInfo` <a name="PutLoggingInfo" id="@cdktf/provider-aws.mskCluster.MskCluster.putLoggingInfo"></a>

```csharp
private void PutLoggingInfo(MskClusterLoggingInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mskCluster.MskCluster.putLoggingInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfo">MskClusterLoggingInfo</a>

---

##### `PutOpenMonitoring` <a name="PutOpenMonitoring" id="@cdktf/provider-aws.mskCluster.MskCluster.putOpenMonitoring"></a>

```csharp
private void PutOpenMonitoring(MskClusterOpenMonitoring Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mskCluster.MskCluster.putOpenMonitoring.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoring">MskClusterOpenMonitoring</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.mskCluster.MskCluster.putTimeouts"></a>

```csharp
private void PutTimeouts(MskClusterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mskCluster.MskCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeouts">MskClusterTimeouts</a>

---

##### `ResetClientAuthentication` <a name="ResetClientAuthentication" id="@cdktf/provider-aws.mskCluster.MskCluster.resetClientAuthentication"></a>

```csharp
private void ResetClientAuthentication()
```

##### `ResetConfigurationInfo` <a name="ResetConfigurationInfo" id="@cdktf/provider-aws.mskCluster.MskCluster.resetConfigurationInfo"></a>

```csharp
private void ResetConfigurationInfo()
```

##### `ResetEncryptionInfo` <a name="ResetEncryptionInfo" id="@cdktf/provider-aws.mskCluster.MskCluster.resetEncryptionInfo"></a>

```csharp
private void ResetEncryptionInfo()
```

##### `ResetEnhancedMonitoring` <a name="ResetEnhancedMonitoring" id="@cdktf/provider-aws.mskCluster.MskCluster.resetEnhancedMonitoring"></a>

```csharp
private void ResetEnhancedMonitoring()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.mskCluster.MskCluster.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLoggingInfo` <a name="ResetLoggingInfo" id="@cdktf/provider-aws.mskCluster.MskCluster.resetLoggingInfo"></a>

```csharp
private void ResetLoggingInfo()
```

##### `ResetOpenMonitoring` <a name="ResetOpenMonitoring" id="@cdktf/provider-aws.mskCluster.MskCluster.resetOpenMonitoring"></a>

```csharp
private void ResetOpenMonitoring()
```

##### `ResetStorageMode` <a name="ResetStorageMode" id="@cdktf/provider-aws.mskCluster.MskCluster.resetStorageMode"></a>

```csharp
private void ResetStorageMode()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.mskCluster.MskCluster.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.mskCluster.MskCluster.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.mskCluster.MskCluster.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.mskCluster.MskCluster.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

MskCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.mskCluster.MskCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.mskCluster.MskCluster.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

MskCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.mskCluster.MskCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.mskCluster.MskCluster.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

MskCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.mskCluster.MskCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.bootstrapBrokers">BootstrapBrokers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.bootstrapBrokersPublicSaslIam">BootstrapBrokersPublicSaslIam</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.bootstrapBrokersPublicSaslScram">BootstrapBrokersPublicSaslScram</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.bootstrapBrokersPublicTls">BootstrapBrokersPublicTls</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.bootstrapBrokersSaslIam">BootstrapBrokersSaslIam</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.bootstrapBrokersSaslScram">BootstrapBrokersSaslScram</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.bootstrapBrokersTls">BootstrapBrokersTls</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.brokerNodeGroupInfo">BrokerNodeGroupInfo</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference">MskClusterBrokerNodeGroupInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.clientAuthentication">ClientAuthentication</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference">MskClusterClientAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.configurationInfo">ConfigurationInfo</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference">MskClusterConfigurationInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.currentVersion">CurrentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.encryptionInfo">EncryptionInfo</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference">MskClusterEncryptionInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.loggingInfo">LoggingInfo</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference">MskClusterLoggingInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.openMonitoring">OpenMonitoring</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference">MskClusterOpenMonitoringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference">MskClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.zookeeperConnectString">ZookeeperConnectString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.zookeeperConnectStringTls">ZookeeperConnectStringTls</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.brokerNodeGroupInfoInput">BrokerNodeGroupInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo">MskClusterBrokerNodeGroupInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.clientAuthenticationInput">ClientAuthenticationInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthentication">MskClusterClientAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.clusterNameInput">ClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.configurationInfoInput">ConfigurationInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfo">MskClusterConfigurationInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.encryptionInfoInput">EncryptionInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfo">MskClusterEncryptionInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.enhancedMonitoringInput">EnhancedMonitoringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.kafkaVersionInput">KafkaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.loggingInfoInput">LoggingInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfo">MskClusterLoggingInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.numberOfBrokerNodesInput">NumberOfBrokerNodesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.openMonitoringInput">OpenMonitoringInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoring">MskClusterOpenMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.storageModeInput">StorageModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.clusterName">ClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.enhancedMonitoring">EnhancedMonitoring</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.kafkaVersion">KafkaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.numberOfBrokerNodes">NumberOfBrokerNodes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.storageMode">StorageMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.mskCluster.MskCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.mskCluster.MskCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskCluster.MskCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.mskCluster.MskCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.mskCluster.MskCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.mskCluster.MskCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.mskCluster.MskCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.mskCluster.MskCluster.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.mskCluster.MskCluster.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.mskCluster.MskCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.mskCluster.MskCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.mskCluster.MskCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.mskCluster.MskCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.mskCluster.MskCluster.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.mskCluster.MskCluster.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `BootstrapBrokers`<sup>Required</sup> <a name="BootstrapBrokers" id="@cdktf/provider-aws.mskCluster.MskCluster.property.bootstrapBrokers"></a>

```csharp
public string BootstrapBrokers { get; }
```

- *Type:* string

---

##### `BootstrapBrokersPublicSaslIam`<sup>Required</sup> <a name="BootstrapBrokersPublicSaslIam" id="@cdktf/provider-aws.mskCluster.MskCluster.property.bootstrapBrokersPublicSaslIam"></a>

```csharp
public string BootstrapBrokersPublicSaslIam { get; }
```

- *Type:* string

---

##### `BootstrapBrokersPublicSaslScram`<sup>Required</sup> <a name="BootstrapBrokersPublicSaslScram" id="@cdktf/provider-aws.mskCluster.MskCluster.property.bootstrapBrokersPublicSaslScram"></a>

```csharp
public string BootstrapBrokersPublicSaslScram { get; }
```

- *Type:* string

---

##### `BootstrapBrokersPublicTls`<sup>Required</sup> <a name="BootstrapBrokersPublicTls" id="@cdktf/provider-aws.mskCluster.MskCluster.property.bootstrapBrokersPublicTls"></a>

```csharp
public string BootstrapBrokersPublicTls { get; }
```

- *Type:* string

---

##### `BootstrapBrokersSaslIam`<sup>Required</sup> <a name="BootstrapBrokersSaslIam" id="@cdktf/provider-aws.mskCluster.MskCluster.property.bootstrapBrokersSaslIam"></a>

```csharp
public string BootstrapBrokersSaslIam { get; }
```

- *Type:* string

---

##### `BootstrapBrokersSaslScram`<sup>Required</sup> <a name="BootstrapBrokersSaslScram" id="@cdktf/provider-aws.mskCluster.MskCluster.property.bootstrapBrokersSaslScram"></a>

```csharp
public string BootstrapBrokersSaslScram { get; }
```

- *Type:* string

---

##### `BootstrapBrokersTls`<sup>Required</sup> <a name="BootstrapBrokersTls" id="@cdktf/provider-aws.mskCluster.MskCluster.property.bootstrapBrokersTls"></a>

```csharp
public string BootstrapBrokersTls { get; }
```

- *Type:* string

---

##### `BrokerNodeGroupInfo`<sup>Required</sup> <a name="BrokerNodeGroupInfo" id="@cdktf/provider-aws.mskCluster.MskCluster.property.brokerNodeGroupInfo"></a>

```csharp
public MskClusterBrokerNodeGroupInfoOutputReference BrokerNodeGroupInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference">MskClusterBrokerNodeGroupInfoOutputReference</a>

---

##### `ClientAuthentication`<sup>Required</sup> <a name="ClientAuthentication" id="@cdktf/provider-aws.mskCluster.MskCluster.property.clientAuthentication"></a>

```csharp
public MskClusterClientAuthenticationOutputReference ClientAuthentication { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference">MskClusterClientAuthenticationOutputReference</a>

---

##### `ConfigurationInfo`<sup>Required</sup> <a name="ConfigurationInfo" id="@cdktf/provider-aws.mskCluster.MskCluster.property.configurationInfo"></a>

```csharp
public MskClusterConfigurationInfoOutputReference ConfigurationInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference">MskClusterConfigurationInfoOutputReference</a>

---

##### `CurrentVersion`<sup>Required</sup> <a name="CurrentVersion" id="@cdktf/provider-aws.mskCluster.MskCluster.property.currentVersion"></a>

```csharp
public string CurrentVersion { get; }
```

- *Type:* string

---

##### `EncryptionInfo`<sup>Required</sup> <a name="EncryptionInfo" id="@cdktf/provider-aws.mskCluster.MskCluster.property.encryptionInfo"></a>

```csharp
public MskClusterEncryptionInfoOutputReference EncryptionInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference">MskClusterEncryptionInfoOutputReference</a>

---

##### `LoggingInfo`<sup>Required</sup> <a name="LoggingInfo" id="@cdktf/provider-aws.mskCluster.MskCluster.property.loggingInfo"></a>

```csharp
public MskClusterLoggingInfoOutputReference LoggingInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference">MskClusterLoggingInfoOutputReference</a>

---

##### `OpenMonitoring`<sup>Required</sup> <a name="OpenMonitoring" id="@cdktf/provider-aws.mskCluster.MskCluster.property.openMonitoring"></a>

```csharp
public MskClusterOpenMonitoringOutputReference OpenMonitoring { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference">MskClusterOpenMonitoringOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.mskCluster.MskCluster.property.timeouts"></a>

```csharp
public MskClusterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference">MskClusterTimeoutsOutputReference</a>

---

##### `ZookeeperConnectString`<sup>Required</sup> <a name="ZookeeperConnectString" id="@cdktf/provider-aws.mskCluster.MskCluster.property.zookeeperConnectString"></a>

```csharp
public string ZookeeperConnectString { get; }
```

- *Type:* string

---

##### `ZookeeperConnectStringTls`<sup>Required</sup> <a name="ZookeeperConnectStringTls" id="@cdktf/provider-aws.mskCluster.MskCluster.property.zookeeperConnectStringTls"></a>

```csharp
public string ZookeeperConnectStringTls { get; }
```

- *Type:* string

---

##### `BrokerNodeGroupInfoInput`<sup>Optional</sup> <a name="BrokerNodeGroupInfoInput" id="@cdktf/provider-aws.mskCluster.MskCluster.property.brokerNodeGroupInfoInput"></a>

```csharp
public MskClusterBrokerNodeGroupInfo BrokerNodeGroupInfoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo">MskClusterBrokerNodeGroupInfo</a>

---

##### `ClientAuthenticationInput`<sup>Optional</sup> <a name="ClientAuthenticationInput" id="@cdktf/provider-aws.mskCluster.MskCluster.property.clientAuthenticationInput"></a>

```csharp
public MskClusterClientAuthentication ClientAuthenticationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthentication">MskClusterClientAuthentication</a>

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-aws.mskCluster.MskCluster.property.clusterNameInput"></a>

```csharp
public string ClusterNameInput { get; }
```

- *Type:* string

---

##### `ConfigurationInfoInput`<sup>Optional</sup> <a name="ConfigurationInfoInput" id="@cdktf/provider-aws.mskCluster.MskCluster.property.configurationInfoInput"></a>

```csharp
public MskClusterConfigurationInfo ConfigurationInfoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfo">MskClusterConfigurationInfo</a>

---

##### `EncryptionInfoInput`<sup>Optional</sup> <a name="EncryptionInfoInput" id="@cdktf/provider-aws.mskCluster.MskCluster.property.encryptionInfoInput"></a>

```csharp
public MskClusterEncryptionInfo EncryptionInfoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfo">MskClusterEncryptionInfo</a>

---

##### `EnhancedMonitoringInput`<sup>Optional</sup> <a name="EnhancedMonitoringInput" id="@cdktf/provider-aws.mskCluster.MskCluster.property.enhancedMonitoringInput"></a>

```csharp
public string EnhancedMonitoringInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.mskCluster.MskCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KafkaVersionInput`<sup>Optional</sup> <a name="KafkaVersionInput" id="@cdktf/provider-aws.mskCluster.MskCluster.property.kafkaVersionInput"></a>

```csharp
public string KafkaVersionInput { get; }
```

- *Type:* string

---

##### `LoggingInfoInput`<sup>Optional</sup> <a name="LoggingInfoInput" id="@cdktf/provider-aws.mskCluster.MskCluster.property.loggingInfoInput"></a>

```csharp
public MskClusterLoggingInfo LoggingInfoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfo">MskClusterLoggingInfo</a>

---

##### `NumberOfBrokerNodesInput`<sup>Optional</sup> <a name="NumberOfBrokerNodesInput" id="@cdktf/provider-aws.mskCluster.MskCluster.property.numberOfBrokerNodesInput"></a>

```csharp
public double NumberOfBrokerNodesInput { get; }
```

- *Type:* double

---

##### `OpenMonitoringInput`<sup>Optional</sup> <a name="OpenMonitoringInput" id="@cdktf/provider-aws.mskCluster.MskCluster.property.openMonitoringInput"></a>

```csharp
public MskClusterOpenMonitoring OpenMonitoringInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoring">MskClusterOpenMonitoring</a>

---

##### `StorageModeInput`<sup>Optional</sup> <a name="StorageModeInput" id="@cdktf/provider-aws.mskCluster.MskCluster.property.storageModeInput"></a>

```csharp
public string StorageModeInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.mskCluster.MskCluster.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.mskCluster.MskCluster.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.mskCluster.MskCluster.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-aws.mskCluster.MskCluster.property.clusterName"></a>

```csharp
public string ClusterName { get; }
```

- *Type:* string

---

##### `EnhancedMonitoring`<sup>Required</sup> <a name="EnhancedMonitoring" id="@cdktf/provider-aws.mskCluster.MskCluster.property.enhancedMonitoring"></a>

```csharp
public string EnhancedMonitoring { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.mskCluster.MskCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KafkaVersion`<sup>Required</sup> <a name="KafkaVersion" id="@cdktf/provider-aws.mskCluster.MskCluster.property.kafkaVersion"></a>

```csharp
public string KafkaVersion { get; }
```

- *Type:* string

---

##### `NumberOfBrokerNodes`<sup>Required</sup> <a name="NumberOfBrokerNodes" id="@cdktf/provider-aws.mskCluster.MskCluster.property.numberOfBrokerNodes"></a>

```csharp
public double NumberOfBrokerNodes { get; }
```

- *Type:* double

---

##### `StorageMode`<sup>Required</sup> <a name="StorageMode" id="@cdktf/provider-aws.mskCluster.MskCluster.property.storageMode"></a>

```csharp
public string StorageMode { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.mskCluster.MskCluster.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.mskCluster.MskCluster.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.mskCluster.MskCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MskClusterBrokerNodeGroupInfo <a name="MskClusterBrokerNodeGroupInfo" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskClusterBrokerNodeGroupInfo {
    string[] ClientSubnets,
    string InstanceType,
    string[] SecurityGroups,
    string AzDistribution = null,
    MskClusterBrokerNodeGroupInfoConnectivityInfo ConnectivityInfo = null,
    double EbsVolumeSize = null,
    MskClusterBrokerNodeGroupInfoStorageInfo StorageInfo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo.property.clientSubnets">ClientSubnets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#client_subnets MskCluster#client_subnets}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo.property.instanceType">InstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#instance_type MskCluster#instance_type}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#security_groups MskCluster#security_groups}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo.property.azDistribution">AzDistribution</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#az_distribution MskCluster#az_distribution}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo.property.connectivityInfo">ConnectivityInfo</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo">MskClusterBrokerNodeGroupInfoConnectivityInfo</a></code> | connectivity_info block. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo.property.ebsVolumeSize">EbsVolumeSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#ebs_volume_size MskCluster#ebs_volume_size}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo.property.storageInfo">StorageInfo</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfo</a></code> | storage_info block. |

---

##### `ClientSubnets`<sup>Required</sup> <a name="ClientSubnets" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo.property.clientSubnets"></a>

```csharp
public string[] ClientSubnets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#client_subnets MskCluster#client_subnets}.

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#instance_type MskCluster#instance_type}.

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#security_groups MskCluster#security_groups}.

---

##### `AzDistribution`<sup>Optional</sup> <a name="AzDistribution" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo.property.azDistribution"></a>

```csharp
public string AzDistribution { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#az_distribution MskCluster#az_distribution}.

---

##### `ConnectivityInfo`<sup>Optional</sup> <a name="ConnectivityInfo" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo.property.connectivityInfo"></a>

```csharp
public MskClusterBrokerNodeGroupInfoConnectivityInfo ConnectivityInfo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo">MskClusterBrokerNodeGroupInfoConnectivityInfo</a>

connectivity_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#connectivity_info MskCluster#connectivity_info}

---

##### `EbsVolumeSize`<sup>Optional</sup> <a name="EbsVolumeSize" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo.property.ebsVolumeSize"></a>

```csharp
public double EbsVolumeSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#ebs_volume_size MskCluster#ebs_volume_size}.

---

##### `StorageInfo`<sup>Optional</sup> <a name="StorageInfo" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo.property.storageInfo"></a>

```csharp
public MskClusterBrokerNodeGroupInfoStorageInfo StorageInfo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfo</a>

storage_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#storage_info MskCluster#storage_info}

---

### MskClusterBrokerNodeGroupInfoConnectivityInfo <a name="MskClusterBrokerNodeGroupInfoConnectivityInfo" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskClusterBrokerNodeGroupInfoConnectivityInfo {
    MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess PublicAccess = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo.property.publicAccess">PublicAccess</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess">MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess</a></code> | public_access block. |

---

##### `PublicAccess`<sup>Optional</sup> <a name="PublicAccess" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo.property.publicAccess"></a>

```csharp
public MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess PublicAccess { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess">MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess</a>

public_access block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#public_access MskCluster#public_access}

---

### MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess <a name="MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess {
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#type MskCluster#type}. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#type MskCluster#type}.

---

### MskClusterBrokerNodeGroupInfoStorageInfo <a name="MskClusterBrokerNodeGroupInfoStorageInfo" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskClusterBrokerNodeGroupInfoStorageInfo {
    MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo EbsStorageInfo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo.property.ebsStorageInfo">EbsStorageInfo</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo</a></code> | ebs_storage_info block. |

---

##### `EbsStorageInfo`<sup>Optional</sup> <a name="EbsStorageInfo" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo.property.ebsStorageInfo"></a>

```csharp
public MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo EbsStorageInfo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo</a>

ebs_storage_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#ebs_storage_info MskCluster#ebs_storage_info}

---

### MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo <a name="MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo {
    MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput ProvisionedThroughput = null,
    double VolumeSize = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo.property.provisionedThroughput">ProvisionedThroughput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput</a></code> | provisioned_throughput block. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo.property.volumeSize">VolumeSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#volume_size MskCluster#volume_size}. |

---

##### `ProvisionedThroughput`<sup>Optional</sup> <a name="ProvisionedThroughput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo.property.provisionedThroughput"></a>

```csharp
public MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput ProvisionedThroughput { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput</a>

provisioned_throughput block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#provisioned_throughput MskCluster#provisioned_throughput}

---

##### `VolumeSize`<sup>Optional</sup> <a name="VolumeSize" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo.property.volumeSize"></a>

```csharp
public double VolumeSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#volume_size MskCluster#volume_size}.

---

### MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput <a name="MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput {
    object Enabled = null,
    double VolumeThroughput = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#enabled MskCluster#enabled}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput.property.volumeThroughput">VolumeThroughput</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#volume_throughput MskCluster#volume_throughput}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#enabled MskCluster#enabled}.

---

##### `VolumeThroughput`<sup>Optional</sup> <a name="VolumeThroughput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput.property.volumeThroughput"></a>

```csharp
public double VolumeThroughput { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#volume_throughput MskCluster#volume_throughput}.

---

### MskClusterClientAuthentication <a name="MskClusterClientAuthentication" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthentication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskClusterClientAuthentication {
    MskClusterClientAuthenticationSasl Sasl = null,
    MskClusterClientAuthenticationTls Tls = null,
    object Unauthenticated = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthentication.property.sasl">Sasl</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSasl">MskClusterClientAuthenticationSasl</a></code> | sasl block. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthentication.property.tls">Tls</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTls">MskClusterClientAuthenticationTls</a></code> | tls block. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthentication.property.unauthenticated">Unauthenticated</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#unauthenticated MskCluster#unauthenticated}. |

---

##### `Sasl`<sup>Optional</sup> <a name="Sasl" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthentication.property.sasl"></a>

```csharp
public MskClusterClientAuthenticationSasl Sasl { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSasl">MskClusterClientAuthenticationSasl</a>

sasl block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#sasl MskCluster#sasl}

---

##### `Tls`<sup>Optional</sup> <a name="Tls" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthentication.property.tls"></a>

```csharp
public MskClusterClientAuthenticationTls Tls { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTls">MskClusterClientAuthenticationTls</a>

tls block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#tls MskCluster#tls}

---

##### `Unauthenticated`<sup>Optional</sup> <a name="Unauthenticated" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthentication.property.unauthenticated"></a>

```csharp
public object Unauthenticated { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#unauthenticated MskCluster#unauthenticated}.

---

### MskClusterClientAuthenticationSasl <a name="MskClusterClientAuthenticationSasl" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSasl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSasl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskClusterClientAuthenticationSasl {
    object Iam = null,
    object Scram = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSasl.property.iam">Iam</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#iam MskCluster#iam}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSasl.property.scram">Scram</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#scram MskCluster#scram}. |

---

##### `Iam`<sup>Optional</sup> <a name="Iam" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSasl.property.iam"></a>

```csharp
public object Iam { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#iam MskCluster#iam}.

---

##### `Scram`<sup>Optional</sup> <a name="Scram" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSasl.property.scram"></a>

```csharp
public object Scram { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#scram MskCluster#scram}.

---

### MskClusterClientAuthenticationTls <a name="MskClusterClientAuthenticationTls" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTls.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskClusterClientAuthenticationTls {
    string[] CertificateAuthorityArns = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTls.property.certificateAuthorityArns">CertificateAuthorityArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#certificate_authority_arns MskCluster#certificate_authority_arns}. |

---

##### `CertificateAuthorityArns`<sup>Optional</sup> <a name="CertificateAuthorityArns" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTls.property.certificateAuthorityArns"></a>

```csharp
public string[] CertificateAuthorityArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#certificate_authority_arns MskCluster#certificate_authority_arns}.

---

### MskClusterConfig <a name="MskClusterConfig" id="@cdktf/provider-aws.mskCluster.MskClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskClusterConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    MskClusterBrokerNodeGroupInfo BrokerNodeGroupInfo,
    string ClusterName,
    string KafkaVersion,
    double NumberOfBrokerNodes,
    MskClusterClientAuthentication ClientAuthentication = null,
    MskClusterConfigurationInfo ConfigurationInfo = null,
    MskClusterEncryptionInfo EncryptionInfo = null,
    string EnhancedMonitoring = null,
    string Id = null,
    MskClusterLoggingInfo LoggingInfo = null,
    MskClusterOpenMonitoring OpenMonitoring = null,
    string StorageMode = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    MskClusterTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.brokerNodeGroupInfo">BrokerNodeGroupInfo</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo">MskClusterBrokerNodeGroupInfo</a></code> | broker_node_group_info block. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.clusterName">ClusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#cluster_name MskCluster#cluster_name}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.kafkaVersion">KafkaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#kafka_version MskCluster#kafka_version}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.numberOfBrokerNodes">NumberOfBrokerNodes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#number_of_broker_nodes MskCluster#number_of_broker_nodes}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.clientAuthentication">ClientAuthentication</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthentication">MskClusterClientAuthentication</a></code> | client_authentication block. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.configurationInfo">ConfigurationInfo</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfo">MskClusterConfigurationInfo</a></code> | configuration_info block. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.encryptionInfo">EncryptionInfo</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfo">MskClusterEncryptionInfo</a></code> | encryption_info block. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.enhancedMonitoring">EnhancedMonitoring</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#enhanced_monitoring MskCluster#enhanced_monitoring}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#id MskCluster#id}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.loggingInfo">LoggingInfo</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfo">MskClusterLoggingInfo</a></code> | logging_info block. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.openMonitoring">OpenMonitoring</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoring">MskClusterOpenMonitoring</a></code> | open_monitoring block. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.storageMode">StorageMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#storage_mode MskCluster#storage_mode}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#tags MskCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#tags_all MskCluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeouts">MskClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BrokerNodeGroupInfo`<sup>Required</sup> <a name="BrokerNodeGroupInfo" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.brokerNodeGroupInfo"></a>

```csharp
public MskClusterBrokerNodeGroupInfo BrokerNodeGroupInfo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo">MskClusterBrokerNodeGroupInfo</a>

broker_node_group_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#broker_node_group_info MskCluster#broker_node_group_info}

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.clusterName"></a>

```csharp
public string ClusterName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#cluster_name MskCluster#cluster_name}.

---

##### `KafkaVersion`<sup>Required</sup> <a name="KafkaVersion" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.kafkaVersion"></a>

```csharp
public string KafkaVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#kafka_version MskCluster#kafka_version}.

---

##### `NumberOfBrokerNodes`<sup>Required</sup> <a name="NumberOfBrokerNodes" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.numberOfBrokerNodes"></a>

```csharp
public double NumberOfBrokerNodes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#number_of_broker_nodes MskCluster#number_of_broker_nodes}.

---

##### `ClientAuthentication`<sup>Optional</sup> <a name="ClientAuthentication" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.clientAuthentication"></a>

```csharp
public MskClusterClientAuthentication ClientAuthentication { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthentication">MskClusterClientAuthentication</a>

client_authentication block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#client_authentication MskCluster#client_authentication}

---

##### `ConfigurationInfo`<sup>Optional</sup> <a name="ConfigurationInfo" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.configurationInfo"></a>

```csharp
public MskClusterConfigurationInfo ConfigurationInfo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfo">MskClusterConfigurationInfo</a>

configuration_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#configuration_info MskCluster#configuration_info}

---

##### `EncryptionInfo`<sup>Optional</sup> <a name="EncryptionInfo" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.encryptionInfo"></a>

```csharp
public MskClusterEncryptionInfo EncryptionInfo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfo">MskClusterEncryptionInfo</a>

encryption_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#encryption_info MskCluster#encryption_info}

---

##### `EnhancedMonitoring`<sup>Optional</sup> <a name="EnhancedMonitoring" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.enhancedMonitoring"></a>

```csharp
public string EnhancedMonitoring { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#enhanced_monitoring MskCluster#enhanced_monitoring}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#id MskCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LoggingInfo`<sup>Optional</sup> <a name="LoggingInfo" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.loggingInfo"></a>

```csharp
public MskClusterLoggingInfo LoggingInfo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfo">MskClusterLoggingInfo</a>

logging_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#logging_info MskCluster#logging_info}

---

##### `OpenMonitoring`<sup>Optional</sup> <a name="OpenMonitoring" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.openMonitoring"></a>

```csharp
public MskClusterOpenMonitoring OpenMonitoring { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoring">MskClusterOpenMonitoring</a>

open_monitoring block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#open_monitoring MskCluster#open_monitoring}

---

##### `StorageMode`<sup>Optional</sup> <a name="StorageMode" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.storageMode"></a>

```csharp
public string StorageMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#storage_mode MskCluster#storage_mode}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#tags MskCluster#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#tags_all MskCluster#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.mskCluster.MskClusterConfig.property.timeouts"></a>

```csharp
public MskClusterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeouts">MskClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#timeouts MskCluster#timeouts}

---

### MskClusterConfigurationInfo <a name="MskClusterConfigurationInfo" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskClusterConfigurationInfo {
    string Arn,
    double Revision
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfo.property.arn">Arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#arn MskCluster#arn}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfo.property.revision">Revision</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#revision MskCluster#revision}. |

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfo.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#arn MskCluster#arn}.

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfo.property.revision"></a>

```csharp
public double Revision { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#revision MskCluster#revision}.

---

### MskClusterEncryptionInfo <a name="MskClusterEncryptionInfo" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskClusterEncryptionInfo {
    string EncryptionAtRestKmsKeyArn = null,
    MskClusterEncryptionInfoEncryptionInTransit EncryptionInTransit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfo.property.encryptionAtRestKmsKeyArn">EncryptionAtRestKmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#encryption_at_rest_kms_key_arn MskCluster#encryption_at_rest_kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfo.property.encryptionInTransit">EncryptionInTransit</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransit">MskClusterEncryptionInfoEncryptionInTransit</a></code> | encryption_in_transit block. |

---

##### `EncryptionAtRestKmsKeyArn`<sup>Optional</sup> <a name="EncryptionAtRestKmsKeyArn" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfo.property.encryptionAtRestKmsKeyArn"></a>

```csharp
public string EncryptionAtRestKmsKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#encryption_at_rest_kms_key_arn MskCluster#encryption_at_rest_kms_key_arn}.

---

##### `EncryptionInTransit`<sup>Optional</sup> <a name="EncryptionInTransit" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfo.property.encryptionInTransit"></a>

```csharp
public MskClusterEncryptionInfoEncryptionInTransit EncryptionInTransit { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransit">MskClusterEncryptionInfoEncryptionInTransit</a>

encryption_in_transit block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#encryption_in_transit MskCluster#encryption_in_transit}

---

### MskClusterEncryptionInfoEncryptionInTransit <a name="MskClusterEncryptionInfoEncryptionInTransit" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransit.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskClusterEncryptionInfoEncryptionInTransit {
    string ClientBroker = null,
    object InCluster = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransit.property.clientBroker">ClientBroker</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#client_broker MskCluster#client_broker}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransit.property.inCluster">InCluster</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#in_cluster MskCluster#in_cluster}. |

---

##### `ClientBroker`<sup>Optional</sup> <a name="ClientBroker" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransit.property.clientBroker"></a>

```csharp
public string ClientBroker { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#client_broker MskCluster#client_broker}.

---

##### `InCluster`<sup>Optional</sup> <a name="InCluster" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransit.property.inCluster"></a>

```csharp
public object InCluster { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#in_cluster MskCluster#in_cluster}.

---

### MskClusterLoggingInfo <a name="MskClusterLoggingInfo" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskClusterLoggingInfo {
    MskClusterLoggingInfoBrokerLogs BrokerLogs
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfo.property.brokerLogs">BrokerLogs</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogs">MskClusterLoggingInfoBrokerLogs</a></code> | broker_logs block. |

---

##### `BrokerLogs`<sup>Required</sup> <a name="BrokerLogs" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfo.property.brokerLogs"></a>

```csharp
public MskClusterLoggingInfoBrokerLogs BrokerLogs { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogs">MskClusterLoggingInfoBrokerLogs</a>

broker_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#broker_logs MskCluster#broker_logs}

---

### MskClusterLoggingInfoBrokerLogs <a name="MskClusterLoggingInfoBrokerLogs" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskClusterLoggingInfoBrokerLogs {
    MskClusterLoggingInfoBrokerLogsCloudwatchLogs CloudwatchLogs = null,
    MskClusterLoggingInfoBrokerLogsFirehose Firehose = null,
    MskClusterLoggingInfoBrokerLogsS3 S3 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogs.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs">MskClusterLoggingInfoBrokerLogsCloudwatchLogs</a></code> | cloudwatch_logs block. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogs.property.firehose">Firehose</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose">MskClusterLoggingInfoBrokerLogsFirehose</a></code> | firehose block. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogs.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3">MskClusterLoggingInfoBrokerLogsS3</a></code> | s3 block. |

---

##### `CloudwatchLogs`<sup>Optional</sup> <a name="CloudwatchLogs" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogs.property.cloudwatchLogs"></a>

```csharp
public MskClusterLoggingInfoBrokerLogsCloudwatchLogs CloudwatchLogs { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs">MskClusterLoggingInfoBrokerLogsCloudwatchLogs</a>

cloudwatch_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#cloudwatch_logs MskCluster#cloudwatch_logs}

---

##### `Firehose`<sup>Optional</sup> <a name="Firehose" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogs.property.firehose"></a>

```csharp
public MskClusterLoggingInfoBrokerLogsFirehose Firehose { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose">MskClusterLoggingInfoBrokerLogsFirehose</a>

firehose block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#firehose MskCluster#firehose}

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogs.property.s3"></a>

```csharp
public MskClusterLoggingInfoBrokerLogsS3 S3 { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3">MskClusterLoggingInfoBrokerLogsS3</a>

s3 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#s3 MskCluster#s3}

---

### MskClusterLoggingInfoBrokerLogsCloudwatchLogs <a name="MskClusterLoggingInfoBrokerLogsCloudwatchLogs" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskClusterLoggingInfoBrokerLogsCloudwatchLogs {
    object Enabled,
    string LogGroup = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#enabled MskCluster#enabled}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs.property.logGroup">LogGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#log_group MskCluster#log_group}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#enabled MskCluster#enabled}.

---

##### `LogGroup`<sup>Optional</sup> <a name="LogGroup" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs.property.logGroup"></a>

```csharp
public string LogGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#log_group MskCluster#log_group}.

---

### MskClusterLoggingInfoBrokerLogsFirehose <a name="MskClusterLoggingInfoBrokerLogsFirehose" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskClusterLoggingInfoBrokerLogsFirehose {
    object Enabled,
    string DeliveryStream = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#enabled MskCluster#enabled}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose.property.deliveryStream">DeliveryStream</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#delivery_stream MskCluster#delivery_stream}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#enabled MskCluster#enabled}.

---

##### `DeliveryStream`<sup>Optional</sup> <a name="DeliveryStream" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose.property.deliveryStream"></a>

```csharp
public string DeliveryStream { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#delivery_stream MskCluster#delivery_stream}.

---

### MskClusterLoggingInfoBrokerLogsS3 <a name="MskClusterLoggingInfoBrokerLogsS3" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskClusterLoggingInfoBrokerLogsS3 {
    object Enabled,
    string Bucket = null,
    string Prefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#enabled MskCluster#enabled}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#bucket MskCluster#bucket}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#prefix MskCluster#prefix}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#enabled MskCluster#enabled}.

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#bucket MskCluster#bucket}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#prefix MskCluster#prefix}.

---

### MskClusterOpenMonitoring <a name="MskClusterOpenMonitoring" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoring"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoring.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskClusterOpenMonitoring {
    MskClusterOpenMonitoringPrometheus Prometheus
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoring.property.prometheus">Prometheus</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheus">MskClusterOpenMonitoringPrometheus</a></code> | prometheus block. |

---

##### `Prometheus`<sup>Required</sup> <a name="Prometheus" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoring.property.prometheus"></a>

```csharp
public MskClusterOpenMonitoringPrometheus Prometheus { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheus">MskClusterOpenMonitoringPrometheus</a>

prometheus block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#prometheus MskCluster#prometheus}

---

### MskClusterOpenMonitoringPrometheus <a name="MskClusterOpenMonitoringPrometheus" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskClusterOpenMonitoringPrometheus {
    MskClusterOpenMonitoringPrometheusJmxExporter JmxExporter = null,
    MskClusterOpenMonitoringPrometheusNodeExporter NodeExporter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheus.property.jmxExporter">JmxExporter</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter">MskClusterOpenMonitoringPrometheusJmxExporter</a></code> | jmx_exporter block. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheus.property.nodeExporter">NodeExporter</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter">MskClusterOpenMonitoringPrometheusNodeExporter</a></code> | node_exporter block. |

---

##### `JmxExporter`<sup>Optional</sup> <a name="JmxExporter" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheus.property.jmxExporter"></a>

```csharp
public MskClusterOpenMonitoringPrometheusJmxExporter JmxExporter { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter">MskClusterOpenMonitoringPrometheusJmxExporter</a>

jmx_exporter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#jmx_exporter MskCluster#jmx_exporter}

---

##### `NodeExporter`<sup>Optional</sup> <a name="NodeExporter" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheus.property.nodeExporter"></a>

```csharp
public MskClusterOpenMonitoringPrometheusNodeExporter NodeExporter { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter">MskClusterOpenMonitoringPrometheusNodeExporter</a>

node_exporter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#node_exporter MskCluster#node_exporter}

---

### MskClusterOpenMonitoringPrometheusJmxExporter <a name="MskClusterOpenMonitoringPrometheusJmxExporter" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskClusterOpenMonitoringPrometheusJmxExporter {
    object EnabledInBroker
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter.property.enabledInBroker">EnabledInBroker</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#enabled_in_broker MskCluster#enabled_in_broker}. |

---

##### `EnabledInBroker`<sup>Required</sup> <a name="EnabledInBroker" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter.property.enabledInBroker"></a>

```csharp
public object EnabledInBroker { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#enabled_in_broker MskCluster#enabled_in_broker}.

---

### MskClusterOpenMonitoringPrometheusNodeExporter <a name="MskClusterOpenMonitoringPrometheusNodeExporter" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskClusterOpenMonitoringPrometheusNodeExporter {
    object EnabledInBroker
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter.property.enabledInBroker">EnabledInBroker</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#enabled_in_broker MskCluster#enabled_in_broker}. |

---

##### `EnabledInBroker`<sup>Required</sup> <a name="EnabledInBroker" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter.property.enabledInBroker"></a>

```csharp
public object EnabledInBroker { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#enabled_in_broker MskCluster#enabled_in_broker}.

---

### MskClusterTimeouts <a name="MskClusterTimeouts" id="@cdktf/provider-aws.mskCluster.MskClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskCluster.MskClusterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskClusterTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#create MskCluster#create}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#delete MskCluster#delete}. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#update MskCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.mskCluster.MskClusterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#create MskCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.mskCluster.MskClusterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#delete MskCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.mskCluster.MskClusterTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster#update MskCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference <a name="MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.putPublicAccess">PutPublicAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.resetPublicAccess">ResetPublicAccess</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPublicAccess` <a name="PutPublicAccess" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.putPublicAccess"></a>

```csharp
private void PutPublicAccess(MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.putPublicAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess">MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess</a>

---

##### `ResetPublicAccess` <a name="ResetPublicAccess" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.resetPublicAccess"></a>

```csharp
private void ResetPublicAccess()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.publicAccess">PublicAccess</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference">MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.publicAccessInput">PublicAccessInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess">MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo">MskClusterBrokerNodeGroupInfoConnectivityInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PublicAccess`<sup>Required</sup> <a name="PublicAccess" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.publicAccess"></a>

```csharp
public MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference PublicAccess { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference">MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference</a>

---

##### `PublicAccessInput`<sup>Optional</sup> <a name="PublicAccessInput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.publicAccessInput"></a>

```csharp
public MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess PublicAccessInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess">MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.internalValue"></a>

```csharp
public MskClusterBrokerNodeGroupInfoConnectivityInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo">MskClusterBrokerNodeGroupInfoConnectivityInfo</a>

---


### MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference <a name="MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess">MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.internalValue"></a>

```csharp
public MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess">MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess</a>

---


### MskClusterBrokerNodeGroupInfoOutputReference <a name="MskClusterBrokerNodeGroupInfoOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskClusterBrokerNodeGroupInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.putConnectivityInfo">PutConnectivityInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.putStorageInfo">PutStorageInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resetAzDistribution">ResetAzDistribution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resetConnectivityInfo">ResetConnectivityInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resetEbsVolumeSize">ResetEbsVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resetStorageInfo">ResetStorageInfo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConnectivityInfo` <a name="PutConnectivityInfo" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.putConnectivityInfo"></a>

```csharp
private void PutConnectivityInfo(MskClusterBrokerNodeGroupInfoConnectivityInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.putConnectivityInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo">MskClusterBrokerNodeGroupInfoConnectivityInfo</a>

---

##### `PutStorageInfo` <a name="PutStorageInfo" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.putStorageInfo"></a>

```csharp
private void PutStorageInfo(MskClusterBrokerNodeGroupInfoStorageInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.putStorageInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfo</a>

---

##### `ResetAzDistribution` <a name="ResetAzDistribution" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resetAzDistribution"></a>

```csharp
private void ResetAzDistribution()
```

##### `ResetConnectivityInfo` <a name="ResetConnectivityInfo" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resetConnectivityInfo"></a>

```csharp
private void ResetConnectivityInfo()
```

##### `ResetEbsVolumeSize` <a name="ResetEbsVolumeSize" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resetEbsVolumeSize"></a>

```csharp
private void ResetEbsVolumeSize()
```

##### `ResetStorageInfo` <a name="ResetStorageInfo" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resetStorageInfo"></a>

```csharp
private void ResetStorageInfo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.connectivityInfo">ConnectivityInfo</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference">MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.storageInfo">StorageInfo</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference">MskClusterBrokerNodeGroupInfoStorageInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.azDistributionInput">AzDistributionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.clientSubnetsInput">ClientSubnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.connectivityInfoInput">ConnectivityInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo">MskClusterBrokerNodeGroupInfoConnectivityInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.ebsVolumeSizeInput">EbsVolumeSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.storageInfoInput">StorageInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.azDistribution">AzDistribution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.clientSubnets">ClientSubnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.ebsVolumeSize">EbsVolumeSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo">MskClusterBrokerNodeGroupInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectivityInfo`<sup>Required</sup> <a name="ConnectivityInfo" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.connectivityInfo"></a>

```csharp
public MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference ConnectivityInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference">MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference</a>

---

##### `StorageInfo`<sup>Required</sup> <a name="StorageInfo" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.storageInfo"></a>

```csharp
public MskClusterBrokerNodeGroupInfoStorageInfoOutputReference StorageInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference">MskClusterBrokerNodeGroupInfoStorageInfoOutputReference</a>

---

##### `AzDistributionInput`<sup>Optional</sup> <a name="AzDistributionInput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.azDistributionInput"></a>

```csharp
public string AzDistributionInput { get; }
```

- *Type:* string

---

##### `ClientSubnetsInput`<sup>Optional</sup> <a name="ClientSubnetsInput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.clientSubnetsInput"></a>

```csharp
public string[] ClientSubnetsInput { get; }
```

- *Type:* string[]

---

##### `ConnectivityInfoInput`<sup>Optional</sup> <a name="ConnectivityInfoInput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.connectivityInfoInput"></a>

```csharp
public MskClusterBrokerNodeGroupInfoConnectivityInfo ConnectivityInfoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo">MskClusterBrokerNodeGroupInfoConnectivityInfo</a>

---

##### `EbsVolumeSizeInput`<sup>Optional</sup> <a name="EbsVolumeSizeInput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.ebsVolumeSizeInput"></a>

```csharp
public double EbsVolumeSizeInput { get; }
```

- *Type:* double

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.securityGroupsInput"></a>

```csharp
public string[] SecurityGroupsInput { get; }
```

- *Type:* string[]

---

##### `StorageInfoInput`<sup>Optional</sup> <a name="StorageInfoInput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.storageInfoInput"></a>

```csharp
public MskClusterBrokerNodeGroupInfoStorageInfo StorageInfoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfo</a>

---

##### `AzDistribution`<sup>Required</sup> <a name="AzDistribution" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.azDistribution"></a>

```csharp
public string AzDistribution { get; }
```

- *Type:* string

---

##### `ClientSubnets`<sup>Required</sup> <a name="ClientSubnets" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.clientSubnets"></a>

```csharp
public string[] ClientSubnets { get; }
```

- *Type:* string[]

---

##### `EbsVolumeSize`<sup>Required</sup> <a name="EbsVolumeSize" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.ebsVolumeSize"></a>

```csharp
public double EbsVolumeSize { get; }
```

- *Type:* double

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.internalValue"></a>

```csharp
public MskClusterBrokerNodeGroupInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfo">MskClusterBrokerNodeGroupInfo</a>

---


### MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference <a name="MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.putProvisionedThroughput">PutProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.resetProvisionedThroughput">ResetProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.resetVolumeSize">ResetVolumeSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProvisionedThroughput` <a name="PutProvisionedThroughput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.putProvisionedThroughput"></a>

```csharp
private void PutProvisionedThroughput(MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.putProvisionedThroughput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput</a>

---

##### `ResetProvisionedThroughput` <a name="ResetProvisionedThroughput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.resetProvisionedThroughput"></a>

```csharp
private void ResetProvisionedThroughput()
```

##### `ResetVolumeSize` <a name="ResetVolumeSize" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.resetVolumeSize"></a>

```csharp
private void ResetVolumeSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.provisionedThroughput">ProvisionedThroughput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.provisionedThroughputInput">ProvisionedThroughputInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.volumeSizeInput">VolumeSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.volumeSize">VolumeSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProvisionedThroughput`<sup>Required</sup> <a name="ProvisionedThroughput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.provisionedThroughput"></a>

```csharp
public MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference ProvisionedThroughput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference</a>

---

##### `ProvisionedThroughputInput`<sup>Optional</sup> <a name="ProvisionedThroughputInput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.provisionedThroughputInput"></a>

```csharp
public MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput ProvisionedThroughputInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput</a>

---

##### `VolumeSizeInput`<sup>Optional</sup> <a name="VolumeSizeInput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.volumeSizeInput"></a>

```csharp
public double VolumeSizeInput { get; }
```

- *Type:* double

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.volumeSize"></a>

```csharp
public double VolumeSize { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.internalValue"></a>

```csharp
public MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo</a>

---


### MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference <a name="MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.resetVolumeThroughput">ResetVolumeThroughput</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetVolumeThroughput` <a name="ResetVolumeThroughput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.resetVolumeThroughput"></a>

```csharp
private void ResetVolumeThroughput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.volumeThroughputInput">VolumeThroughputInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.volumeThroughput">VolumeThroughput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `VolumeThroughputInput`<sup>Optional</sup> <a name="VolumeThroughputInput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.volumeThroughputInput"></a>

```csharp
public double VolumeThroughputInput { get; }
```

- *Type:* double

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `VolumeThroughput`<sup>Required</sup> <a name="VolumeThroughput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.volumeThroughput"></a>

```csharp
public double VolumeThroughput { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.internalValue"></a>

```csharp
public MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput</a>

---


### MskClusterBrokerNodeGroupInfoStorageInfoOutputReference <a name="MskClusterBrokerNodeGroupInfoStorageInfoOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskClusterBrokerNodeGroupInfoStorageInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.putEbsStorageInfo">PutEbsStorageInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.resetEbsStorageInfo">ResetEbsStorageInfo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEbsStorageInfo` <a name="PutEbsStorageInfo" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.putEbsStorageInfo"></a>

```csharp
private void PutEbsStorageInfo(MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.putEbsStorageInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo</a>

---

##### `ResetEbsStorageInfo` <a name="ResetEbsStorageInfo" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.resetEbsStorageInfo"></a>

```csharp
private void ResetEbsStorageInfo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.ebsStorageInfo">EbsStorageInfo</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.ebsStorageInfoInput">EbsStorageInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EbsStorageInfo`<sup>Required</sup> <a name="EbsStorageInfo" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.ebsStorageInfo"></a>

```csharp
public MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference EbsStorageInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference</a>

---

##### `EbsStorageInfoInput`<sup>Optional</sup> <a name="EbsStorageInfoInput" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.ebsStorageInfoInput"></a>

```csharp
public MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo EbsStorageInfoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.internalValue"></a>

```csharp
public MskClusterBrokerNodeGroupInfoStorageInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfo</a>

---


### MskClusterClientAuthenticationOutputReference <a name="MskClusterClientAuthenticationOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskClusterClientAuthenticationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.putSasl">PutSasl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.putTls">PutTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.resetSasl">ResetSasl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.resetTls">ResetTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.resetUnauthenticated">ResetUnauthenticated</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSasl` <a name="PutSasl" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.putSasl"></a>

```csharp
private void PutSasl(MskClusterClientAuthenticationSasl Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.putSasl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSasl">MskClusterClientAuthenticationSasl</a>

---

##### `PutTls` <a name="PutTls" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.putTls"></a>

```csharp
private void PutTls(MskClusterClientAuthenticationTls Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.putTls.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTls">MskClusterClientAuthenticationTls</a>

---

##### `ResetSasl` <a name="ResetSasl" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.resetSasl"></a>

```csharp
private void ResetSasl()
```

##### `ResetTls` <a name="ResetTls" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.resetTls"></a>

```csharp
private void ResetTls()
```

##### `ResetUnauthenticated` <a name="ResetUnauthenticated" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.resetUnauthenticated"></a>

```csharp
private void ResetUnauthenticated()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.sasl">Sasl</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference">MskClusterClientAuthenticationSaslOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.tls">Tls</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference">MskClusterClientAuthenticationTlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.saslInput">SaslInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSasl">MskClusterClientAuthenticationSasl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.tlsInput">TlsInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTls">MskClusterClientAuthenticationTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.unauthenticatedInput">UnauthenticatedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.unauthenticated">Unauthenticated</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthentication">MskClusterClientAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Sasl`<sup>Required</sup> <a name="Sasl" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.sasl"></a>

```csharp
public MskClusterClientAuthenticationSaslOutputReference Sasl { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference">MskClusterClientAuthenticationSaslOutputReference</a>

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.tls"></a>

```csharp
public MskClusterClientAuthenticationTlsOutputReference Tls { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference">MskClusterClientAuthenticationTlsOutputReference</a>

---

##### `SaslInput`<sup>Optional</sup> <a name="SaslInput" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.saslInput"></a>

```csharp
public MskClusterClientAuthenticationSasl SaslInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSasl">MskClusterClientAuthenticationSasl</a>

---

##### `TlsInput`<sup>Optional</sup> <a name="TlsInput" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.tlsInput"></a>

```csharp
public MskClusterClientAuthenticationTls TlsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTls">MskClusterClientAuthenticationTls</a>

---

##### `UnauthenticatedInput`<sup>Optional</sup> <a name="UnauthenticatedInput" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.unauthenticatedInput"></a>

```csharp
public object UnauthenticatedInput { get; }
```

- *Type:* object

---

##### `Unauthenticated`<sup>Required</sup> <a name="Unauthenticated" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.unauthenticated"></a>

```csharp
public object Unauthenticated { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationOutputReference.property.internalValue"></a>

```csharp
public MskClusterClientAuthentication InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthentication">MskClusterClientAuthentication</a>

---


### MskClusterClientAuthenticationSaslOutputReference <a name="MskClusterClientAuthenticationSaslOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskClusterClientAuthenticationSaslOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.resetIam">ResetIam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.resetScram">ResetScram</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIam` <a name="ResetIam" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.resetIam"></a>

```csharp
private void ResetIam()
```

##### `ResetScram` <a name="ResetScram" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.resetScram"></a>

```csharp
private void ResetScram()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.iamInput">IamInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.scramInput">ScramInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.iam">Iam</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.scram">Scram</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSasl">MskClusterClientAuthenticationSasl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IamInput`<sup>Optional</sup> <a name="IamInput" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.iamInput"></a>

```csharp
public object IamInput { get; }
```

- *Type:* object

---

##### `ScramInput`<sup>Optional</sup> <a name="ScramInput" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.scramInput"></a>

```csharp
public object ScramInput { get; }
```

- *Type:* object

---

##### `Iam`<sup>Required</sup> <a name="Iam" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.iam"></a>

```csharp
public object Iam { get; }
```

- *Type:* object

---

##### `Scram`<sup>Required</sup> <a name="Scram" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.scram"></a>

```csharp
public object Scram { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.internalValue"></a>

```csharp
public MskClusterClientAuthenticationSasl InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationSasl">MskClusterClientAuthenticationSasl</a>

---


### MskClusterClientAuthenticationTlsOutputReference <a name="MskClusterClientAuthenticationTlsOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskClusterClientAuthenticationTlsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.resetCertificateAuthorityArns">ResetCertificateAuthorityArns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateAuthorityArns` <a name="ResetCertificateAuthorityArns" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.resetCertificateAuthorityArns"></a>

```csharp
private void ResetCertificateAuthorityArns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.certificateAuthorityArnsInput">CertificateAuthorityArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.certificateAuthorityArns">CertificateAuthorityArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTls">MskClusterClientAuthenticationTls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateAuthorityArnsInput`<sup>Optional</sup> <a name="CertificateAuthorityArnsInput" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.certificateAuthorityArnsInput"></a>

```csharp
public string[] CertificateAuthorityArnsInput { get; }
```

- *Type:* string[]

---

##### `CertificateAuthorityArns`<sup>Required</sup> <a name="CertificateAuthorityArns" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.certificateAuthorityArns"></a>

```csharp
public string[] CertificateAuthorityArns { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.internalValue"></a>

```csharp
public MskClusterClientAuthenticationTls InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterClientAuthenticationTls">MskClusterClientAuthenticationTls</a>

---


### MskClusterConfigurationInfoOutputReference <a name="MskClusterConfigurationInfoOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskClusterConfigurationInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.property.revisionInput">RevisionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.property.revision">Revision</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfo">MskClusterConfigurationInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `RevisionInput`<sup>Optional</sup> <a name="RevisionInput" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.property.revisionInput"></a>

```csharp
public double RevisionInput { get; }
```

- *Type:* double

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.property.revision"></a>

```csharp
public double Revision { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfoOutputReference.property.internalValue"></a>

```csharp
public MskClusterConfigurationInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterConfigurationInfo">MskClusterConfigurationInfo</a>

---


### MskClusterEncryptionInfoEncryptionInTransitOutputReference <a name="MskClusterEncryptionInfoEncryptionInTransitOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskClusterEncryptionInfoEncryptionInTransitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.resetClientBroker">ResetClientBroker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.resetInCluster">ResetInCluster</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientBroker` <a name="ResetClientBroker" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.resetClientBroker"></a>

```csharp
private void ResetClientBroker()
```

##### `ResetInCluster` <a name="ResetInCluster" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.resetInCluster"></a>

```csharp
private void ResetInCluster()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.clientBrokerInput">ClientBrokerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.inClusterInput">InClusterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.clientBroker">ClientBroker</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.inCluster">InCluster</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransit">MskClusterEncryptionInfoEncryptionInTransit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientBrokerInput`<sup>Optional</sup> <a name="ClientBrokerInput" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.clientBrokerInput"></a>

```csharp
public string ClientBrokerInput { get; }
```

- *Type:* string

---

##### `InClusterInput`<sup>Optional</sup> <a name="InClusterInput" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.inClusterInput"></a>

```csharp
public object InClusterInput { get; }
```

- *Type:* object

---

##### `ClientBroker`<sup>Required</sup> <a name="ClientBroker" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.clientBroker"></a>

```csharp
public string ClientBroker { get; }
```

- *Type:* string

---

##### `InCluster`<sup>Required</sup> <a name="InCluster" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.inCluster"></a>

```csharp
public object InCluster { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.internalValue"></a>

```csharp
public MskClusterEncryptionInfoEncryptionInTransit InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransit">MskClusterEncryptionInfoEncryptionInTransit</a>

---


### MskClusterEncryptionInfoOutputReference <a name="MskClusterEncryptionInfoOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskClusterEncryptionInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.putEncryptionInTransit">PutEncryptionInTransit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.resetEncryptionAtRestKmsKeyArn">ResetEncryptionAtRestKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.resetEncryptionInTransit">ResetEncryptionInTransit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryptionInTransit` <a name="PutEncryptionInTransit" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.putEncryptionInTransit"></a>

```csharp
private void PutEncryptionInTransit(MskClusterEncryptionInfoEncryptionInTransit Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.putEncryptionInTransit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransit">MskClusterEncryptionInfoEncryptionInTransit</a>

---

##### `ResetEncryptionAtRestKmsKeyArn` <a name="ResetEncryptionAtRestKmsKeyArn" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.resetEncryptionAtRestKmsKeyArn"></a>

```csharp
private void ResetEncryptionAtRestKmsKeyArn()
```

##### `ResetEncryptionInTransit` <a name="ResetEncryptionInTransit" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.resetEncryptionInTransit"></a>

```csharp
private void ResetEncryptionInTransit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.property.encryptionInTransit">EncryptionInTransit</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference">MskClusterEncryptionInfoEncryptionInTransitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.property.encryptionAtRestKmsKeyArnInput">EncryptionAtRestKmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.property.encryptionInTransitInput">EncryptionInTransitInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransit">MskClusterEncryptionInfoEncryptionInTransit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.property.encryptionAtRestKmsKeyArn">EncryptionAtRestKmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfo">MskClusterEncryptionInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionInTransit`<sup>Required</sup> <a name="EncryptionInTransit" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.property.encryptionInTransit"></a>

```csharp
public MskClusterEncryptionInfoEncryptionInTransitOutputReference EncryptionInTransit { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference">MskClusterEncryptionInfoEncryptionInTransitOutputReference</a>

---

##### `EncryptionAtRestKmsKeyArnInput`<sup>Optional</sup> <a name="EncryptionAtRestKmsKeyArnInput" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.property.encryptionAtRestKmsKeyArnInput"></a>

```csharp
public string EncryptionAtRestKmsKeyArnInput { get; }
```

- *Type:* string

---

##### `EncryptionInTransitInput`<sup>Optional</sup> <a name="EncryptionInTransitInput" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.property.encryptionInTransitInput"></a>

```csharp
public MskClusterEncryptionInfoEncryptionInTransit EncryptionInTransitInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoEncryptionInTransit">MskClusterEncryptionInfoEncryptionInTransit</a>

---

##### `EncryptionAtRestKmsKeyArn`<sup>Required</sup> <a name="EncryptionAtRestKmsKeyArn" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.property.encryptionAtRestKmsKeyArn"></a>

```csharp
public string EncryptionAtRestKmsKeyArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfoOutputReference.property.internalValue"></a>

```csharp
public MskClusterEncryptionInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterEncryptionInfo">MskClusterEncryptionInfo</a>

---


### MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference <a name="MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.resetLogGroup">ResetLogGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogGroup` <a name="ResetLogGroup" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.resetLogGroup"></a>

```csharp
private void ResetLogGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.logGroupInput">LogGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.logGroup">LogGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs">MskClusterLoggingInfoBrokerLogsCloudwatchLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `LogGroupInput`<sup>Optional</sup> <a name="LogGroupInput" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.logGroupInput"></a>

```csharp
public string LogGroupInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `LogGroup`<sup>Required</sup> <a name="LogGroup" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.logGroup"></a>

```csharp
public string LogGroup { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.internalValue"></a>

```csharp
public MskClusterLoggingInfoBrokerLogsCloudwatchLogs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs">MskClusterLoggingInfoBrokerLogsCloudwatchLogs</a>

---


### MskClusterLoggingInfoBrokerLogsFirehoseOutputReference <a name="MskClusterLoggingInfoBrokerLogsFirehoseOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskClusterLoggingInfoBrokerLogsFirehoseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.resetDeliveryStream">ResetDeliveryStream</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeliveryStream` <a name="ResetDeliveryStream" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.resetDeliveryStream"></a>

```csharp
private void ResetDeliveryStream()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.deliveryStreamInput">DeliveryStreamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.deliveryStream">DeliveryStream</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose">MskClusterLoggingInfoBrokerLogsFirehose</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeliveryStreamInput`<sup>Optional</sup> <a name="DeliveryStreamInput" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.deliveryStreamInput"></a>

```csharp
public string DeliveryStreamInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `DeliveryStream`<sup>Required</sup> <a name="DeliveryStream" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.deliveryStream"></a>

```csharp
public string DeliveryStream { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.internalValue"></a>

```csharp
public MskClusterLoggingInfoBrokerLogsFirehose InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose">MskClusterLoggingInfoBrokerLogsFirehose</a>

---


### MskClusterLoggingInfoBrokerLogsOutputReference <a name="MskClusterLoggingInfoBrokerLogsOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskClusterLoggingInfoBrokerLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.putCloudwatchLogs">PutCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.putFirehose">PutFirehose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.resetCloudwatchLogs">ResetCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.resetFirehose">ResetFirehose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.resetS3">ResetS3</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatchLogs` <a name="PutCloudwatchLogs" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.putCloudwatchLogs"></a>

```csharp
private void PutCloudwatchLogs(MskClusterLoggingInfoBrokerLogsCloudwatchLogs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs">MskClusterLoggingInfoBrokerLogsCloudwatchLogs</a>

---

##### `PutFirehose` <a name="PutFirehose" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.putFirehose"></a>

```csharp
private void PutFirehose(MskClusterLoggingInfoBrokerLogsFirehose Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.putFirehose.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose">MskClusterLoggingInfoBrokerLogsFirehose</a>

---

##### `PutS3` <a name="PutS3" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.putS3"></a>

```csharp
private void PutS3(MskClusterLoggingInfoBrokerLogsS3 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3">MskClusterLoggingInfoBrokerLogsS3</a>

---

##### `ResetCloudwatchLogs` <a name="ResetCloudwatchLogs" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.resetCloudwatchLogs"></a>

```csharp
private void ResetCloudwatchLogs()
```

##### `ResetFirehose` <a name="ResetFirehose" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.resetFirehose"></a>

```csharp
private void ResetFirehose()
```

##### `ResetS3` <a name="ResetS3" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.resetS3"></a>

```csharp
private void ResetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference">MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.firehose">Firehose</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference">MskClusterLoggingInfoBrokerLogsFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference">MskClusterLoggingInfoBrokerLogsS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.cloudwatchLogsInput">CloudwatchLogsInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs">MskClusterLoggingInfoBrokerLogsCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.firehoseInput">FirehoseInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose">MskClusterLoggingInfoBrokerLogsFirehose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.s3Input">S3Input</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3">MskClusterLoggingInfoBrokerLogsS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogs">MskClusterLoggingInfoBrokerLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchLogs`<sup>Required</sup> <a name="CloudwatchLogs" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.cloudwatchLogs"></a>

```csharp
public MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference CloudwatchLogs { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference">MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference</a>

---

##### `Firehose`<sup>Required</sup> <a name="Firehose" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.firehose"></a>

```csharp
public MskClusterLoggingInfoBrokerLogsFirehoseOutputReference Firehose { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference">MskClusterLoggingInfoBrokerLogsFirehoseOutputReference</a>

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.s3"></a>

```csharp
public MskClusterLoggingInfoBrokerLogsS3OutputReference S3 { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference">MskClusterLoggingInfoBrokerLogsS3OutputReference</a>

---

##### `CloudwatchLogsInput`<sup>Optional</sup> <a name="CloudwatchLogsInput" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.cloudwatchLogsInput"></a>

```csharp
public MskClusterLoggingInfoBrokerLogsCloudwatchLogs CloudwatchLogsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs">MskClusterLoggingInfoBrokerLogsCloudwatchLogs</a>

---

##### `FirehoseInput`<sup>Optional</sup> <a name="FirehoseInput" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.firehoseInput"></a>

```csharp
public MskClusterLoggingInfoBrokerLogsFirehose FirehoseInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose">MskClusterLoggingInfoBrokerLogsFirehose</a>

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.s3Input"></a>

```csharp
public MskClusterLoggingInfoBrokerLogsS3 S3Input { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3">MskClusterLoggingInfoBrokerLogsS3</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.internalValue"></a>

```csharp
public MskClusterLoggingInfoBrokerLogs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogs">MskClusterLoggingInfoBrokerLogs</a>

---


### MskClusterLoggingInfoBrokerLogsS3OutputReference <a name="MskClusterLoggingInfoBrokerLogsS3OutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskClusterLoggingInfoBrokerLogsS3OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3">MskClusterLoggingInfoBrokerLogsS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.internalValue"></a>

```csharp
public MskClusterLoggingInfoBrokerLogsS3 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsS3">MskClusterLoggingInfoBrokerLogsS3</a>

---


### MskClusterLoggingInfoOutputReference <a name="MskClusterLoggingInfoOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskClusterLoggingInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.putBrokerLogs">PutBrokerLogs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBrokerLogs` <a name="PutBrokerLogs" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.putBrokerLogs"></a>

```csharp
private void PutBrokerLogs(MskClusterLoggingInfoBrokerLogs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.putBrokerLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogs">MskClusterLoggingInfoBrokerLogs</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.property.brokerLogs">BrokerLogs</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference">MskClusterLoggingInfoBrokerLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.property.brokerLogsInput">BrokerLogsInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogs">MskClusterLoggingInfoBrokerLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfo">MskClusterLoggingInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BrokerLogs`<sup>Required</sup> <a name="BrokerLogs" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.property.brokerLogs"></a>

```csharp
public MskClusterLoggingInfoBrokerLogsOutputReference BrokerLogs { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference">MskClusterLoggingInfoBrokerLogsOutputReference</a>

---

##### `BrokerLogsInput`<sup>Optional</sup> <a name="BrokerLogsInput" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.property.brokerLogsInput"></a>

```csharp
public MskClusterLoggingInfoBrokerLogs BrokerLogsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoBrokerLogs">MskClusterLoggingInfoBrokerLogs</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskCluster.MskClusterLoggingInfoOutputReference.property.internalValue"></a>

```csharp
public MskClusterLoggingInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterLoggingInfo">MskClusterLoggingInfo</a>

---


### MskClusterOpenMonitoringOutputReference <a name="MskClusterOpenMonitoringOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskClusterOpenMonitoringOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.putPrometheus">PutPrometheus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrometheus` <a name="PutPrometheus" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.putPrometheus"></a>

```csharp
private void PutPrometheus(MskClusterOpenMonitoringPrometheus Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.putPrometheus.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheus">MskClusterOpenMonitoringPrometheus</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.property.prometheus">Prometheus</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference">MskClusterOpenMonitoringPrometheusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.property.prometheusInput">PrometheusInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheus">MskClusterOpenMonitoringPrometheus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoring">MskClusterOpenMonitoring</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Prometheus`<sup>Required</sup> <a name="Prometheus" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.property.prometheus"></a>

```csharp
public MskClusterOpenMonitoringPrometheusOutputReference Prometheus { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference">MskClusterOpenMonitoringPrometheusOutputReference</a>

---

##### `PrometheusInput`<sup>Optional</sup> <a name="PrometheusInput" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.property.prometheusInput"></a>

```csharp
public MskClusterOpenMonitoringPrometheus PrometheusInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheus">MskClusterOpenMonitoringPrometheus</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringOutputReference.property.internalValue"></a>

```csharp
public MskClusterOpenMonitoring InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoring">MskClusterOpenMonitoring</a>

---


### MskClusterOpenMonitoringPrometheusJmxExporterOutputReference <a name="MskClusterOpenMonitoringPrometheusJmxExporterOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskClusterOpenMonitoringPrometheusJmxExporterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.enabledInBrokerInput">EnabledInBrokerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.enabledInBroker">EnabledInBroker</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter">MskClusterOpenMonitoringPrometheusJmxExporter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInBrokerInput`<sup>Optional</sup> <a name="EnabledInBrokerInput" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.enabledInBrokerInput"></a>

```csharp
public object EnabledInBrokerInput { get; }
```

- *Type:* object

---

##### `EnabledInBroker`<sup>Required</sup> <a name="EnabledInBroker" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.enabledInBroker"></a>

```csharp
public object EnabledInBroker { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.internalValue"></a>

```csharp
public MskClusterOpenMonitoringPrometheusJmxExporter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter">MskClusterOpenMonitoringPrometheusJmxExporter</a>

---


### MskClusterOpenMonitoringPrometheusNodeExporterOutputReference <a name="MskClusterOpenMonitoringPrometheusNodeExporterOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskClusterOpenMonitoringPrometheusNodeExporterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.enabledInBrokerInput">EnabledInBrokerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.enabledInBroker">EnabledInBroker</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter">MskClusterOpenMonitoringPrometheusNodeExporter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInBrokerInput`<sup>Optional</sup> <a name="EnabledInBrokerInput" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.enabledInBrokerInput"></a>

```csharp
public object EnabledInBrokerInput { get; }
```

- *Type:* object

---

##### `EnabledInBroker`<sup>Required</sup> <a name="EnabledInBroker" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.enabledInBroker"></a>

```csharp
public object EnabledInBroker { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.internalValue"></a>

```csharp
public MskClusterOpenMonitoringPrometheusNodeExporter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter">MskClusterOpenMonitoringPrometheusNodeExporter</a>

---


### MskClusterOpenMonitoringPrometheusOutputReference <a name="MskClusterOpenMonitoringPrometheusOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskClusterOpenMonitoringPrometheusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.putJmxExporter">PutJmxExporter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.putNodeExporter">PutNodeExporter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.resetJmxExporter">ResetJmxExporter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.resetNodeExporter">ResetNodeExporter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutJmxExporter` <a name="PutJmxExporter" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.putJmxExporter"></a>

```csharp
private void PutJmxExporter(MskClusterOpenMonitoringPrometheusJmxExporter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.putJmxExporter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter">MskClusterOpenMonitoringPrometheusJmxExporter</a>

---

##### `PutNodeExporter` <a name="PutNodeExporter" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.putNodeExporter"></a>

```csharp
private void PutNodeExporter(MskClusterOpenMonitoringPrometheusNodeExporter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.putNodeExporter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter">MskClusterOpenMonitoringPrometheusNodeExporter</a>

---

##### `ResetJmxExporter` <a name="ResetJmxExporter" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.resetJmxExporter"></a>

```csharp
private void ResetJmxExporter()
```

##### `ResetNodeExporter` <a name="ResetNodeExporter" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.resetNodeExporter"></a>

```csharp
private void ResetNodeExporter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.jmxExporter">JmxExporter</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference">MskClusterOpenMonitoringPrometheusJmxExporterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.nodeExporter">NodeExporter</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference">MskClusterOpenMonitoringPrometheusNodeExporterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.jmxExporterInput">JmxExporterInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter">MskClusterOpenMonitoringPrometheusJmxExporter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.nodeExporterInput">NodeExporterInput</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter">MskClusterOpenMonitoringPrometheusNodeExporter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheus">MskClusterOpenMonitoringPrometheus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `JmxExporter`<sup>Required</sup> <a name="JmxExporter" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.jmxExporter"></a>

```csharp
public MskClusterOpenMonitoringPrometheusJmxExporterOutputReference JmxExporter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference">MskClusterOpenMonitoringPrometheusJmxExporterOutputReference</a>

---

##### `NodeExporter`<sup>Required</sup> <a name="NodeExporter" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.nodeExporter"></a>

```csharp
public MskClusterOpenMonitoringPrometheusNodeExporterOutputReference NodeExporter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference">MskClusterOpenMonitoringPrometheusNodeExporterOutputReference</a>

---

##### `JmxExporterInput`<sup>Optional</sup> <a name="JmxExporterInput" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.jmxExporterInput"></a>

```csharp
public MskClusterOpenMonitoringPrometheusJmxExporter JmxExporterInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter">MskClusterOpenMonitoringPrometheusJmxExporter</a>

---

##### `NodeExporterInput`<sup>Optional</sup> <a name="NodeExporterInput" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.nodeExporterInput"></a>

```csharp
public MskClusterOpenMonitoringPrometheusNodeExporter NodeExporterInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter">MskClusterOpenMonitoringPrometheusNodeExporter</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.internalValue"></a>

```csharp
public MskClusterOpenMonitoringPrometheus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskCluster.MskClusterOpenMonitoringPrometheus">MskClusterOpenMonitoringPrometheus</a>

---


### MskClusterTimeoutsOutputReference <a name="MskClusterTimeoutsOutputReference" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskClusterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskCluster.MskClusterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



