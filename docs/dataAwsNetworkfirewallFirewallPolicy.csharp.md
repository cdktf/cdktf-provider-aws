# `dataAwsNetworkfirewallFirewallPolicy` Submodule <a name="`dataAwsNetworkfirewallFirewallPolicy` Submodule" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsNetworkfirewallFirewallPolicy <a name="DataAwsNetworkfirewallFirewallPolicy" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/networkfirewall_firewall_policy aws_networkfirewall_firewall_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkfirewallFirewallPolicy(Construct Scope, string Id, DataAwsNetworkfirewallFirewallPolicyConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig">DataAwsNetworkfirewallFirewallPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig">DataAwsNetworkfirewallFirewallPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetArn` <a name="ResetArn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.resetArn"></a>

```csharp
private void ResetArn()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsNetworkfirewallFirewallPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsNetworkfirewallFirewallPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsNetworkfirewallFirewallPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsNetworkfirewallFirewallPolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsNetworkfirewallFirewallPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAwsNetworkfirewallFirewallPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsNetworkfirewallFirewallPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsNetworkfirewallFirewallPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/networkfirewall_firewall_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsNetworkfirewallFirewallPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.firewallPolicy">FirewallPolicy</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.updateToken">UpdateToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FirewallPolicy`<sup>Required</sup> <a name="FirewallPolicy" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.firewallPolicy"></a>

```csharp
public DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList FirewallPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList</a>

---

##### `UpdateToken`<sup>Required</sup> <a name="UpdateToken" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.updateToken"></a>

```csharp
public string UpdateToken { get; }
```

- *Type:* string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsNetworkfirewallFirewallPolicyConfig <a name="DataAwsNetworkfirewallFirewallPolicyConfig" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkfirewallFirewallPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Arn = null,
    string Id = null,
    string Name = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig.property.arn">Arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/networkfirewall_firewall_policy#arn DataAwsNetworkfirewallFirewallPolicy#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/networkfirewall_firewall_policy#id DataAwsNetworkfirewallFirewallPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/networkfirewall_firewall_policy#name DataAwsNetworkfirewallFirewallPolicy#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/networkfirewall_firewall_policy#tags DataAwsNetworkfirewallFirewallPolicy#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/networkfirewall_firewall_policy#arn DataAwsNetworkfirewallFirewallPolicy#arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/networkfirewall_firewall_policy#id DataAwsNetworkfirewallFirewallPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/networkfirewall_firewall_policy#name DataAwsNetworkfirewallFirewallPolicy#name}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/networkfirewall_firewall_policy#region DataAwsNetworkfirewallFirewallPolicy#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/networkfirewall_firewall_policy#tags DataAwsNetworkfirewallFirewallPolicy#tags}.

---

### DataAwsNetworkfirewallFirewallPolicyFirewallPolicy <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicy" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkfirewallFirewallPolicyFirewallPolicy {

};
```


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables {

};
```


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables {

};
```


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSet <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSet {

};
```


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions {

};
```


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference {

};
```


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverride <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverride" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverride.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverride {

};
```


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction {

};
```


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition {

};
```


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction {

};
```


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension {

};
```


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList.get"></a>

```csharp
private DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.policyVariables">PolicyVariables</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesList">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulDefaultActions">StatefulDefaultActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulEngineOptions">StatefulEngineOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulRuleGroupReference">StatefulRuleGroupReference</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessCustomAction">StatelessCustomAction</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessDefaultActions">StatelessDefaultActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessFragmentDefaultActions">StatelessFragmentDefaultActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessRuleGroupReference">StatelessRuleGroupReference</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.tlsInspectionConfigurationArn">TlsInspectionConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicy">DataAwsNetworkfirewallFirewallPolicyFirewallPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PolicyVariables`<sup>Required</sup> <a name="PolicyVariables" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.policyVariables"></a>

```csharp
public DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesList PolicyVariables { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesList">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesList</a>

---

##### `StatefulDefaultActions`<sup>Required</sup> <a name="StatefulDefaultActions" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulDefaultActions"></a>

```csharp
public string[] StatefulDefaultActions { get; }
```

- *Type:* string[]

---

##### `StatefulEngineOptions`<sup>Required</sup> <a name="StatefulEngineOptions" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulEngineOptions"></a>

```csharp
public DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList StatefulEngineOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList</a>

---

##### `StatefulRuleGroupReference`<sup>Required</sup> <a name="StatefulRuleGroupReference" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulRuleGroupReference"></a>

```csharp
public DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList StatefulRuleGroupReference { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList</a>

---

##### `StatelessCustomAction`<sup>Required</sup> <a name="StatelessCustomAction" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessCustomAction"></a>

```csharp
public DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList StatelessCustomAction { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList</a>

---

##### `StatelessDefaultActions`<sup>Required</sup> <a name="StatelessDefaultActions" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessDefaultActions"></a>

```csharp
public string[] StatelessDefaultActions { get; }
```

- *Type:* string[]

---

##### `StatelessFragmentDefaultActions`<sup>Required</sup> <a name="StatelessFragmentDefaultActions" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessFragmentDefaultActions"></a>

```csharp
public string[] StatelessFragmentDefaultActions { get; }
```

- *Type:* string[]

---

##### `StatelessRuleGroupReference`<sup>Required</sup> <a name="StatelessRuleGroupReference" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessRuleGroupReference"></a>

```csharp
public DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList StatelessRuleGroupReference { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList</a>

---

##### `TlsInspectionConfigurationArn`<sup>Required</sup> <a name="TlsInspectionConfigurationArn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.tlsInspectionConfigurationArn"></a>

```csharp
public string TlsInspectionConfigurationArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.internalValue"></a>

```csharp
public DataAwsNetworkfirewallFirewallPolicyFirewallPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicy">DataAwsNetworkfirewallFirewallPolicyFirewallPolicy</a>

---


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesList <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesList" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesList.get"></a>

```csharp
private DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.property.ruleVariables">RuleVariables</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesList">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RuleVariables`<sup>Required</sup> <a name="RuleVariables" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.property.ruleVariables"></a>

```csharp
public DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesList RuleVariables { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesList">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.property.internalValue"></a>

```csharp
public DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables</a>

---


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetList <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetList" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetList.get"></a>

```csharp
private DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.property.definition">Definition</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSet">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.property.definition"></a>

```csharp
public string[] Definition { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference.property.internalValue"></a>

```csharp
public DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSet InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSet">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSet</a>

---


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesList <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesList" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesList.get"></a>

```csharp
private DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.property.ipSet">IpSet</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetList">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpSet`<sup>Required</sup> <a name="IpSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.property.ipSet"></a>

```csharp
public DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetList IpSet { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetList">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetList</a>

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.property.internalValue"></a>

```csharp
public DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables</a>

---


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList.get"></a>

```csharp
private DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.ruleOrder">RuleOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.streamExceptionPolicy">StreamExceptionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RuleOrder`<sup>Required</sup> <a name="RuleOrder" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.ruleOrder"></a>

```csharp
public string RuleOrder { get; }
```

- *Type:* string

---

##### `StreamExceptionPolicy`<sup>Required</sup> <a name="StreamExceptionPolicy" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.streamExceptionPolicy"></a>

```csharp
public string StreamExceptionPolicy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions</a>

---


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList.get"></a>

```csharp
private DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.property.deepThreatInspection">DeepThreatInspection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.property.override">Override</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideList">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeepThreatInspection`<sup>Required</sup> <a name="DeepThreatInspection" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.property.deepThreatInspection"></a>

```csharp
public string DeepThreatInspection { get; }
```

- *Type:* string

---

##### `Override`<sup>Required</sup> <a name="Override" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.property.override"></a>

```csharp
public DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideList Override { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideList">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideList</a>

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference.property.internalValue"></a>

```csharp
public DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference</a>

---


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideList <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideList" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideList.get"></a>

```csharp
private DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverride">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverride</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference.property.internalValue"></a>

```csharp
public DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverride InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverride">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverride</a>

---


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList.get"></a>

```csharp
private DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.property.publishMetricAction">PublishMetricAction</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PublishMetricAction`<sup>Required</sup> <a name="PublishMetricAction" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.property.publishMetricAction"></a>

```csharp
public DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList PublishMetricAction { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference.property.internalValue"></a>

```csharp
public DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition</a>

---


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList.get"></a>

```csharp
private DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference.property.internalValue"></a>

```csharp
public DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension</a>

---


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList.get"></a>

```csharp
private DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.property.dimension">Dimension</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.property.dimension"></a>

```csharp
public DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList Dimension { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference.property.internalValue"></a>

```csharp
public DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction</a>

---


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList.get"></a>

```csharp
private DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.property.actionDefinition">ActionDefinition</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.property.actionName">ActionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionDefinition`<sup>Required</sup> <a name="ActionDefinition" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.property.actionDefinition"></a>

```csharp
public DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList ActionDefinition { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList</a>

---

##### `ActionName`<sup>Required</sup> <a name="ActionName" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.property.actionName"></a>

```csharp
public string ActionName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference.property.internalValue"></a>

```csharp
public DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction</a>

---


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList.get"></a>

```csharp
private DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference <a name="DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference.property.internalValue"></a>

```csharp
public DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkfirewallFirewallPolicy.DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference">DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference</a>

---



