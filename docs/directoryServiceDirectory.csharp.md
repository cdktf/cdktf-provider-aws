# `directoryServiceDirectory` Submodule <a name="`directoryServiceDirectory` Submodule" id="@cdktf/provider-aws.directoryServiceDirectory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectoryServiceDirectory <a name="DirectoryServiceDirectory" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory aws_directory_service_directory}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DirectoryServiceDirectory(Construct Scope, string Id, DirectoryServiceDirectoryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig">DirectoryServiceDirectoryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig">DirectoryServiceDirectoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putConnectSettings">PutConnectSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putVpcSettings">PutVpcSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetConnectSettings">ResetConnectSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetDesiredNumberOfDomainControllers">ResetDesiredNumberOfDomainControllers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetEdition">ResetEdition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetEnableSso">ResetEnableSso</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetShortName">ResetShortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetSize">ResetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetVpcSettings">ResetVpcSettings</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutConnectSettings` <a name="PutConnectSettings" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putConnectSettings"></a>

```csharp
private void PutConnectSettings(DirectoryServiceDirectoryConnectSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putConnectSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings">DirectoryServiceDirectoryConnectSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putTimeouts"></a>

```csharp
private void PutTimeouts(DirectoryServiceDirectoryTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts">DirectoryServiceDirectoryTimeouts</a>

---

##### `PutVpcSettings` <a name="PutVpcSettings" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putVpcSettings"></a>

```csharp
private void PutVpcSettings(DirectoryServiceDirectoryVpcSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putVpcSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings">DirectoryServiceDirectoryVpcSettings</a>

---

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetConnectSettings` <a name="ResetConnectSettings" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetConnectSettings"></a>

```csharp
private void ResetConnectSettings()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDesiredNumberOfDomainControllers` <a name="ResetDesiredNumberOfDomainControllers" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetDesiredNumberOfDomainControllers"></a>

```csharp
private void ResetDesiredNumberOfDomainControllers()
```

##### `ResetEdition` <a name="ResetEdition" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetEdition"></a>

```csharp
private void ResetEdition()
```

##### `ResetEnableSso` <a name="ResetEnableSso" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetEnableSso"></a>

```csharp
private void ResetEnableSso()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetShortName` <a name="ResetShortName" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetShortName"></a>

```csharp
private void ResetShortName()
```

##### `ResetSize` <a name="ResetSize" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetSize"></a>

```csharp
private void ResetSize()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetVpcSettings` <a name="ResetVpcSettings" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetVpcSettings"></a>

```csharp
private void ResetVpcSettings()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DirectoryServiceDirectory.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DirectoryServiceDirectory.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DirectoryServiceDirectory.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.accessUrl">AccessUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.connectSettings">ConnectSettings</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference">DirectoryServiceDirectoryConnectSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.dnsIpAddresses">DnsIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.securityGroupId">SecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference">DirectoryServiceDirectoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.vpcSettings">VpcSettings</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference">DirectoryServiceDirectoryVpcSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.connectSettingsInput">ConnectSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings">DirectoryServiceDirectoryConnectSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.desiredNumberOfDomainControllersInput">DesiredNumberOfDomainControllersInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.editionInput">EditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.enableSsoInput">EnableSsoInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.shortNameInput">ShortNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.sizeInput">SizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.vpcSettingsInput">VpcSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings">DirectoryServiceDirectoryVpcSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.desiredNumberOfDomainControllers">DesiredNumberOfDomainControllers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.edition">Edition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.enableSso">EnableSso</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.shortName">ShortName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.size">Size</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccessUrl`<sup>Required</sup> <a name="AccessUrl" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.accessUrl"></a>

```csharp
public string AccessUrl { get; }
```

- *Type:* string

---

##### `ConnectSettings`<sup>Required</sup> <a name="ConnectSettings" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.connectSettings"></a>

```csharp
public DirectoryServiceDirectoryConnectSettingsOutputReference ConnectSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference">DirectoryServiceDirectoryConnectSettingsOutputReference</a>

---

##### `DnsIpAddresses`<sup>Required</sup> <a name="DnsIpAddresses" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.dnsIpAddresses"></a>

```csharp
public string[] DnsIpAddresses { get; }
```

- *Type:* string[]

---

##### `SecurityGroupId`<sup>Required</sup> <a name="SecurityGroupId" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.securityGroupId"></a>

```csharp
public string SecurityGroupId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.timeouts"></a>

```csharp
public DirectoryServiceDirectoryTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference">DirectoryServiceDirectoryTimeoutsOutputReference</a>

---

##### `VpcSettings`<sup>Required</sup> <a name="VpcSettings" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.vpcSettings"></a>

```csharp
public DirectoryServiceDirectoryVpcSettingsOutputReference VpcSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference">DirectoryServiceDirectoryVpcSettingsOutputReference</a>

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `ConnectSettingsInput`<sup>Optional</sup> <a name="ConnectSettingsInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.connectSettingsInput"></a>

```csharp
public DirectoryServiceDirectoryConnectSettings ConnectSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings">DirectoryServiceDirectoryConnectSettings</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DesiredNumberOfDomainControllersInput`<sup>Optional</sup> <a name="DesiredNumberOfDomainControllersInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.desiredNumberOfDomainControllersInput"></a>

```csharp
public double DesiredNumberOfDomainControllersInput { get; }
```

- *Type:* double

---

##### `EditionInput`<sup>Optional</sup> <a name="EditionInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.editionInput"></a>

```csharp
public string EditionInput { get; }
```

- *Type:* string

---

##### `EnableSsoInput`<sup>Optional</sup> <a name="EnableSsoInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.enableSsoInput"></a>

```csharp
public object EnableSsoInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `ShortNameInput`<sup>Optional</sup> <a name="ShortNameInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.shortNameInput"></a>

```csharp
public string ShortNameInput { get; }
```

- *Type:* string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.sizeInput"></a>

```csharp
public string SizeInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `VpcSettingsInput`<sup>Optional</sup> <a name="VpcSettingsInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.vpcSettingsInput"></a>

```csharp
public DirectoryServiceDirectoryVpcSettings VpcSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings">DirectoryServiceDirectoryVpcSettings</a>

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DesiredNumberOfDomainControllers`<sup>Required</sup> <a name="DesiredNumberOfDomainControllers" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.desiredNumberOfDomainControllers"></a>

```csharp
public double DesiredNumberOfDomainControllers { get; }
```

- *Type:* double

---

##### `Edition`<sup>Required</sup> <a name="Edition" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.edition"></a>

```csharp
public string Edition { get; }
```

- *Type:* string

---

##### `EnableSso`<sup>Required</sup> <a name="EnableSso" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.enableSso"></a>

```csharp
public object EnableSso { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `ShortName`<sup>Required</sup> <a name="ShortName" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.shortName"></a>

```csharp
public string ShortName { get; }
```

- *Type:* string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.size"></a>

```csharp
public string Size { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DirectoryServiceDirectoryConfig <a name="DirectoryServiceDirectoryConfig" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DirectoryServiceDirectoryConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Password,
    string Alias = null,
    DirectoryServiceDirectoryConnectSettings ConnectSettings = null,
    string Description = null,
    double DesiredNumberOfDomainControllers = null,
    string Edition = null,
    object EnableSso = null,
    string Id = null,
    string ShortName = null,
    string Size = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    DirectoryServiceDirectoryTimeouts Timeouts = null,
    string Type = null,
    DirectoryServiceDirectoryVpcSettings VpcSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#name DirectoryServiceDirectory#name}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#password DirectoryServiceDirectory#password}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.alias">Alias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#alias DirectoryServiceDirectory#alias}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.connectSettings">ConnectSettings</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings">DirectoryServiceDirectoryConnectSettings</a></code> | connect_settings block. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#description DirectoryServiceDirectory#description}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.desiredNumberOfDomainControllers">DesiredNumberOfDomainControllers</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#desired_number_of_domain_controllers DirectoryServiceDirectory#desired_number_of_domain_controllers}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.edition">Edition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#edition DirectoryServiceDirectory#edition}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.enableSso">EnableSso</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#enable_sso DirectoryServiceDirectory#enable_sso}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#id DirectoryServiceDirectory#id}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.shortName">ShortName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#short_name DirectoryServiceDirectory#short_name}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.size">Size</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#size DirectoryServiceDirectory#size}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#tags DirectoryServiceDirectory#tags}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#tags_all DirectoryServiceDirectory#tags_all}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts">DirectoryServiceDirectoryTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#type DirectoryServiceDirectory#type}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.vpcSettings">VpcSettings</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings">DirectoryServiceDirectoryVpcSettings</a></code> | vpc_settings block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#name DirectoryServiceDirectory#name}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#password DirectoryServiceDirectory#password}.

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#alias DirectoryServiceDirectory#alias}.

---

##### `ConnectSettings`<sup>Optional</sup> <a name="ConnectSettings" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.connectSettings"></a>

```csharp
public DirectoryServiceDirectoryConnectSettings ConnectSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings">DirectoryServiceDirectoryConnectSettings</a>

connect_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#connect_settings DirectoryServiceDirectory#connect_settings}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#description DirectoryServiceDirectory#description}.

---

##### `DesiredNumberOfDomainControllers`<sup>Optional</sup> <a name="DesiredNumberOfDomainControllers" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.desiredNumberOfDomainControllers"></a>

```csharp
public double DesiredNumberOfDomainControllers { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#desired_number_of_domain_controllers DirectoryServiceDirectory#desired_number_of_domain_controllers}.

---

##### `Edition`<sup>Optional</sup> <a name="Edition" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.edition"></a>

```csharp
public string Edition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#edition DirectoryServiceDirectory#edition}.

---

##### `EnableSso`<sup>Optional</sup> <a name="EnableSso" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.enableSso"></a>

```csharp
public object EnableSso { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#enable_sso DirectoryServiceDirectory#enable_sso}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#id DirectoryServiceDirectory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ShortName`<sup>Optional</sup> <a name="ShortName" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.shortName"></a>

```csharp
public string ShortName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#short_name DirectoryServiceDirectory#short_name}.

---

##### `Size`<sup>Optional</sup> <a name="Size" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.size"></a>

```csharp
public string Size { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#size DirectoryServiceDirectory#size}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#tags DirectoryServiceDirectory#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#tags_all DirectoryServiceDirectory#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.timeouts"></a>

```csharp
public DirectoryServiceDirectoryTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts">DirectoryServiceDirectoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#timeouts DirectoryServiceDirectory#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#type DirectoryServiceDirectory#type}.

---

##### `VpcSettings`<sup>Optional</sup> <a name="VpcSettings" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.vpcSettings"></a>

```csharp
public DirectoryServiceDirectoryVpcSettings VpcSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings">DirectoryServiceDirectoryVpcSettings</a>

vpc_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#vpc_settings DirectoryServiceDirectory#vpc_settings}

---

### DirectoryServiceDirectoryConnectSettings <a name="DirectoryServiceDirectoryConnectSettings" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DirectoryServiceDirectoryConnectSettings {
    string[] CustomerDnsIps,
    string CustomerUsername,
    string[] SubnetIds,
    string VpcId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings.property.customerDnsIps">CustomerDnsIps</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#customer_dns_ips DirectoryServiceDirectory#customer_dns_ips}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings.property.customerUsername">CustomerUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#customer_username DirectoryServiceDirectory#customer_username}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#subnet_ids DirectoryServiceDirectory#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#vpc_id DirectoryServiceDirectory#vpc_id}. |

---

##### `CustomerDnsIps`<sup>Required</sup> <a name="CustomerDnsIps" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings.property.customerDnsIps"></a>

```csharp
public string[] CustomerDnsIps { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#customer_dns_ips DirectoryServiceDirectory#customer_dns_ips}.

---

##### `CustomerUsername`<sup>Required</sup> <a name="CustomerUsername" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings.property.customerUsername"></a>

```csharp
public string CustomerUsername { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#customer_username DirectoryServiceDirectory#customer_username}.

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#subnet_ids DirectoryServiceDirectory#subnet_ids}.

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#vpc_id DirectoryServiceDirectory#vpc_id}.

---

### DirectoryServiceDirectoryTimeouts <a name="DirectoryServiceDirectoryTimeouts" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DirectoryServiceDirectoryTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#create DirectoryServiceDirectory#create}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#delete DirectoryServiceDirectory#delete}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#update DirectoryServiceDirectory#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#create DirectoryServiceDirectory#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#delete DirectoryServiceDirectory#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#update DirectoryServiceDirectory#update}.

---

### DirectoryServiceDirectoryVpcSettings <a name="DirectoryServiceDirectoryVpcSettings" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DirectoryServiceDirectoryVpcSettings {
    string[] SubnetIds,
    string VpcId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#subnet_ids DirectoryServiceDirectory#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#vpc_id DirectoryServiceDirectory#vpc_id}. |

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#subnet_ids DirectoryServiceDirectory#subnet_ids}.

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#vpc_id DirectoryServiceDirectory#vpc_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DirectoryServiceDirectoryConnectSettingsOutputReference <a name="DirectoryServiceDirectoryConnectSettingsOutputReference" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DirectoryServiceDirectoryConnectSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.availabilityZones">AvailabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.connectIps">ConnectIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.customerDnsIpsInput">CustomerDnsIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.customerUsernameInput">CustomerUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.customerDnsIps">CustomerDnsIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.customerUsername">CustomerUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings">DirectoryServiceDirectoryConnectSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.availabilityZones"></a>

```csharp
public string[] AvailabilityZones { get; }
```

- *Type:* string[]

---

##### `ConnectIps`<sup>Required</sup> <a name="ConnectIps" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.connectIps"></a>

```csharp
public string[] ConnectIps { get; }
```

- *Type:* string[]

---

##### `CustomerDnsIpsInput`<sup>Optional</sup> <a name="CustomerDnsIpsInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.customerDnsIpsInput"></a>

```csharp
public string[] CustomerDnsIpsInput { get; }
```

- *Type:* string[]

---

##### `CustomerUsernameInput`<sup>Optional</sup> <a name="CustomerUsernameInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.customerUsernameInput"></a>

```csharp
public string CustomerUsernameInput { get; }
```

- *Type:* string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `CustomerDnsIps`<sup>Required</sup> <a name="CustomerDnsIps" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.customerDnsIps"></a>

```csharp
public string[] CustomerDnsIps { get; }
```

- *Type:* string[]

---

##### `CustomerUsername`<sup>Required</sup> <a name="CustomerUsername" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.customerUsername"></a>

```csharp
public string CustomerUsername { get; }
```

- *Type:* string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.internalValue"></a>

```csharp
public DirectoryServiceDirectoryConnectSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings">DirectoryServiceDirectoryConnectSettings</a>

---


### DirectoryServiceDirectoryTimeoutsOutputReference <a name="DirectoryServiceDirectoryTimeoutsOutputReference" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DirectoryServiceDirectoryTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DirectoryServiceDirectoryVpcSettingsOutputReference <a name="DirectoryServiceDirectoryVpcSettingsOutputReference" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DirectoryServiceDirectoryVpcSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.availabilityZones">AvailabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings">DirectoryServiceDirectoryVpcSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.availabilityZones"></a>

```csharp
public string[] AvailabilityZones { get; }
```

- *Type:* string[]

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.internalValue"></a>

```csharp
public DirectoryServiceDirectoryVpcSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings">DirectoryServiceDirectoryVpcSettings</a>

---



