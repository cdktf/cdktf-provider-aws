# `opsworksStack` Submodule <a name="`opsworksStack` Submodule" id="@cdktf/provider-aws.opsworksStack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsworksStack <a name="OpsworksStack" id="@cdktf/provider-aws.opsworksStack.OpsworksStack"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack aws_opsworks_stack}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksStack(Construct Scope, string Id, OpsworksStackConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig">OpsworksStackConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig">OpsworksStackConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.putCustomCookbooksSource">PutCustomCookbooksSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetAgentVersion">ResetAgentVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetBerkshelfVersion">ResetBerkshelfVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetColor">ResetColor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetConfigurationManagerName">ResetConfigurationManagerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetConfigurationManagerVersion">ResetConfigurationManagerVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetCustomCookbooksSource">ResetCustomCookbooksSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetCustomJson">ResetCustomJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetDefaultAvailabilityZone">ResetDefaultAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetDefaultOs">ResetDefaultOs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetDefaultRootDeviceType">ResetDefaultRootDeviceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetDefaultSshKeyName">ResetDefaultSshKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetDefaultSubnetId">ResetDefaultSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetHostnameTheme">ResetHostnameTheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetManageBerkshelf">ResetManageBerkshelf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetUseCustomCookbooks">ResetUseCustomCookbooks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetUseOpsworksSecurityGroups">ResetUseOpsworksSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetVpcId">ResetVpcId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutCustomCookbooksSource` <a name="PutCustomCookbooksSource" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.putCustomCookbooksSource"></a>

```csharp
private void PutCustomCookbooksSource(OpsworksStackCustomCookbooksSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.putCustomCookbooksSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource">OpsworksStackCustomCookbooksSource</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.putTimeouts"></a>

```csharp
private void PutTimeouts(OpsworksStackTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeouts">OpsworksStackTimeouts</a>

---

##### `ResetAgentVersion` <a name="ResetAgentVersion" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetAgentVersion"></a>

```csharp
private void ResetAgentVersion()
```

##### `ResetBerkshelfVersion` <a name="ResetBerkshelfVersion" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetBerkshelfVersion"></a>

```csharp
private void ResetBerkshelfVersion()
```

##### `ResetColor` <a name="ResetColor" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetColor"></a>

```csharp
private void ResetColor()
```

##### `ResetConfigurationManagerName` <a name="ResetConfigurationManagerName" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetConfigurationManagerName"></a>

```csharp
private void ResetConfigurationManagerName()
```

##### `ResetConfigurationManagerVersion` <a name="ResetConfigurationManagerVersion" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetConfigurationManagerVersion"></a>

```csharp
private void ResetConfigurationManagerVersion()
```

##### `ResetCustomCookbooksSource` <a name="ResetCustomCookbooksSource" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetCustomCookbooksSource"></a>

```csharp
private void ResetCustomCookbooksSource()
```

##### `ResetCustomJson` <a name="ResetCustomJson" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetCustomJson"></a>

```csharp
private void ResetCustomJson()
```

##### `ResetDefaultAvailabilityZone` <a name="ResetDefaultAvailabilityZone" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetDefaultAvailabilityZone"></a>

```csharp
private void ResetDefaultAvailabilityZone()
```

##### `ResetDefaultOs` <a name="ResetDefaultOs" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetDefaultOs"></a>

```csharp
private void ResetDefaultOs()
```

##### `ResetDefaultRootDeviceType` <a name="ResetDefaultRootDeviceType" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetDefaultRootDeviceType"></a>

```csharp
private void ResetDefaultRootDeviceType()
```

##### `ResetDefaultSshKeyName` <a name="ResetDefaultSshKeyName" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetDefaultSshKeyName"></a>

```csharp
private void ResetDefaultSshKeyName()
```

##### `ResetDefaultSubnetId` <a name="ResetDefaultSubnetId" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetDefaultSubnetId"></a>

```csharp
private void ResetDefaultSubnetId()
```

##### `ResetHostnameTheme` <a name="ResetHostnameTheme" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetHostnameTheme"></a>

```csharp
private void ResetHostnameTheme()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetManageBerkshelf` <a name="ResetManageBerkshelf" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetManageBerkshelf"></a>

```csharp
private void ResetManageBerkshelf()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUseCustomCookbooks` <a name="ResetUseCustomCookbooks" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetUseCustomCookbooks"></a>

```csharp
private void ResetUseCustomCookbooks()
```

##### `ResetUseOpsworksSecurityGroups` <a name="ResetUseOpsworksSecurityGroups" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetUseOpsworksSecurityGroups"></a>

```csharp
private void ResetUseOpsworksSecurityGroups()
```

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetVpcId"></a>

```csharp
private void ResetVpcId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

OpsworksStack.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

OpsworksStack.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

OpsworksStack.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.customCookbooksSource">CustomCookbooksSource</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference">OpsworksStackCustomCookbooksSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.stackEndpoint">StackEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference">OpsworksStackTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.agentVersionInput">AgentVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.berkshelfVersionInput">BerkshelfVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.colorInput">ColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.configurationManagerNameInput">ConfigurationManagerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.configurationManagerVersionInput">ConfigurationManagerVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.customCookbooksSourceInput">CustomCookbooksSourceInput</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource">OpsworksStackCustomCookbooksSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.customJsonInput">CustomJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultAvailabilityZoneInput">DefaultAvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultInstanceProfileArnInput">DefaultInstanceProfileArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultOsInput">DefaultOsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultRootDeviceTypeInput">DefaultRootDeviceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultSshKeyNameInput">DefaultSshKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultSubnetIdInput">DefaultSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.hostnameThemeInput">HostnameThemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.manageBerkshelfInput">ManageBerkshelfInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.serviceRoleArnInput">ServiceRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.useCustomCookbooksInput">UseCustomCookbooksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.useOpsworksSecurityGroupsInput">UseOpsworksSecurityGroupsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.agentVersion">AgentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.berkshelfVersion">BerkshelfVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.color">Color</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.configurationManagerName">ConfigurationManagerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.configurationManagerVersion">ConfigurationManagerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.customJson">CustomJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultAvailabilityZone">DefaultAvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultInstanceProfileArn">DefaultInstanceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultOs">DefaultOs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultRootDeviceType">DefaultRootDeviceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultSshKeyName">DefaultSshKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultSubnetId">DefaultSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.hostnameTheme">HostnameTheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.manageBerkshelf">ManageBerkshelf</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.serviceRoleArn">ServiceRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.useCustomCookbooks">UseCustomCookbooks</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.useOpsworksSecurityGroups">UseOpsworksSecurityGroups</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CustomCookbooksSource`<sup>Required</sup> <a name="CustomCookbooksSource" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.customCookbooksSource"></a>

```csharp
public OpsworksStackCustomCookbooksSourceOutputReference CustomCookbooksSource { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference">OpsworksStackCustomCookbooksSourceOutputReference</a>

---

##### `StackEndpoint`<sup>Required</sup> <a name="StackEndpoint" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.stackEndpoint"></a>

```csharp
public string StackEndpoint { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.timeouts"></a>

```csharp
public OpsworksStackTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference">OpsworksStackTimeoutsOutputReference</a>

---

##### `AgentVersionInput`<sup>Optional</sup> <a name="AgentVersionInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.agentVersionInput"></a>

```csharp
public string AgentVersionInput { get; }
```

- *Type:* string

---

##### `BerkshelfVersionInput`<sup>Optional</sup> <a name="BerkshelfVersionInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.berkshelfVersionInput"></a>

```csharp
public string BerkshelfVersionInput { get; }
```

- *Type:* string

---

##### `ColorInput`<sup>Optional</sup> <a name="ColorInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.colorInput"></a>

```csharp
public string ColorInput { get; }
```

- *Type:* string

---

##### `ConfigurationManagerNameInput`<sup>Optional</sup> <a name="ConfigurationManagerNameInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.configurationManagerNameInput"></a>

```csharp
public string ConfigurationManagerNameInput { get; }
```

- *Type:* string

---

##### `ConfigurationManagerVersionInput`<sup>Optional</sup> <a name="ConfigurationManagerVersionInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.configurationManagerVersionInput"></a>

```csharp
public string ConfigurationManagerVersionInput { get; }
```

- *Type:* string

---

##### `CustomCookbooksSourceInput`<sup>Optional</sup> <a name="CustomCookbooksSourceInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.customCookbooksSourceInput"></a>

```csharp
public OpsworksStackCustomCookbooksSource CustomCookbooksSourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource">OpsworksStackCustomCookbooksSource</a>

---

##### `CustomJsonInput`<sup>Optional</sup> <a name="CustomJsonInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.customJsonInput"></a>

```csharp
public string CustomJsonInput { get; }
```

- *Type:* string

---

##### `DefaultAvailabilityZoneInput`<sup>Optional</sup> <a name="DefaultAvailabilityZoneInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultAvailabilityZoneInput"></a>

```csharp
public string DefaultAvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `DefaultInstanceProfileArnInput`<sup>Optional</sup> <a name="DefaultInstanceProfileArnInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultInstanceProfileArnInput"></a>

```csharp
public string DefaultInstanceProfileArnInput { get; }
```

- *Type:* string

---

##### `DefaultOsInput`<sup>Optional</sup> <a name="DefaultOsInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultOsInput"></a>

```csharp
public string DefaultOsInput { get; }
```

- *Type:* string

---

##### `DefaultRootDeviceTypeInput`<sup>Optional</sup> <a name="DefaultRootDeviceTypeInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultRootDeviceTypeInput"></a>

```csharp
public string DefaultRootDeviceTypeInput { get; }
```

- *Type:* string

---

##### `DefaultSshKeyNameInput`<sup>Optional</sup> <a name="DefaultSshKeyNameInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultSshKeyNameInput"></a>

```csharp
public string DefaultSshKeyNameInput { get; }
```

- *Type:* string

---

##### `DefaultSubnetIdInput`<sup>Optional</sup> <a name="DefaultSubnetIdInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultSubnetIdInput"></a>

```csharp
public string DefaultSubnetIdInput { get; }
```

- *Type:* string

---

##### `HostnameThemeInput`<sup>Optional</sup> <a name="HostnameThemeInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.hostnameThemeInput"></a>

```csharp
public string HostnameThemeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManageBerkshelfInput`<sup>Optional</sup> <a name="ManageBerkshelfInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.manageBerkshelfInput"></a>

```csharp
public object ManageBerkshelfInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ServiceRoleArnInput`<sup>Optional</sup> <a name="ServiceRoleArnInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.serviceRoleArnInput"></a>

```csharp
public string ServiceRoleArnInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UseCustomCookbooksInput`<sup>Optional</sup> <a name="UseCustomCookbooksInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.useCustomCookbooksInput"></a>

```csharp
public object UseCustomCookbooksInput { get; }
```

- *Type:* object

---

##### `UseOpsworksSecurityGroupsInput`<sup>Optional</sup> <a name="UseOpsworksSecurityGroupsInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.useOpsworksSecurityGroupsInput"></a>

```csharp
public object UseOpsworksSecurityGroupsInput { get; }
```

- *Type:* object

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `AgentVersion`<sup>Required</sup> <a name="AgentVersion" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.agentVersion"></a>

```csharp
public string AgentVersion { get; }
```

- *Type:* string

---

##### `BerkshelfVersion`<sup>Required</sup> <a name="BerkshelfVersion" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.berkshelfVersion"></a>

```csharp
public string BerkshelfVersion { get; }
```

- *Type:* string

---

##### `Color`<sup>Required</sup> <a name="Color" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.color"></a>

```csharp
public string Color { get; }
```

- *Type:* string

---

##### `ConfigurationManagerName`<sup>Required</sup> <a name="ConfigurationManagerName" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.configurationManagerName"></a>

```csharp
public string ConfigurationManagerName { get; }
```

- *Type:* string

---

##### `ConfigurationManagerVersion`<sup>Required</sup> <a name="ConfigurationManagerVersion" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.configurationManagerVersion"></a>

```csharp
public string ConfigurationManagerVersion { get; }
```

- *Type:* string

---

##### `CustomJson`<sup>Required</sup> <a name="CustomJson" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.customJson"></a>

```csharp
public string CustomJson { get; }
```

- *Type:* string

---

##### `DefaultAvailabilityZone`<sup>Required</sup> <a name="DefaultAvailabilityZone" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultAvailabilityZone"></a>

```csharp
public string DefaultAvailabilityZone { get; }
```

- *Type:* string

---

##### `DefaultInstanceProfileArn`<sup>Required</sup> <a name="DefaultInstanceProfileArn" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultInstanceProfileArn"></a>

```csharp
public string DefaultInstanceProfileArn { get; }
```

- *Type:* string

---

##### `DefaultOs`<sup>Required</sup> <a name="DefaultOs" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultOs"></a>

```csharp
public string DefaultOs { get; }
```

- *Type:* string

---

##### `DefaultRootDeviceType`<sup>Required</sup> <a name="DefaultRootDeviceType" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultRootDeviceType"></a>

```csharp
public string DefaultRootDeviceType { get; }
```

- *Type:* string

---

##### `DefaultSshKeyName`<sup>Required</sup> <a name="DefaultSshKeyName" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultSshKeyName"></a>

```csharp
public string DefaultSshKeyName { get; }
```

- *Type:* string

---

##### `DefaultSubnetId`<sup>Required</sup> <a name="DefaultSubnetId" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultSubnetId"></a>

```csharp
public string DefaultSubnetId { get; }
```

- *Type:* string

---

##### `HostnameTheme`<sup>Required</sup> <a name="HostnameTheme" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.hostnameTheme"></a>

```csharp
public string HostnameTheme { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManageBerkshelf`<sup>Required</sup> <a name="ManageBerkshelf" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.manageBerkshelf"></a>

```csharp
public object ManageBerkshelf { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ServiceRoleArn`<sup>Required</sup> <a name="ServiceRoleArn" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.serviceRoleArn"></a>

```csharp
public string ServiceRoleArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UseCustomCookbooks`<sup>Required</sup> <a name="UseCustomCookbooks" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.useCustomCookbooks"></a>

```csharp
public object UseCustomCookbooks { get; }
```

- *Type:* object

---

##### `UseOpsworksSecurityGroups`<sup>Required</sup> <a name="UseOpsworksSecurityGroups" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.useOpsworksSecurityGroups"></a>

```csharp
public object UseOpsworksSecurityGroups { get; }
```

- *Type:* object

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpsworksStackConfig <a name="OpsworksStackConfig" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksStackConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DefaultInstanceProfileArn,
    string Name,
    string Region,
    string ServiceRoleArn,
    string AgentVersion = null,
    string BerkshelfVersion = null,
    string Color = null,
    string ConfigurationManagerName = null,
    string ConfigurationManagerVersion = null,
    OpsworksStackCustomCookbooksSource CustomCookbooksSource = null,
    string CustomJson = null,
    string DefaultAvailabilityZone = null,
    string DefaultOs = null,
    string DefaultRootDeviceType = null,
    string DefaultSshKeyName = null,
    string DefaultSubnetId = null,
    string HostnameTheme = null,
    string Id = null,
    object ManageBerkshelf = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    OpsworksStackTimeouts Timeouts = null,
    object UseCustomCookbooks = null,
    object UseOpsworksSecurityGroups = null,
    string VpcId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultInstanceProfileArn">DefaultInstanceProfileArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_instance_profile_arn OpsworksStack#default_instance_profile_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#name OpsworksStack#name}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#region OpsworksStack#region}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.serviceRoleArn">ServiceRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#service_role_arn OpsworksStack#service_role_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.agentVersion">AgentVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#agent_version OpsworksStack#agent_version}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.berkshelfVersion">BerkshelfVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#berkshelf_version OpsworksStack#berkshelf_version}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.color">Color</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#color OpsworksStack#color}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.configurationManagerName">ConfigurationManagerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#configuration_manager_name OpsworksStack#configuration_manager_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.configurationManagerVersion">ConfigurationManagerVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#configuration_manager_version OpsworksStack#configuration_manager_version}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.customCookbooksSource">CustomCookbooksSource</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource">OpsworksStackCustomCookbooksSource</a></code> | custom_cookbooks_source block. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.customJson">CustomJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#custom_json OpsworksStack#custom_json}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultAvailabilityZone">DefaultAvailabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_availability_zone OpsworksStack#default_availability_zone}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultOs">DefaultOs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_os OpsworksStack#default_os}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultRootDeviceType">DefaultRootDeviceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_root_device_type OpsworksStack#default_root_device_type}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultSshKeyName">DefaultSshKeyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_ssh_key_name OpsworksStack#default_ssh_key_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultSubnetId">DefaultSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_subnet_id OpsworksStack#default_subnet_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.hostnameTheme">HostnameTheme</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#hostname_theme OpsworksStack#hostname_theme}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#id OpsworksStack#id}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.manageBerkshelf">ManageBerkshelf</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#manage_berkshelf OpsworksStack#manage_berkshelf}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#tags OpsworksStack#tags}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#tags_all OpsworksStack#tags_all}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeouts">OpsworksStackTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.useCustomCookbooks">UseCustomCookbooks</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#use_custom_cookbooks OpsworksStack#use_custom_cookbooks}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.useOpsworksSecurityGroups">UseOpsworksSecurityGroups</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#use_opsworks_security_groups OpsworksStack#use_opsworks_security_groups}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#vpc_id OpsworksStack#vpc_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DefaultInstanceProfileArn`<sup>Required</sup> <a name="DefaultInstanceProfileArn" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultInstanceProfileArn"></a>

```csharp
public string DefaultInstanceProfileArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_instance_profile_arn OpsworksStack#default_instance_profile_arn}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#name OpsworksStack#name}.

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#region OpsworksStack#region}.

---

##### `ServiceRoleArn`<sup>Required</sup> <a name="ServiceRoleArn" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.serviceRoleArn"></a>

```csharp
public string ServiceRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#service_role_arn OpsworksStack#service_role_arn}.

---

##### `AgentVersion`<sup>Optional</sup> <a name="AgentVersion" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.agentVersion"></a>

```csharp
public string AgentVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#agent_version OpsworksStack#agent_version}.

---

##### `BerkshelfVersion`<sup>Optional</sup> <a name="BerkshelfVersion" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.berkshelfVersion"></a>

```csharp
public string BerkshelfVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#berkshelf_version OpsworksStack#berkshelf_version}.

---

##### `Color`<sup>Optional</sup> <a name="Color" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.color"></a>

```csharp
public string Color { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#color OpsworksStack#color}.

---

##### `ConfigurationManagerName`<sup>Optional</sup> <a name="ConfigurationManagerName" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.configurationManagerName"></a>

```csharp
public string ConfigurationManagerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#configuration_manager_name OpsworksStack#configuration_manager_name}.

---

##### `ConfigurationManagerVersion`<sup>Optional</sup> <a name="ConfigurationManagerVersion" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.configurationManagerVersion"></a>

```csharp
public string ConfigurationManagerVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#configuration_manager_version OpsworksStack#configuration_manager_version}.

---

##### `CustomCookbooksSource`<sup>Optional</sup> <a name="CustomCookbooksSource" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.customCookbooksSource"></a>

```csharp
public OpsworksStackCustomCookbooksSource CustomCookbooksSource { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource">OpsworksStackCustomCookbooksSource</a>

custom_cookbooks_source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#custom_cookbooks_source OpsworksStack#custom_cookbooks_source}

---

##### `CustomJson`<sup>Optional</sup> <a name="CustomJson" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.customJson"></a>

```csharp
public string CustomJson { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#custom_json OpsworksStack#custom_json}.

---

##### `DefaultAvailabilityZone`<sup>Optional</sup> <a name="DefaultAvailabilityZone" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultAvailabilityZone"></a>

```csharp
public string DefaultAvailabilityZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_availability_zone OpsworksStack#default_availability_zone}.

---

##### `DefaultOs`<sup>Optional</sup> <a name="DefaultOs" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultOs"></a>

```csharp
public string DefaultOs { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_os OpsworksStack#default_os}.

---

##### `DefaultRootDeviceType`<sup>Optional</sup> <a name="DefaultRootDeviceType" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultRootDeviceType"></a>

```csharp
public string DefaultRootDeviceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_root_device_type OpsworksStack#default_root_device_type}.

---

##### `DefaultSshKeyName`<sup>Optional</sup> <a name="DefaultSshKeyName" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultSshKeyName"></a>

```csharp
public string DefaultSshKeyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_ssh_key_name OpsworksStack#default_ssh_key_name}.

---

##### `DefaultSubnetId`<sup>Optional</sup> <a name="DefaultSubnetId" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultSubnetId"></a>

```csharp
public string DefaultSubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_subnet_id OpsworksStack#default_subnet_id}.

---

##### `HostnameTheme`<sup>Optional</sup> <a name="HostnameTheme" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.hostnameTheme"></a>

```csharp
public string HostnameTheme { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#hostname_theme OpsworksStack#hostname_theme}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#id OpsworksStack#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ManageBerkshelf`<sup>Optional</sup> <a name="ManageBerkshelf" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.manageBerkshelf"></a>

```csharp
public object ManageBerkshelf { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#manage_berkshelf OpsworksStack#manage_berkshelf}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#tags OpsworksStack#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#tags_all OpsworksStack#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.timeouts"></a>

```csharp
public OpsworksStackTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeouts">OpsworksStackTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#timeouts OpsworksStack#timeouts}

---

##### `UseCustomCookbooks`<sup>Optional</sup> <a name="UseCustomCookbooks" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.useCustomCookbooks"></a>

```csharp
public object UseCustomCookbooks { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#use_custom_cookbooks OpsworksStack#use_custom_cookbooks}.

---

##### `UseOpsworksSecurityGroups`<sup>Optional</sup> <a name="UseOpsworksSecurityGroups" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.useOpsworksSecurityGroups"></a>

```csharp
public object UseOpsworksSecurityGroups { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#use_opsworks_security_groups OpsworksStack#use_opsworks_security_groups}.

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#vpc_id OpsworksStack#vpc_id}.

---

### OpsworksStackCustomCookbooksSource <a name="OpsworksStackCustomCookbooksSource" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksStackCustomCookbooksSource {
    string Type,
    string Url,
    string Password = null,
    string Revision = null,
    string SshKey = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#type OpsworksStack#type}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#url OpsworksStack#url}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#password OpsworksStack#password}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.revision">Revision</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#revision OpsworksStack#revision}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.sshKey">SshKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#ssh_key OpsworksStack#ssh_key}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#username OpsworksStack#username}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#type OpsworksStack#type}.

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#url OpsworksStack#url}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#password OpsworksStack#password}.

---

##### `Revision`<sup>Optional</sup> <a name="Revision" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.revision"></a>

```csharp
public string Revision { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#revision OpsworksStack#revision}.

---

##### `SshKey`<sup>Optional</sup> <a name="SshKey" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.sshKey"></a>

```csharp
public string SshKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#ssh_key OpsworksStack#ssh_key}.

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#username OpsworksStack#username}.

---

### OpsworksStackTimeouts <a name="OpsworksStackTimeouts" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksStackTimeouts {
    string Create = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#create OpsworksStack#create}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#create OpsworksStack#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsworksStackCustomCookbooksSourceOutputReference <a name="OpsworksStackCustomCookbooksSourceOutputReference" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksStackCustomCookbooksSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resetRevision">ResetRevision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resetSshKey">ResetSshKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetRevision` <a name="ResetRevision" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resetRevision"></a>

```csharp
private void ResetRevision()
```

##### `ResetSshKey` <a name="ResetSshKey" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resetSshKey"></a>

```csharp
private void ResetSshKey()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.revisionInput">RevisionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.sshKeyInput">SshKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.revision">Revision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.sshKey">SshKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource">OpsworksStackCustomCookbooksSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `RevisionInput`<sup>Optional</sup> <a name="RevisionInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.revisionInput"></a>

```csharp
public string RevisionInput { get; }
```

- *Type:* string

---

##### `SshKeyInput`<sup>Optional</sup> <a name="SshKeyInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.sshKeyInput"></a>

```csharp
public string SshKeyInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.revision"></a>

```csharp
public string Revision { get; }
```

- *Type:* string

---

##### `SshKey`<sup>Required</sup> <a name="SshKey" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.sshKey"></a>

```csharp
public string SshKey { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.internalValue"></a>

```csharp
public OpsworksStackCustomCookbooksSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource">OpsworksStackCustomCookbooksSource</a>

---


### OpsworksStackTimeoutsOutputReference <a name="OpsworksStackTimeoutsOutputReference" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpsworksStackTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



