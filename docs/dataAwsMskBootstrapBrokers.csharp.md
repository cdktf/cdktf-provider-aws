# `dataAwsMskBootstrapBrokers` Submodule <a name="`dataAwsMskBootstrapBrokers` Submodule" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsMskBootstrapBrokers <a name="DataAwsMskBootstrapBrokers" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/data-sources/msk_bootstrap_brokers aws_msk_bootstrap_brokers}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsMskBootstrapBrokers(Construct Scope, string Id, DataAwsMskBootstrapBrokersConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig">DataAwsMskBootstrapBrokersConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig">DataAwsMskBootstrapBrokersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsMskBootstrapBrokers resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsMskBootstrapBrokers.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsMskBootstrapBrokers.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsMskBootstrapBrokers.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsMskBootstrapBrokers.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAwsMskBootstrapBrokers resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsMskBootstrapBrokers to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsMskBootstrapBrokers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/data-sources/msk_bootstrap_brokers#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsMskBootstrapBrokers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokers">BootstrapBrokers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersPublicSaslIam">BootstrapBrokersPublicSaslIam</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersPublicSaslScram">BootstrapBrokersPublicSaslScram</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersPublicTls">BootstrapBrokersPublicTls</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersSaslIam">BootstrapBrokersSaslIam</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersSaslScram">BootstrapBrokersSaslScram</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersTls">BootstrapBrokersTls</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersVpcConnectivitySaslIam">BootstrapBrokersVpcConnectivitySaslIam</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersVpcConnectivitySaslScram">BootstrapBrokersVpcConnectivitySaslScram</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersVpcConnectivityTls">BootstrapBrokersVpcConnectivityTls</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.clusterArnInput">ClusterArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.clusterArn">ClusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `BootstrapBrokers`<sup>Required</sup> <a name="BootstrapBrokers" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokers"></a>

```csharp
public string BootstrapBrokers { get; }
```

- *Type:* string

---

##### `BootstrapBrokersPublicSaslIam`<sup>Required</sup> <a name="BootstrapBrokersPublicSaslIam" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersPublicSaslIam"></a>

```csharp
public string BootstrapBrokersPublicSaslIam { get; }
```

- *Type:* string

---

##### `BootstrapBrokersPublicSaslScram`<sup>Required</sup> <a name="BootstrapBrokersPublicSaslScram" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersPublicSaslScram"></a>

```csharp
public string BootstrapBrokersPublicSaslScram { get; }
```

- *Type:* string

---

##### `BootstrapBrokersPublicTls`<sup>Required</sup> <a name="BootstrapBrokersPublicTls" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersPublicTls"></a>

```csharp
public string BootstrapBrokersPublicTls { get; }
```

- *Type:* string

---

##### `BootstrapBrokersSaslIam`<sup>Required</sup> <a name="BootstrapBrokersSaslIam" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersSaslIam"></a>

```csharp
public string BootstrapBrokersSaslIam { get; }
```

- *Type:* string

---

##### `BootstrapBrokersSaslScram`<sup>Required</sup> <a name="BootstrapBrokersSaslScram" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersSaslScram"></a>

```csharp
public string BootstrapBrokersSaslScram { get; }
```

- *Type:* string

---

##### `BootstrapBrokersTls`<sup>Required</sup> <a name="BootstrapBrokersTls" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersTls"></a>

```csharp
public string BootstrapBrokersTls { get; }
```

- *Type:* string

---

##### `BootstrapBrokersVpcConnectivitySaslIam`<sup>Required</sup> <a name="BootstrapBrokersVpcConnectivitySaslIam" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersVpcConnectivitySaslIam"></a>

```csharp
public string BootstrapBrokersVpcConnectivitySaslIam { get; }
```

- *Type:* string

---

##### `BootstrapBrokersVpcConnectivitySaslScram`<sup>Required</sup> <a name="BootstrapBrokersVpcConnectivitySaslScram" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersVpcConnectivitySaslScram"></a>

```csharp
public string BootstrapBrokersVpcConnectivitySaslScram { get; }
```

- *Type:* string

---

##### `BootstrapBrokersVpcConnectivityTls`<sup>Required</sup> <a name="BootstrapBrokersVpcConnectivityTls" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersVpcConnectivityTls"></a>

```csharp
public string BootstrapBrokersVpcConnectivityTls { get; }
```

- *Type:* string

---

##### `ClusterArnInput`<sup>Optional</sup> <a name="ClusterArnInput" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.clusterArnInput"></a>

```csharp
public string ClusterArnInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ClusterArn`<sup>Required</sup> <a name="ClusterArn" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.clusterArn"></a>

```csharp
public string ClusterArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsMskBootstrapBrokersConfig <a name="DataAwsMskBootstrapBrokersConfig" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsMskBootstrapBrokersConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterArn,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.clusterArn">ClusterArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/data-sources/msk_bootstrap_brokers#cluster_arn DataAwsMskBootstrapBrokers#cluster_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/data-sources/msk_bootstrap_brokers#id DataAwsMskBootstrapBrokers#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterArn`<sup>Required</sup> <a name="ClusterArn" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.clusterArn"></a>

```csharp
public string ClusterArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/data-sources/msk_bootstrap_brokers#cluster_arn DataAwsMskBootstrapBrokers#cluster_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/data-sources/msk_bootstrap_brokers#id DataAwsMskBootstrapBrokers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



