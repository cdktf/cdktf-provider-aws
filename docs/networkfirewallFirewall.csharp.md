# `networkfirewallFirewall` Submodule <a name="`networkfirewallFirewall` Submodule" id="@cdktf/provider-aws.networkfirewallFirewall"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkfirewallFirewall <a name="NetworkfirewallFirewall" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall aws_networkfirewall_firewall}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkfirewallFirewall(Construct Scope, string Id, NetworkfirewallFirewallConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig">NetworkfirewallFirewallConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig">NetworkfirewallFirewallConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.putEncryptionConfiguration">PutEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.putSubnetMapping">PutSubnetMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.resetDeleteProtection">ResetDeleteProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.resetEncryptionConfiguration">ResetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.resetFirewallPolicyChangeProtection">ResetFirewallPolicyChangeProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.resetSubnetChangeProtection">ResetSubnetChangeProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutEncryptionConfiguration` <a name="PutEncryptionConfiguration" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.putEncryptionConfiguration"></a>

```csharp
private void PutEncryptionConfiguration(NetworkfirewallFirewallEncryptionConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfiguration">NetworkfirewallFirewallEncryptionConfiguration</a>

---

##### `PutSubnetMapping` <a name="PutSubnetMapping" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.putSubnetMapping"></a>

```csharp
private void PutSubnetMapping(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.putSubnetMapping.parameter.value"></a>

- *Type:* object

---

##### `ResetDeleteProtection` <a name="ResetDeleteProtection" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.resetDeleteProtection"></a>

```csharp
private void ResetDeleteProtection()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEncryptionConfiguration` <a name="ResetEncryptionConfiguration" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.resetEncryptionConfiguration"></a>

```csharp
private void ResetEncryptionConfiguration()
```

##### `ResetFirewallPolicyChangeProtection` <a name="ResetFirewallPolicyChangeProtection" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.resetFirewallPolicyChangeProtection"></a>

```csharp
private void ResetFirewallPolicyChangeProtection()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSubnetChangeProtection` <a name="ResetSubnetChangeProtection" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.resetSubnetChangeProtection"></a>

```csharp
private void ResetSubnetChangeProtection()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

NetworkfirewallFirewall.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

NetworkfirewallFirewall.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

NetworkfirewallFirewall.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference">NetworkfirewallFirewallEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallStatus">FirewallStatus</a></code> | <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusList">NetworkfirewallFirewallFirewallStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.subnetMapping">SubnetMapping</a></code> | <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList">NetworkfirewallFirewallSubnetMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.updateToken">UpdateToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.deleteProtectionInput">DeleteProtectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.encryptionConfigurationInput">EncryptionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfiguration">NetworkfirewallFirewallEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallPolicyArnInput">FirewallPolicyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallPolicyChangeProtectionInput">FirewallPolicyChangeProtectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.subnetChangeProtectionInput">SubnetChangeProtectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.subnetMappingInput">SubnetMappingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.deleteProtection">DeleteProtection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallPolicyArn">FirewallPolicyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallPolicyChangeProtection">FirewallPolicyChangeProtection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.subnetChangeProtection">SubnetChangeProtection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.encryptionConfiguration"></a>

```csharp
public NetworkfirewallFirewallEncryptionConfigurationOutputReference EncryptionConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference">NetworkfirewallFirewallEncryptionConfigurationOutputReference</a>

---

##### `FirewallStatus`<sup>Required</sup> <a name="FirewallStatus" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallStatus"></a>

```csharp
public NetworkfirewallFirewallFirewallStatusList FirewallStatus { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusList">NetworkfirewallFirewallFirewallStatusList</a>

---

##### `SubnetMapping`<sup>Required</sup> <a name="SubnetMapping" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.subnetMapping"></a>

```csharp
public NetworkfirewallFirewallSubnetMappingList SubnetMapping { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList">NetworkfirewallFirewallSubnetMappingList</a>

---

##### `UpdateToken`<sup>Required</sup> <a name="UpdateToken" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.updateToken"></a>

```csharp
public string UpdateToken { get; }
```

- *Type:* string

---

##### `DeleteProtectionInput`<sup>Optional</sup> <a name="DeleteProtectionInput" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.deleteProtectionInput"></a>

```csharp
public object DeleteProtectionInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EncryptionConfigurationInput`<sup>Optional</sup> <a name="EncryptionConfigurationInput" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.encryptionConfigurationInput"></a>

```csharp
public NetworkfirewallFirewallEncryptionConfiguration EncryptionConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfiguration">NetworkfirewallFirewallEncryptionConfiguration</a>

---

##### `FirewallPolicyArnInput`<sup>Optional</sup> <a name="FirewallPolicyArnInput" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallPolicyArnInput"></a>

```csharp
public string FirewallPolicyArnInput { get; }
```

- *Type:* string

---

##### `FirewallPolicyChangeProtectionInput`<sup>Optional</sup> <a name="FirewallPolicyChangeProtectionInput" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallPolicyChangeProtectionInput"></a>

```csharp
public object FirewallPolicyChangeProtectionInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SubnetChangeProtectionInput`<sup>Optional</sup> <a name="SubnetChangeProtectionInput" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.subnetChangeProtectionInput"></a>

```csharp
public object SubnetChangeProtectionInput { get; }
```

- *Type:* object

---

##### `SubnetMappingInput`<sup>Optional</sup> <a name="SubnetMappingInput" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.subnetMappingInput"></a>

```csharp
public object SubnetMappingInput { get; }
```

- *Type:* object

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `DeleteProtection`<sup>Required</sup> <a name="DeleteProtection" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.deleteProtection"></a>

```csharp
public object DeleteProtection { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FirewallPolicyArn`<sup>Required</sup> <a name="FirewallPolicyArn" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallPolicyArn"></a>

```csharp
public string FirewallPolicyArn { get; }
```

- *Type:* string

---

##### `FirewallPolicyChangeProtection`<sup>Required</sup> <a name="FirewallPolicyChangeProtection" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallPolicyChangeProtection"></a>

```csharp
public object FirewallPolicyChangeProtection { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SubnetChangeProtection`<sup>Required</sup> <a name="SubnetChangeProtection" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.subnetChangeProtection"></a>

```csharp
public object SubnetChangeProtection { get; }
```

- *Type:* object

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewall.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkfirewallFirewallConfig <a name="NetworkfirewallFirewallConfig" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkfirewallFirewallConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string FirewallPolicyArn,
    string Name,
    object SubnetMapping,
    string VpcId,
    object DeleteProtection = null,
    string Description = null,
    NetworkfirewallFirewallEncryptionConfiguration EncryptionConfiguration = null,
    object FirewallPolicyChangeProtection = null,
    string Id = null,
    object SubnetChangeProtection = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.firewallPolicyArn">FirewallPolicyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#firewall_policy_arn NetworkfirewallFirewall#firewall_policy_arn}. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#name NetworkfirewallFirewall#name}. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.subnetMapping">SubnetMapping</a></code> | <code>object</code> | subnet_mapping block. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#vpc_id NetworkfirewallFirewall#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.deleteProtection">DeleteProtection</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#delete_protection NetworkfirewallFirewall#delete_protection}. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#description NetworkfirewallFirewall#description}. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfiguration">NetworkfirewallFirewallEncryptionConfiguration</a></code> | encryption_configuration block. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.firewallPolicyChangeProtection">FirewallPolicyChangeProtection</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#firewall_policy_change_protection NetworkfirewallFirewall#firewall_policy_change_protection}. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#id NetworkfirewallFirewall#id}. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.subnetChangeProtection">SubnetChangeProtection</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#subnet_change_protection NetworkfirewallFirewall#subnet_change_protection}. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#tags NetworkfirewallFirewall#tags}. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#tags_all NetworkfirewallFirewall#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `FirewallPolicyArn`<sup>Required</sup> <a name="FirewallPolicyArn" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.firewallPolicyArn"></a>

```csharp
public string FirewallPolicyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#firewall_policy_arn NetworkfirewallFirewall#firewall_policy_arn}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#name NetworkfirewallFirewall#name}.

---

##### `SubnetMapping`<sup>Required</sup> <a name="SubnetMapping" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.subnetMapping"></a>

```csharp
public object SubnetMapping { get; set; }
```

- *Type:* object

subnet_mapping block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#subnet_mapping NetworkfirewallFirewall#subnet_mapping}

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#vpc_id NetworkfirewallFirewall#vpc_id}.

---

##### `DeleteProtection`<sup>Optional</sup> <a name="DeleteProtection" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.deleteProtection"></a>

```csharp
public object DeleteProtection { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#delete_protection NetworkfirewallFirewall#delete_protection}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#description NetworkfirewallFirewall#description}.

---

##### `EncryptionConfiguration`<sup>Optional</sup> <a name="EncryptionConfiguration" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.encryptionConfiguration"></a>

```csharp
public NetworkfirewallFirewallEncryptionConfiguration EncryptionConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfiguration">NetworkfirewallFirewallEncryptionConfiguration</a>

encryption_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#encryption_configuration NetworkfirewallFirewall#encryption_configuration}

---

##### `FirewallPolicyChangeProtection`<sup>Optional</sup> <a name="FirewallPolicyChangeProtection" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.firewallPolicyChangeProtection"></a>

```csharp
public object FirewallPolicyChangeProtection { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#firewall_policy_change_protection NetworkfirewallFirewall#firewall_policy_change_protection}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#id NetworkfirewallFirewall#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SubnetChangeProtection`<sup>Optional</sup> <a name="SubnetChangeProtection" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.subnetChangeProtection"></a>

```csharp
public object SubnetChangeProtection { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#subnet_change_protection NetworkfirewallFirewall#subnet_change_protection}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#tags NetworkfirewallFirewall#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#tags_all NetworkfirewallFirewall#tags_all}.

---

### NetworkfirewallFirewallEncryptionConfiguration <a name="NetworkfirewallFirewallEncryptionConfiguration" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkfirewallFirewallEncryptionConfiguration {
    string Type,
    string KeyId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfiguration.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#type NetworkfirewallFirewall#type}. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfiguration.property.keyId">KeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#key_id NetworkfirewallFirewall#key_id}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfiguration.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#type NetworkfirewallFirewall#type}.

---

##### `KeyId`<sup>Optional</sup> <a name="KeyId" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfiguration.property.keyId"></a>

```csharp
public string KeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#key_id NetworkfirewallFirewall#key_id}.

---

### NetworkfirewallFirewallFirewallStatus <a name="NetworkfirewallFirewallFirewallStatus" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkfirewallFirewallFirewallStatus {

};
```


### NetworkfirewallFirewallFirewallStatusSyncStates <a name="NetworkfirewallFirewallFirewallStatusSyncStates" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStates.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkfirewallFirewallFirewallStatusSyncStates {

};
```


### NetworkfirewallFirewallFirewallStatusSyncStatesAttachment <a name="NetworkfirewallFirewallFirewallStatusSyncStatesAttachment" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkfirewallFirewallFirewallStatusSyncStatesAttachment {

};
```


### NetworkfirewallFirewallSubnetMapping <a name="NetworkfirewallFirewallSubnetMapping" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMapping.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkfirewallFirewallSubnetMapping {
    string SubnetId,
    string IpAddressType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMapping.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#subnet_id NetworkfirewallFirewall#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMapping.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#ip_address_type NetworkfirewallFirewall#ip_address_type}. |

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMapping.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#subnet_id NetworkfirewallFirewall#subnet_id}.

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMapping.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall#ip_address_type NetworkfirewallFirewall#ip_address_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkfirewallFirewallEncryptionConfigurationOutputReference <a name="NetworkfirewallFirewallEncryptionConfigurationOutputReference" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkfirewallFirewallEncryptionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.resetKeyId">ResetKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeyId` <a name="ResetKeyId" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.resetKeyId"></a>

```csharp
private void ResetKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.property.keyIdInput">KeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfiguration">NetworkfirewallFirewallEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.property.keyIdInput"></a>

```csharp
public string KeyIdInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfigurationOutputReference.property.internalValue"></a>

```csharp
public NetworkfirewallFirewallEncryptionConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallEncryptionConfiguration">NetworkfirewallFirewallEncryptionConfiguration</a>

---


### NetworkfirewallFirewallFirewallStatusList <a name="NetworkfirewallFirewallFirewallStatusList" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkfirewallFirewallFirewallStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusList.get"></a>

```csharp
private NetworkfirewallFirewallFirewallStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### NetworkfirewallFirewallFirewallStatusOutputReference <a name="NetworkfirewallFirewallFirewallStatusOutputReference" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkfirewallFirewallFirewallStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.property.syncStates">SyncStates</a></code> | <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesList">NetworkfirewallFirewallFirewallStatusSyncStatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatus">NetworkfirewallFirewallFirewallStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SyncStates`<sup>Required</sup> <a name="SyncStates" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.property.syncStates"></a>

```csharp
public NetworkfirewallFirewallFirewallStatusSyncStatesList SyncStates { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesList">NetworkfirewallFirewallFirewallStatusSyncStatesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusOutputReference.property.internalValue"></a>

```csharp
public NetworkfirewallFirewallFirewallStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatus">NetworkfirewallFirewallFirewallStatus</a>

---


### NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList <a name="NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.get"></a>

```csharp
private NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference <a name="NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.property.endpointId">EndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachment">NetworkfirewallFirewallFirewallStatusSyncStatesAttachment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.property.endpointId"></a>

```csharp
public string EndpointId { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference.property.internalValue"></a>

```csharp
public NetworkfirewallFirewallFirewallStatusSyncStatesAttachment InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachment">NetworkfirewallFirewallFirewallStatusSyncStatesAttachment</a>

---


### NetworkfirewallFirewallFirewallStatusSyncStatesList <a name="NetworkfirewallFirewallFirewallStatusSyncStatesList" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkfirewallFirewallFirewallStatusSyncStatesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesList.get"></a>

```csharp
private NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference <a name="NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.property.attachment">Attachment</a></code> | <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList">NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStates">NetworkfirewallFirewallFirewallStatusSyncStates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Attachment`<sup>Required</sup> <a name="Attachment" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.property.attachment"></a>

```csharp
public NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList Attachment { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList">NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList</a>

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference.property.internalValue"></a>

```csharp
public NetworkfirewallFirewallFirewallStatusSyncStates InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallFirewallStatusSyncStates">NetworkfirewallFirewallFirewallStatusSyncStates</a>

---


### NetworkfirewallFirewallSubnetMappingList <a name="NetworkfirewallFirewallSubnetMappingList" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkfirewallFirewallSubnetMappingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList.get"></a>

```csharp
private NetworkfirewallFirewallSubnetMappingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NetworkfirewallFirewallSubnetMappingOutputReference <a name="NetworkfirewallFirewallSubnetMappingOutputReference" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkfirewallFirewallSubnetMappingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.resetIpAddressType"></a>

```csharp
private void ResetIpAddressType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.property.ipAddressTypeInput"></a>

```csharp
public string IpAddressTypeInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



