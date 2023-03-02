# `mqBroker` Submodule <a name="`mqBroker` Submodule" id="@cdktf/provider-aws.mqBroker"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MqBroker <a name="MqBroker" id="@cdktf/provider-aws.mqBroker.MqBroker"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/mq_broker aws_mq_broker}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MqBroker(Construct Scope, string Id, MqBrokerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig">MqBrokerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.mqBroker.MqBroker.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig">MqBrokerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.putEncryptionOptions">PutEncryptionOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.putLdapServerMetadata">PutLdapServerMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.putLogs">PutLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.putMaintenanceWindowStartTime">PutMaintenanceWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.putUser">PutUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetApplyImmediately">ResetApplyImmediately</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetAuthenticationStrategy">ResetAuthenticationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetAutoMinorVersionUpgrade">ResetAutoMinorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetConfiguration">ResetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetDeploymentMode">ResetDeploymentMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetEncryptionOptions">ResetEncryptionOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetLdapServerMetadata">ResetLdapServerMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetLogs">ResetLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetMaintenanceWindowStartTime">ResetMaintenanceWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetPubliclyAccessible">ResetPubliclyAccessible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetSecurityGroups">ResetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetStorageType">ResetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mqBroker.MqBroker.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.mqBroker.MqBroker.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.mqBroker.MqBroker.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mqBroker.MqBroker.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.mqBroker.MqBroker.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.mqBroker.MqBroker.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.mqBroker.MqBroker.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.mqBroker.MqBroker.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.mqBroker.MqBroker.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBroker.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mqBroker.MqBroker.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBroker.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktf/provider-aws.mqBroker.MqBroker.putConfiguration"></a>

```csharp
private void PutConfiguration(MqBrokerConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mqBroker.MqBroker.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfiguration">MqBrokerConfiguration</a>

---

##### `PutEncryptionOptions` <a name="PutEncryptionOptions" id="@cdktf/provider-aws.mqBroker.MqBroker.putEncryptionOptions"></a>

```csharp
private void PutEncryptionOptions(MqBrokerEncryptionOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mqBroker.MqBroker.putEncryptionOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptions">MqBrokerEncryptionOptions</a>

---

##### `PutLdapServerMetadata` <a name="PutLdapServerMetadata" id="@cdktf/provider-aws.mqBroker.MqBroker.putLdapServerMetadata"></a>

```csharp
private void PutLdapServerMetadata(MqBrokerLdapServerMetadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mqBroker.MqBroker.putLdapServerMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata">MqBrokerLdapServerMetadata</a>

---

##### `PutLogs` <a name="PutLogs" id="@cdktf/provider-aws.mqBroker.MqBroker.putLogs"></a>

```csharp
private void PutLogs(MqBrokerLogs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mqBroker.MqBroker.putLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogs">MqBrokerLogs</a>

---

##### `PutMaintenanceWindowStartTime` <a name="PutMaintenanceWindowStartTime" id="@cdktf/provider-aws.mqBroker.MqBroker.putMaintenanceWindowStartTime"></a>

```csharp
private void PutMaintenanceWindowStartTime(MqBrokerMaintenanceWindowStartTime Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mqBroker.MqBroker.putMaintenanceWindowStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime">MqBrokerMaintenanceWindowStartTime</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.mqBroker.MqBroker.putTimeouts"></a>

```csharp
private void PutTimeouts(MqBrokerTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mqBroker.MqBroker.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeouts">MqBrokerTimeouts</a>

---

##### `PutUser` <a name="PutUser" id="@cdktf/provider-aws.mqBroker.MqBroker.putUser"></a>

```csharp
private void PutUser(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mqBroker.MqBroker.putUser.parameter.value"></a>

- *Type:* object

---

##### `ResetApplyImmediately` <a name="ResetApplyImmediately" id="@cdktf/provider-aws.mqBroker.MqBroker.resetApplyImmediately"></a>

```csharp
private void ResetApplyImmediately()
```

##### `ResetAuthenticationStrategy` <a name="ResetAuthenticationStrategy" id="@cdktf/provider-aws.mqBroker.MqBroker.resetAuthenticationStrategy"></a>

```csharp
private void ResetAuthenticationStrategy()
```

##### `ResetAutoMinorVersionUpgrade` <a name="ResetAutoMinorVersionUpgrade" id="@cdktf/provider-aws.mqBroker.MqBroker.resetAutoMinorVersionUpgrade"></a>

```csharp
private void ResetAutoMinorVersionUpgrade()
```

##### `ResetConfiguration` <a name="ResetConfiguration" id="@cdktf/provider-aws.mqBroker.MqBroker.resetConfiguration"></a>

```csharp
private void ResetConfiguration()
```

##### `ResetDeploymentMode` <a name="ResetDeploymentMode" id="@cdktf/provider-aws.mqBroker.MqBroker.resetDeploymentMode"></a>

```csharp
private void ResetDeploymentMode()
```

##### `ResetEncryptionOptions` <a name="ResetEncryptionOptions" id="@cdktf/provider-aws.mqBroker.MqBroker.resetEncryptionOptions"></a>

```csharp
private void ResetEncryptionOptions()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.mqBroker.MqBroker.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLdapServerMetadata` <a name="ResetLdapServerMetadata" id="@cdktf/provider-aws.mqBroker.MqBroker.resetLdapServerMetadata"></a>

```csharp
private void ResetLdapServerMetadata()
```

##### `ResetLogs` <a name="ResetLogs" id="@cdktf/provider-aws.mqBroker.MqBroker.resetLogs"></a>

```csharp
private void ResetLogs()
```

##### `ResetMaintenanceWindowStartTime` <a name="ResetMaintenanceWindowStartTime" id="@cdktf/provider-aws.mqBroker.MqBroker.resetMaintenanceWindowStartTime"></a>

```csharp
private void ResetMaintenanceWindowStartTime()
```

##### `ResetPubliclyAccessible` <a name="ResetPubliclyAccessible" id="@cdktf/provider-aws.mqBroker.MqBroker.resetPubliclyAccessible"></a>

```csharp
private void ResetPubliclyAccessible()
```

##### `ResetSecurityGroups` <a name="ResetSecurityGroups" id="@cdktf/provider-aws.mqBroker.MqBroker.resetSecurityGroups"></a>

```csharp
private void ResetSecurityGroups()
```

##### `ResetStorageType` <a name="ResetStorageType" id="@cdktf/provider-aws.mqBroker.MqBroker.resetStorageType"></a>

```csharp
private void ResetStorageType()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktf/provider-aws.mqBroker.MqBroker.resetSubnetIds"></a>

```csharp
private void ResetSubnetIds()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.mqBroker.MqBroker.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.mqBroker.MqBroker.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.mqBroker.MqBroker.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.mqBroker.MqBroker.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

MqBroker.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.mqBroker.MqBroker.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.mqBroker.MqBroker.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

MqBroker.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.mqBroker.MqBroker.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.mqBroker.MqBroker.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

MqBroker.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.mqBroker.MqBroker.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.configuration">Configuration</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference">MqBrokerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.encryptionOptions">EncryptionOptions</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference">MqBrokerEncryptionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.instances">Instances</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesList">MqBrokerInstancesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.ldapServerMetadata">LdapServerMetadata</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference">MqBrokerLdapServerMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.logs">Logs</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference">MqBrokerLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.maintenanceWindowStartTime">MaintenanceWindowStartTime</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference">MqBrokerMaintenanceWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference">MqBrokerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.user">User</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserList">MqBrokerUserList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.applyImmediatelyInput">ApplyImmediatelyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.authenticationStrategyInput">AuthenticationStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.autoMinorVersionUpgradeInput">AutoMinorVersionUpgradeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.brokerNameInput">BrokerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.configurationInput">ConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfiguration">MqBrokerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.deploymentModeInput">DeploymentModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.encryptionOptionsInput">EncryptionOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptions">MqBrokerEncryptionOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.engineTypeInput">EngineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.engineVersionInput">EngineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.hostInstanceTypeInput">HostInstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.ldapServerMetadataInput">LdapServerMetadataInput</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata">MqBrokerLdapServerMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.logsInput">LogsInput</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogs">MqBrokerLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.maintenanceWindowStartTimeInput">MaintenanceWindowStartTimeInput</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime">MqBrokerMaintenanceWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.publiclyAccessibleInput">PubliclyAccessibleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.storageTypeInput">StorageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.userInput">UserInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.applyImmediately">ApplyImmediately</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.authenticationStrategy">AuthenticationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.autoMinorVersionUpgrade">AutoMinorVersionUpgrade</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.brokerName">BrokerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.deploymentMode">DeploymentMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.engineType">EngineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.engineVersion">EngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.hostInstanceType">HostInstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.storageType">StorageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.mqBroker.MqBroker.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.mqBroker.MqBroker.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mqBroker.MqBroker.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.mqBroker.MqBroker.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.mqBroker.MqBroker.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.mqBroker.MqBroker.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.mqBroker.MqBroker.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.mqBroker.MqBroker.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.mqBroker.MqBroker.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.mqBroker.MqBroker.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.mqBroker.MqBroker.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.mqBroker.MqBroker.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.mqBroker.MqBroker.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.mqBroker.MqBroker.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.mqBroker.MqBroker.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktf/provider-aws.mqBroker.MqBroker.property.configuration"></a>

```csharp
public MqBrokerConfigurationOutputReference Configuration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference">MqBrokerConfigurationOutputReference</a>

---

##### `EncryptionOptions`<sup>Required</sup> <a name="EncryptionOptions" id="@cdktf/provider-aws.mqBroker.MqBroker.property.encryptionOptions"></a>

```csharp
public MqBrokerEncryptionOptionsOutputReference EncryptionOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference">MqBrokerEncryptionOptionsOutputReference</a>

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktf/provider-aws.mqBroker.MqBroker.property.instances"></a>

```csharp
public MqBrokerInstancesList Instances { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesList">MqBrokerInstancesList</a>

---

##### `LdapServerMetadata`<sup>Required</sup> <a name="LdapServerMetadata" id="@cdktf/provider-aws.mqBroker.MqBroker.property.ldapServerMetadata"></a>

```csharp
public MqBrokerLdapServerMetadataOutputReference LdapServerMetadata { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference">MqBrokerLdapServerMetadataOutputReference</a>

---

##### `Logs`<sup>Required</sup> <a name="Logs" id="@cdktf/provider-aws.mqBroker.MqBroker.property.logs"></a>

```csharp
public MqBrokerLogsOutputReference Logs { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference">MqBrokerLogsOutputReference</a>

---

##### `MaintenanceWindowStartTime`<sup>Required</sup> <a name="MaintenanceWindowStartTime" id="@cdktf/provider-aws.mqBroker.MqBroker.property.maintenanceWindowStartTime"></a>

```csharp
public MqBrokerMaintenanceWindowStartTimeOutputReference MaintenanceWindowStartTime { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference">MqBrokerMaintenanceWindowStartTimeOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.mqBroker.MqBroker.property.timeouts"></a>

```csharp
public MqBrokerTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference">MqBrokerTimeoutsOutputReference</a>

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-aws.mqBroker.MqBroker.property.user"></a>

```csharp
public MqBrokerUserList User { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserList">MqBrokerUserList</a>

---

##### `ApplyImmediatelyInput`<sup>Optional</sup> <a name="ApplyImmediatelyInput" id="@cdktf/provider-aws.mqBroker.MqBroker.property.applyImmediatelyInput"></a>

```csharp
public object ApplyImmediatelyInput { get; }
```

- *Type:* object

---

##### `AuthenticationStrategyInput`<sup>Optional</sup> <a name="AuthenticationStrategyInput" id="@cdktf/provider-aws.mqBroker.MqBroker.property.authenticationStrategyInput"></a>

```csharp
public string AuthenticationStrategyInput { get; }
```

- *Type:* string

---

##### `AutoMinorVersionUpgradeInput`<sup>Optional</sup> <a name="AutoMinorVersionUpgradeInput" id="@cdktf/provider-aws.mqBroker.MqBroker.property.autoMinorVersionUpgradeInput"></a>

```csharp
public object AutoMinorVersionUpgradeInput { get; }
```

- *Type:* object

---

##### `BrokerNameInput`<sup>Optional</sup> <a name="BrokerNameInput" id="@cdktf/provider-aws.mqBroker.MqBroker.property.brokerNameInput"></a>

```csharp
public string BrokerNameInput { get; }
```

- *Type:* string

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktf/provider-aws.mqBroker.MqBroker.property.configurationInput"></a>

```csharp
public MqBrokerConfiguration ConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfiguration">MqBrokerConfiguration</a>

---

##### `DeploymentModeInput`<sup>Optional</sup> <a name="DeploymentModeInput" id="@cdktf/provider-aws.mqBroker.MqBroker.property.deploymentModeInput"></a>

```csharp
public string DeploymentModeInput { get; }
```

- *Type:* string

---

##### `EncryptionOptionsInput`<sup>Optional</sup> <a name="EncryptionOptionsInput" id="@cdktf/provider-aws.mqBroker.MqBroker.property.encryptionOptionsInput"></a>

```csharp
public MqBrokerEncryptionOptions EncryptionOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptions">MqBrokerEncryptionOptions</a>

---

##### `EngineTypeInput`<sup>Optional</sup> <a name="EngineTypeInput" id="@cdktf/provider-aws.mqBroker.MqBroker.property.engineTypeInput"></a>

```csharp
public string EngineTypeInput { get; }
```

- *Type:* string

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktf/provider-aws.mqBroker.MqBroker.property.engineVersionInput"></a>

```csharp
public string EngineVersionInput { get; }
```

- *Type:* string

---

##### `HostInstanceTypeInput`<sup>Optional</sup> <a name="HostInstanceTypeInput" id="@cdktf/provider-aws.mqBroker.MqBroker.property.hostInstanceTypeInput"></a>

```csharp
public string HostInstanceTypeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.mqBroker.MqBroker.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LdapServerMetadataInput`<sup>Optional</sup> <a name="LdapServerMetadataInput" id="@cdktf/provider-aws.mqBroker.MqBroker.property.ldapServerMetadataInput"></a>

```csharp
public MqBrokerLdapServerMetadata LdapServerMetadataInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata">MqBrokerLdapServerMetadata</a>

---

##### `LogsInput`<sup>Optional</sup> <a name="LogsInput" id="@cdktf/provider-aws.mqBroker.MqBroker.property.logsInput"></a>

```csharp
public MqBrokerLogs LogsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogs">MqBrokerLogs</a>

---

##### `MaintenanceWindowStartTimeInput`<sup>Optional</sup> <a name="MaintenanceWindowStartTimeInput" id="@cdktf/provider-aws.mqBroker.MqBroker.property.maintenanceWindowStartTimeInput"></a>

```csharp
public MqBrokerMaintenanceWindowStartTime MaintenanceWindowStartTimeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime">MqBrokerMaintenanceWindowStartTime</a>

---

##### `PubliclyAccessibleInput`<sup>Optional</sup> <a name="PubliclyAccessibleInput" id="@cdktf/provider-aws.mqBroker.MqBroker.property.publiclyAccessibleInput"></a>

```csharp
public object PubliclyAccessibleInput { get; }
```

- *Type:* object

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktf/provider-aws.mqBroker.MqBroker.property.securityGroupsInput"></a>

```csharp
public string[] SecurityGroupsInput { get; }
```

- *Type:* string[]

---

##### `StorageTypeInput`<sup>Optional</sup> <a name="StorageTypeInput" id="@cdktf/provider-aws.mqBroker.MqBroker.property.storageTypeInput"></a>

```csharp
public string StorageTypeInput { get; }
```

- *Type:* string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.mqBroker.MqBroker.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.mqBroker.MqBroker.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.mqBroker.MqBroker.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.mqBroker.MqBroker.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktf/provider-aws.mqBroker.MqBroker.property.userInput"></a>

```csharp
public object UserInput { get; }
```

- *Type:* object

---

##### `ApplyImmediately`<sup>Required</sup> <a name="ApplyImmediately" id="@cdktf/provider-aws.mqBroker.MqBroker.property.applyImmediately"></a>

```csharp
public object ApplyImmediately { get; }
```

- *Type:* object

---

##### `AuthenticationStrategy`<sup>Required</sup> <a name="AuthenticationStrategy" id="@cdktf/provider-aws.mqBroker.MqBroker.property.authenticationStrategy"></a>

```csharp
public string AuthenticationStrategy { get; }
```

- *Type:* string

---

##### `AutoMinorVersionUpgrade`<sup>Required</sup> <a name="AutoMinorVersionUpgrade" id="@cdktf/provider-aws.mqBroker.MqBroker.property.autoMinorVersionUpgrade"></a>

```csharp
public object AutoMinorVersionUpgrade { get; }
```

- *Type:* object

---

##### `BrokerName`<sup>Required</sup> <a name="BrokerName" id="@cdktf/provider-aws.mqBroker.MqBroker.property.brokerName"></a>

```csharp
public string BrokerName { get; }
```

- *Type:* string

---

##### `DeploymentMode`<sup>Required</sup> <a name="DeploymentMode" id="@cdktf/provider-aws.mqBroker.MqBroker.property.deploymentMode"></a>

```csharp
public string DeploymentMode { get; }
```

- *Type:* string

---

##### `EngineType`<sup>Required</sup> <a name="EngineType" id="@cdktf/provider-aws.mqBroker.MqBroker.property.engineType"></a>

```csharp
public string EngineType { get; }
```

- *Type:* string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktf/provider-aws.mqBroker.MqBroker.property.engineVersion"></a>

```csharp
public string EngineVersion { get; }
```

- *Type:* string

---

##### `HostInstanceType`<sup>Required</sup> <a name="HostInstanceType" id="@cdktf/provider-aws.mqBroker.MqBroker.property.hostInstanceType"></a>

```csharp
public string HostInstanceType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.mqBroker.MqBroker.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PubliclyAccessible`<sup>Required</sup> <a name="PubliclyAccessible" id="@cdktf/provider-aws.mqBroker.MqBroker.property.publiclyAccessible"></a>

```csharp
public object PubliclyAccessible { get; }
```

- *Type:* object

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.mqBroker.MqBroker.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; }
```

- *Type:* string[]

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktf/provider-aws.mqBroker.MqBroker.property.storageType"></a>

```csharp
public string StorageType { get; }
```

- *Type:* string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.mqBroker.MqBroker.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.mqBroker.MqBroker.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.mqBroker.MqBroker.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBroker.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.mqBroker.MqBroker.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MqBrokerConfig <a name="MqBrokerConfig" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MqBrokerConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BrokerName,
    string EngineType,
    string EngineVersion,
    string HostInstanceType,
    object User,
    object ApplyImmediately = null,
    string AuthenticationStrategy = null,
    object AutoMinorVersionUpgrade = null,
    MqBrokerConfiguration Configuration = null,
    string DeploymentMode = null,
    MqBrokerEncryptionOptions EncryptionOptions = null,
    string Id = null,
    MqBrokerLdapServerMetadata LdapServerMetadata = null,
    MqBrokerLogs Logs = null,
    MqBrokerMaintenanceWindowStartTime MaintenanceWindowStartTime = null,
    object PubliclyAccessible = null,
    string[] SecurityGroups = null,
    string StorageType = null,
    string[] SubnetIds = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    MqBrokerTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.brokerName">BrokerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#broker_name MqBroker#broker_name}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.engineType">EngineType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#engine_type MqBroker#engine_type}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.engineVersion">EngineVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#engine_version MqBroker#engine_version}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.hostInstanceType">HostInstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#host_instance_type MqBroker#host_instance_type}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.user">User</a></code> | <code>object</code> | user block. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.applyImmediately">ApplyImmediately</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#apply_immediately MqBroker#apply_immediately}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.authenticationStrategy">AuthenticationStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#authentication_strategy MqBroker#authentication_strategy}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.autoMinorVersionUpgrade">AutoMinorVersionUpgrade</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#auto_minor_version_upgrade MqBroker#auto_minor_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.configuration">Configuration</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfiguration">MqBrokerConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.deploymentMode">DeploymentMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#deployment_mode MqBroker#deployment_mode}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.encryptionOptions">EncryptionOptions</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptions">MqBrokerEncryptionOptions</a></code> | encryption_options block. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#id MqBroker#id}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.ldapServerMetadata">LdapServerMetadata</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata">MqBrokerLdapServerMetadata</a></code> | ldap_server_metadata block. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.logs">Logs</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogs">MqBrokerLogs</a></code> | logs block. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.maintenanceWindowStartTime">MaintenanceWindowStartTime</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime">MqBrokerMaintenanceWindowStartTime</a></code> | maintenance_window_start_time block. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#publicly_accessible MqBroker#publicly_accessible}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#security_groups MqBroker#security_groups}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.storageType">StorageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#storage_type MqBroker#storage_type}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#subnet_ids MqBroker#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#tags MqBroker#tags}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#tags_all MqBroker#tags_all}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeouts">MqBrokerTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BrokerName`<sup>Required</sup> <a name="BrokerName" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.brokerName"></a>

```csharp
public string BrokerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#broker_name MqBroker#broker_name}.

---

##### `EngineType`<sup>Required</sup> <a name="EngineType" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.engineType"></a>

```csharp
public string EngineType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#engine_type MqBroker#engine_type}.

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.engineVersion"></a>

```csharp
public string EngineVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#engine_version MqBroker#engine_version}.

---

##### `HostInstanceType`<sup>Required</sup> <a name="HostInstanceType" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.hostInstanceType"></a>

```csharp
public string HostInstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#host_instance_type MqBroker#host_instance_type}.

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.user"></a>

```csharp
public object User { get; set; }
```

- *Type:* object

user block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#user MqBroker#user}

---

##### `ApplyImmediately`<sup>Optional</sup> <a name="ApplyImmediately" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.applyImmediately"></a>

```csharp
public object ApplyImmediately { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#apply_immediately MqBroker#apply_immediately}.

---

##### `AuthenticationStrategy`<sup>Optional</sup> <a name="AuthenticationStrategy" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.authenticationStrategy"></a>

```csharp
public string AuthenticationStrategy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#authentication_strategy MqBroker#authentication_strategy}.

---

##### `AutoMinorVersionUpgrade`<sup>Optional</sup> <a name="AutoMinorVersionUpgrade" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.autoMinorVersionUpgrade"></a>

```csharp
public object AutoMinorVersionUpgrade { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#auto_minor_version_upgrade MqBroker#auto_minor_version_upgrade}.

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.configuration"></a>

```csharp
public MqBrokerConfiguration Configuration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfiguration">MqBrokerConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#configuration MqBroker#configuration}

---

##### `DeploymentMode`<sup>Optional</sup> <a name="DeploymentMode" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.deploymentMode"></a>

```csharp
public string DeploymentMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#deployment_mode MqBroker#deployment_mode}.

---

##### `EncryptionOptions`<sup>Optional</sup> <a name="EncryptionOptions" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.encryptionOptions"></a>

```csharp
public MqBrokerEncryptionOptions EncryptionOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptions">MqBrokerEncryptionOptions</a>

encryption_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#encryption_options MqBroker#encryption_options}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#id MqBroker#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LdapServerMetadata`<sup>Optional</sup> <a name="LdapServerMetadata" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.ldapServerMetadata"></a>

```csharp
public MqBrokerLdapServerMetadata LdapServerMetadata { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata">MqBrokerLdapServerMetadata</a>

ldap_server_metadata block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#ldap_server_metadata MqBroker#ldap_server_metadata}

---

##### `Logs`<sup>Optional</sup> <a name="Logs" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.logs"></a>

```csharp
public MqBrokerLogs Logs { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogs">MqBrokerLogs</a>

logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#logs MqBroker#logs}

---

##### `MaintenanceWindowStartTime`<sup>Optional</sup> <a name="MaintenanceWindowStartTime" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.maintenanceWindowStartTime"></a>

```csharp
public MqBrokerMaintenanceWindowStartTime MaintenanceWindowStartTime { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime">MqBrokerMaintenanceWindowStartTime</a>

maintenance_window_start_time block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#maintenance_window_start_time MqBroker#maintenance_window_start_time}

---

##### `PubliclyAccessible`<sup>Optional</sup> <a name="PubliclyAccessible" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.publiclyAccessible"></a>

```csharp
public object PubliclyAccessible { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#publicly_accessible MqBroker#publicly_accessible}.

---

##### `SecurityGroups`<sup>Optional</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#security_groups MqBroker#security_groups}.

---

##### `StorageType`<sup>Optional</sup> <a name="StorageType" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.storageType"></a>

```csharp
public string StorageType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#storage_type MqBroker#storage_type}.

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#subnet_ids MqBroker#subnet_ids}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#tags MqBroker#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#tags_all MqBroker#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.mqBroker.MqBrokerConfig.property.timeouts"></a>

```csharp
public MqBrokerTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeouts">MqBrokerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#timeouts MqBroker#timeouts}

---

### MqBrokerConfiguration <a name="MqBrokerConfiguration" id="@cdktf/provider-aws.mqBroker.MqBrokerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mqBroker.MqBrokerConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MqBrokerConfiguration {
    string Id = null,
    double Revision = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfiguration.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#id MqBroker#id}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfiguration.property.revision">Revision</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#revision MqBroker#revision}. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.mqBroker.MqBrokerConfiguration.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#id MqBroker#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Revision`<sup>Optional</sup> <a name="Revision" id="@cdktf/provider-aws.mqBroker.MqBrokerConfiguration.property.revision"></a>

```csharp
public double Revision { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#revision MqBroker#revision}.

---

### MqBrokerEncryptionOptions <a name="MqBrokerEncryptionOptions" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MqBrokerEncryptionOptions {
    string KmsKeyId = null,
    object UseAwsOwnedKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptions.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#kms_key_id MqBroker#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptions.property.useAwsOwnedKey">UseAwsOwnedKey</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#use_aws_owned_key MqBroker#use_aws_owned_key}. |

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptions.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#kms_key_id MqBroker#kms_key_id}.

---

##### `UseAwsOwnedKey`<sup>Optional</sup> <a name="UseAwsOwnedKey" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptions.property.useAwsOwnedKey"></a>

```csharp
public object UseAwsOwnedKey { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#use_aws_owned_key MqBroker#use_aws_owned_key}.

---

### MqBrokerInstances <a name="MqBrokerInstances" id="@cdktf/provider-aws.mqBroker.MqBrokerInstances"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mqBroker.MqBrokerInstances.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MqBrokerInstances {

};
```


### MqBrokerLdapServerMetadata <a name="MqBrokerLdapServerMetadata" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MqBrokerLdapServerMetadata {
    string[] Hosts = null,
    string RoleBase = null,
    string RoleName = null,
    string RoleSearchMatching = null,
    object RoleSearchSubtree = null,
    string ServiceAccountPassword = null,
    string ServiceAccountUsername = null,
    string UserBase = null,
    string UserRoleName = null,
    string UserSearchMatching = null,
    object UserSearchSubtree = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.hosts">Hosts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#hosts MqBroker#hosts}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.roleBase">RoleBase</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#role_base MqBroker#role_base}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.roleName">RoleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#role_name MqBroker#role_name}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.roleSearchMatching">RoleSearchMatching</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#role_search_matching MqBroker#role_search_matching}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.roleSearchSubtree">RoleSearchSubtree</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#role_search_subtree MqBroker#role_search_subtree}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.serviceAccountPassword">ServiceAccountPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#service_account_password MqBroker#service_account_password}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.serviceAccountUsername">ServiceAccountUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#service_account_username MqBroker#service_account_username}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.userBase">UserBase</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#user_base MqBroker#user_base}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.userRoleName">UserRoleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#user_role_name MqBroker#user_role_name}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.userSearchMatching">UserSearchMatching</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#user_search_matching MqBroker#user_search_matching}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.userSearchSubtree">UserSearchSubtree</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#user_search_subtree MqBroker#user_search_subtree}. |

---

##### `Hosts`<sup>Optional</sup> <a name="Hosts" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.hosts"></a>

```csharp
public string[] Hosts { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#hosts MqBroker#hosts}.

---

##### `RoleBase`<sup>Optional</sup> <a name="RoleBase" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.roleBase"></a>

```csharp
public string RoleBase { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#role_base MqBroker#role_base}.

---

##### `RoleName`<sup>Optional</sup> <a name="RoleName" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.roleName"></a>

```csharp
public string RoleName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#role_name MqBroker#role_name}.

---

##### `RoleSearchMatching`<sup>Optional</sup> <a name="RoleSearchMatching" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.roleSearchMatching"></a>

```csharp
public string RoleSearchMatching { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#role_search_matching MqBroker#role_search_matching}.

---

##### `RoleSearchSubtree`<sup>Optional</sup> <a name="RoleSearchSubtree" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.roleSearchSubtree"></a>

```csharp
public object RoleSearchSubtree { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#role_search_subtree MqBroker#role_search_subtree}.

---

##### `ServiceAccountPassword`<sup>Optional</sup> <a name="ServiceAccountPassword" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.serviceAccountPassword"></a>

```csharp
public string ServiceAccountPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#service_account_password MqBroker#service_account_password}.

---

##### `ServiceAccountUsername`<sup>Optional</sup> <a name="ServiceAccountUsername" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.serviceAccountUsername"></a>

```csharp
public string ServiceAccountUsername { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#service_account_username MqBroker#service_account_username}.

---

##### `UserBase`<sup>Optional</sup> <a name="UserBase" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.userBase"></a>

```csharp
public string UserBase { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#user_base MqBroker#user_base}.

---

##### `UserRoleName`<sup>Optional</sup> <a name="UserRoleName" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.userRoleName"></a>

```csharp
public string UserRoleName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#user_role_name MqBroker#user_role_name}.

---

##### `UserSearchMatching`<sup>Optional</sup> <a name="UserSearchMatching" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.userSearchMatching"></a>

```csharp
public string UserSearchMatching { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#user_search_matching MqBroker#user_search_matching}.

---

##### `UserSearchSubtree`<sup>Optional</sup> <a name="UserSearchSubtree" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata.property.userSearchSubtree"></a>

```csharp
public object UserSearchSubtree { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#user_search_subtree MqBroker#user_search_subtree}.

---

### MqBrokerLogs <a name="MqBrokerLogs" id="@cdktf/provider-aws.mqBroker.MqBrokerLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mqBroker.MqBrokerLogs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MqBrokerLogs {
    string Audit = null,
    object General = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogs.property.audit">Audit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#audit MqBroker#audit}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogs.property.general">General</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#general MqBroker#general}. |

---

##### `Audit`<sup>Optional</sup> <a name="Audit" id="@cdktf/provider-aws.mqBroker.MqBrokerLogs.property.audit"></a>

```csharp
public string Audit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#audit MqBroker#audit}.

---

##### `General`<sup>Optional</sup> <a name="General" id="@cdktf/provider-aws.mqBroker.MqBrokerLogs.property.general"></a>

```csharp
public object General { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#general MqBroker#general}.

---

### MqBrokerMaintenanceWindowStartTime <a name="MqBrokerMaintenanceWindowStartTime" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MqBrokerMaintenanceWindowStartTime {
    string DayOfWeek,
    string TimeOfDay,
    string TimeZone
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#day_of_week MqBroker#day_of_week}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime.property.timeOfDay">TimeOfDay</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#time_of_day MqBroker#time_of_day}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime.property.timeZone">TimeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#time_zone MqBroker#time_zone}. |

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#day_of_week MqBroker#day_of_week}.

---

##### `TimeOfDay`<sup>Required</sup> <a name="TimeOfDay" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime.property.timeOfDay"></a>

```csharp
public string TimeOfDay { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#time_of_day MqBroker#time_of_day}.

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#time_zone MqBroker#time_zone}.

---

### MqBrokerTimeouts <a name="MqBrokerTimeouts" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MqBrokerTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#create MqBroker#create}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#delete MqBroker#delete}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#update MqBroker#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#create MqBroker#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#delete MqBroker#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#update MqBroker#update}.

---

### MqBrokerUser <a name="MqBrokerUser" id="@cdktf/provider-aws.mqBroker.MqBrokerUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mqBroker.MqBrokerUser.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MqBrokerUser {
    string Password,
    string Username,
    object ConsoleAccess = null,
    string[] Groups = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUser.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#password MqBroker#password}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUser.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#username MqBroker#username}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUser.property.consoleAccess">ConsoleAccess</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#console_access MqBroker#console_access}. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUser.property.groups">Groups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#groups MqBroker#groups}. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-aws.mqBroker.MqBrokerUser.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#password MqBroker#password}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-aws.mqBroker.MqBrokerUser.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#username MqBroker#username}.

---

##### `ConsoleAccess`<sup>Optional</sup> <a name="ConsoleAccess" id="@cdktf/provider-aws.mqBroker.MqBrokerUser.property.consoleAccess"></a>

```csharp
public object ConsoleAccess { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#console_access MqBroker#console_access}.

---

##### `Groups`<sup>Optional</sup> <a name="Groups" id="@cdktf/provider-aws.mqBroker.MqBrokerUser.property.groups"></a>

```csharp
public string[] Groups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker#groups MqBroker#groups}.

---

## Classes <a name="Classes" id="Classes"></a>

### MqBrokerConfigurationOutputReference <a name="MqBrokerConfigurationOutputReference" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MqBrokerConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.resetRevision">ResetRevision</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRevision` <a name="ResetRevision" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.resetRevision"></a>

```csharp
private void ResetRevision()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.revisionInput">RevisionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.revision">Revision</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfiguration">MqBrokerConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RevisionInput`<sup>Optional</sup> <a name="RevisionInput" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.revisionInput"></a>

```csharp
public double RevisionInput { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.revision"></a>

```csharp
public double Revision { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mqBroker.MqBrokerConfigurationOutputReference.property.internalValue"></a>

```csharp
public MqBrokerConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerConfiguration">MqBrokerConfiguration</a>

---


### MqBrokerEncryptionOptionsOutputReference <a name="MqBrokerEncryptionOptionsOutputReference" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MqBrokerEncryptionOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.resetUseAwsOwnedKey">ResetUseAwsOwnedKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetUseAwsOwnedKey` <a name="ResetUseAwsOwnedKey" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.resetUseAwsOwnedKey"></a>

```csharp
private void ResetUseAwsOwnedKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.useAwsOwnedKeyInput">UseAwsOwnedKeyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.useAwsOwnedKey">UseAwsOwnedKey</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptions">MqBrokerEncryptionOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `UseAwsOwnedKeyInput`<sup>Optional</sup> <a name="UseAwsOwnedKeyInput" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.useAwsOwnedKeyInput"></a>

```csharp
public object UseAwsOwnedKeyInput { get; }
```

- *Type:* object

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `UseAwsOwnedKey`<sup>Required</sup> <a name="UseAwsOwnedKey" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.useAwsOwnedKey"></a>

```csharp
public object UseAwsOwnedKey { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptionsOutputReference.property.internalValue"></a>

```csharp
public MqBrokerEncryptionOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerEncryptionOptions">MqBrokerEncryptionOptions</a>

---


### MqBrokerInstancesList <a name="MqBrokerInstancesList" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MqBrokerInstancesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.get"></a>

```csharp
private MqBrokerInstancesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MqBrokerInstancesOutputReference <a name="MqBrokerInstancesOutputReference" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MqBrokerInstancesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.property.consoleUrl">ConsoleUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.property.endpoints">Endpoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstances">MqBrokerInstances</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConsoleUrl`<sup>Required</sup> <a name="ConsoleUrl" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.property.consoleUrl"></a>

```csharp
public string ConsoleUrl { get; }
```

- *Type:* string

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.property.endpoints"></a>

```csharp
public string[] Endpoints { get; }
```

- *Type:* string[]

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mqBroker.MqBrokerInstancesOutputReference.property.internalValue"></a>

```csharp
public MqBrokerInstances InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerInstances">MqBrokerInstances</a>

---


### MqBrokerLdapServerMetadataOutputReference <a name="MqBrokerLdapServerMetadataOutputReference" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MqBrokerLdapServerMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetHosts">ResetHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetRoleBase">ResetRoleBase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetRoleName">ResetRoleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetRoleSearchMatching">ResetRoleSearchMatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetRoleSearchSubtree">ResetRoleSearchSubtree</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetServiceAccountPassword">ResetServiceAccountPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetServiceAccountUsername">ResetServiceAccountUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetUserBase">ResetUserBase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetUserRoleName">ResetUserRoleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetUserSearchMatching">ResetUserSearchMatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetUserSearchSubtree">ResetUserSearchSubtree</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHosts` <a name="ResetHosts" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetHosts"></a>

```csharp
private void ResetHosts()
```

##### `ResetRoleBase` <a name="ResetRoleBase" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetRoleBase"></a>

```csharp
private void ResetRoleBase()
```

##### `ResetRoleName` <a name="ResetRoleName" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetRoleName"></a>

```csharp
private void ResetRoleName()
```

##### `ResetRoleSearchMatching` <a name="ResetRoleSearchMatching" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetRoleSearchMatching"></a>

```csharp
private void ResetRoleSearchMatching()
```

##### `ResetRoleSearchSubtree` <a name="ResetRoleSearchSubtree" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetRoleSearchSubtree"></a>

```csharp
private void ResetRoleSearchSubtree()
```

##### `ResetServiceAccountPassword` <a name="ResetServiceAccountPassword" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetServiceAccountPassword"></a>

```csharp
private void ResetServiceAccountPassword()
```

##### `ResetServiceAccountUsername` <a name="ResetServiceAccountUsername" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetServiceAccountUsername"></a>

```csharp
private void ResetServiceAccountUsername()
```

##### `ResetUserBase` <a name="ResetUserBase" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetUserBase"></a>

```csharp
private void ResetUserBase()
```

##### `ResetUserRoleName` <a name="ResetUserRoleName" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetUserRoleName"></a>

```csharp
private void ResetUserRoleName()
```

##### `ResetUserSearchMatching` <a name="ResetUserSearchMatching" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetUserSearchMatching"></a>

```csharp
private void ResetUserSearchMatching()
```

##### `ResetUserSearchSubtree` <a name="ResetUserSearchSubtree" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.resetUserSearchSubtree"></a>

```csharp
private void ResetUserSearchSubtree()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.hostsInput">HostsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleBaseInput">RoleBaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleNameInput">RoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleSearchMatchingInput">RoleSearchMatchingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleSearchSubtreeInput">RoleSearchSubtreeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.serviceAccountPasswordInput">ServiceAccountPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.serviceAccountUsernameInput">ServiceAccountUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userBaseInput">UserBaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userRoleNameInput">UserRoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userSearchMatchingInput">UserSearchMatchingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userSearchSubtreeInput">UserSearchSubtreeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.hosts">Hosts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleBase">RoleBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleName">RoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleSearchMatching">RoleSearchMatching</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleSearchSubtree">RoleSearchSubtree</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.serviceAccountPassword">ServiceAccountPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.serviceAccountUsername">ServiceAccountUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userBase">UserBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userRoleName">UserRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userSearchMatching">UserSearchMatching</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userSearchSubtree">UserSearchSubtree</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata">MqBrokerLdapServerMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostsInput`<sup>Optional</sup> <a name="HostsInput" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.hostsInput"></a>

```csharp
public string[] HostsInput { get; }
```

- *Type:* string[]

---

##### `RoleBaseInput`<sup>Optional</sup> <a name="RoleBaseInput" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleBaseInput"></a>

```csharp
public string RoleBaseInput { get; }
```

- *Type:* string

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleNameInput"></a>

```csharp
public string RoleNameInput { get; }
```

- *Type:* string

---

##### `RoleSearchMatchingInput`<sup>Optional</sup> <a name="RoleSearchMatchingInput" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleSearchMatchingInput"></a>

```csharp
public string RoleSearchMatchingInput { get; }
```

- *Type:* string

---

##### `RoleSearchSubtreeInput`<sup>Optional</sup> <a name="RoleSearchSubtreeInput" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleSearchSubtreeInput"></a>

```csharp
public object RoleSearchSubtreeInput { get; }
```

- *Type:* object

---

##### `ServiceAccountPasswordInput`<sup>Optional</sup> <a name="ServiceAccountPasswordInput" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.serviceAccountPasswordInput"></a>

```csharp
public string ServiceAccountPasswordInput { get; }
```

- *Type:* string

---

##### `ServiceAccountUsernameInput`<sup>Optional</sup> <a name="ServiceAccountUsernameInput" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.serviceAccountUsernameInput"></a>

```csharp
public string ServiceAccountUsernameInput { get; }
```

- *Type:* string

---

##### `UserBaseInput`<sup>Optional</sup> <a name="UserBaseInput" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userBaseInput"></a>

```csharp
public string UserBaseInput { get; }
```

- *Type:* string

---

##### `UserRoleNameInput`<sup>Optional</sup> <a name="UserRoleNameInput" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userRoleNameInput"></a>

```csharp
public string UserRoleNameInput { get; }
```

- *Type:* string

---

##### `UserSearchMatchingInput`<sup>Optional</sup> <a name="UserSearchMatchingInput" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userSearchMatchingInput"></a>

```csharp
public string UserSearchMatchingInput { get; }
```

- *Type:* string

---

##### `UserSearchSubtreeInput`<sup>Optional</sup> <a name="UserSearchSubtreeInput" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userSearchSubtreeInput"></a>

```csharp
public object UserSearchSubtreeInput { get; }
```

- *Type:* object

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.hosts"></a>

```csharp
public string[] Hosts { get; }
```

- *Type:* string[]

---

##### `RoleBase`<sup>Required</sup> <a name="RoleBase" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleBase"></a>

```csharp
public string RoleBase { get; }
```

- *Type:* string

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleName"></a>

```csharp
public string RoleName { get; }
```

- *Type:* string

---

##### `RoleSearchMatching`<sup>Required</sup> <a name="RoleSearchMatching" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleSearchMatching"></a>

```csharp
public string RoleSearchMatching { get; }
```

- *Type:* string

---

##### `RoleSearchSubtree`<sup>Required</sup> <a name="RoleSearchSubtree" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.roleSearchSubtree"></a>

```csharp
public object RoleSearchSubtree { get; }
```

- *Type:* object

---

##### `ServiceAccountPassword`<sup>Required</sup> <a name="ServiceAccountPassword" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.serviceAccountPassword"></a>

```csharp
public string ServiceAccountPassword { get; }
```

- *Type:* string

---

##### `ServiceAccountUsername`<sup>Required</sup> <a name="ServiceAccountUsername" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.serviceAccountUsername"></a>

```csharp
public string ServiceAccountUsername { get; }
```

- *Type:* string

---

##### `UserBase`<sup>Required</sup> <a name="UserBase" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userBase"></a>

```csharp
public string UserBase { get; }
```

- *Type:* string

---

##### `UserRoleName`<sup>Required</sup> <a name="UserRoleName" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userRoleName"></a>

```csharp
public string UserRoleName { get; }
```

- *Type:* string

---

##### `UserSearchMatching`<sup>Required</sup> <a name="UserSearchMatching" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userSearchMatching"></a>

```csharp
public string UserSearchMatching { get; }
```

- *Type:* string

---

##### `UserSearchSubtree`<sup>Required</sup> <a name="UserSearchSubtree" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.userSearchSubtree"></a>

```csharp
public object UserSearchSubtree { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadataOutputReference.property.internalValue"></a>

```csharp
public MqBrokerLdapServerMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerLdapServerMetadata">MqBrokerLdapServerMetadata</a>

---


### MqBrokerLogsOutputReference <a name="MqBrokerLogsOutputReference" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MqBrokerLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.resetAudit">ResetAudit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.resetGeneral">ResetGeneral</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAudit` <a name="ResetAudit" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.resetAudit"></a>

```csharp
private void ResetAudit()
```

##### `ResetGeneral` <a name="ResetGeneral" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.resetGeneral"></a>

```csharp
private void ResetGeneral()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.auditInput">AuditInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.generalInput">GeneralInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.audit">Audit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.general">General</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogs">MqBrokerLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuditInput`<sup>Optional</sup> <a name="AuditInput" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.auditInput"></a>

```csharp
public string AuditInput { get; }
```

- *Type:* string

---

##### `GeneralInput`<sup>Optional</sup> <a name="GeneralInput" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.generalInput"></a>

```csharp
public object GeneralInput { get; }
```

- *Type:* object

---

##### `Audit`<sup>Required</sup> <a name="Audit" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.audit"></a>

```csharp
public string Audit { get; }
```

- *Type:* string

---

##### `General`<sup>Required</sup> <a name="General" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.general"></a>

```csharp
public object General { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mqBroker.MqBrokerLogsOutputReference.property.internalValue"></a>

```csharp
public MqBrokerLogs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerLogs">MqBrokerLogs</a>

---


### MqBrokerMaintenanceWindowStartTimeOutputReference <a name="MqBrokerMaintenanceWindowStartTimeOutputReference" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MqBrokerMaintenanceWindowStartTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.dayOfWeekInput">DayOfWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.timeOfDayInput">TimeOfDayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.timeOfDay">TimeOfDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime">MqBrokerMaintenanceWindowStartTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayOfWeekInput`<sup>Optional</sup> <a name="DayOfWeekInput" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.dayOfWeekInput"></a>

```csharp
public string DayOfWeekInput { get; }
```

- *Type:* string

---

##### `TimeOfDayInput`<sup>Optional</sup> <a name="TimeOfDayInput" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.timeOfDayInput"></a>

```csharp
public string TimeOfDayInput { get; }
```

- *Type:* string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; }
```

- *Type:* string

---

##### `TimeOfDay`<sup>Required</sup> <a name="TimeOfDay" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.timeOfDay"></a>

```csharp
public string TimeOfDay { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTimeOutputReference.property.internalValue"></a>

```csharp
public MqBrokerMaintenanceWindowStartTime InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mqBroker.MqBrokerMaintenanceWindowStartTime">MqBrokerMaintenanceWindowStartTime</a>

---


### MqBrokerTimeoutsOutputReference <a name="MqBrokerTimeoutsOutputReference" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MqBrokerTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mqBroker.MqBrokerTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MqBrokerUserList <a name="MqBrokerUserList" id="@cdktf/provider-aws.mqBroker.MqBrokerUserList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mqBroker.MqBrokerUserList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MqBrokerUserList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mqBroker.MqBrokerUserList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.mqBroker.MqBrokerUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mqBroker.MqBrokerUserList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mqBroker.MqBrokerUserList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mqBroker.MqBrokerUserList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mqBroker.MqBrokerUserList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.mqBroker.MqBrokerUserList.get"></a>

```csharp
private MqBrokerUserOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.mqBroker.MqBrokerUserList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mqBroker.MqBrokerUserList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mqBroker.MqBrokerUserList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mqBroker.MqBrokerUserList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MqBrokerUserOutputReference <a name="MqBrokerUserOutputReference" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MqBrokerUserOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.resetConsoleAccess">ResetConsoleAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.resetGroups">ResetGroups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConsoleAccess` <a name="ResetConsoleAccess" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.resetConsoleAccess"></a>

```csharp
private void ResetConsoleAccess()
```

##### `ResetGroups` <a name="ResetGroups" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.resetGroups"></a>

```csharp
private void ResetGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.consoleAccessInput">ConsoleAccessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.groupsInput">GroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.consoleAccess">ConsoleAccess</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.groups">Groups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConsoleAccessInput`<sup>Optional</sup> <a name="ConsoleAccessInput" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.consoleAccessInput"></a>

```csharp
public object ConsoleAccessInput { get; }
```

- *Type:* object

---

##### `GroupsInput`<sup>Optional</sup> <a name="GroupsInput" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.groupsInput"></a>

```csharp
public string[] GroupsInput { get; }
```

- *Type:* string[]

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `ConsoleAccess`<sup>Required</sup> <a name="ConsoleAccess" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.consoleAccess"></a>

```csharp
public object ConsoleAccess { get; }
```

- *Type:* object

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.groups"></a>

```csharp
public string[] Groups { get; }
```

- *Type:* string[]

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mqBroker.MqBrokerUserOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



