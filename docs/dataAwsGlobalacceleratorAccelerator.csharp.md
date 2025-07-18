# `dataAwsGlobalacceleratorAccelerator` Submodule <a name="`dataAwsGlobalacceleratorAccelerator` Submodule" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsGlobalacceleratorAccelerator <a name="DataAwsGlobalacceleratorAccelerator" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/globalaccelerator_accelerator aws_globalaccelerator_accelerator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsGlobalacceleratorAccelerator(Construct Scope, string Id, DataAwsGlobalacceleratorAcceleratorConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig">DataAwsGlobalacceleratorAcceleratorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig">DataAwsGlobalacceleratorAcceleratorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetArn` <a name="ResetArn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.resetArn"></a>

```csharp
private void ResetArn()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.resetName"></a>

```csharp
private void ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsGlobalacceleratorAccelerator resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsGlobalacceleratorAccelerator.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsGlobalacceleratorAccelerator.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsGlobalacceleratorAccelerator.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsGlobalacceleratorAccelerator.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAwsGlobalacceleratorAccelerator resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsGlobalacceleratorAccelerator to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsGlobalacceleratorAccelerator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/globalaccelerator_accelerator#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsGlobalacceleratorAccelerator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.attributes">Attributes</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList">DataAwsGlobalacceleratorAcceleratorAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.dnsName">DnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.dualStackDnsName">DualStackDnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.hostedZoneId">HostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.ipSets">IpSets</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList">DataAwsGlobalacceleratorAcceleratorIpSetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.tags">Tags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.attributes"></a>

```csharp
public DataAwsGlobalacceleratorAcceleratorAttributesList Attributes { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList">DataAwsGlobalacceleratorAcceleratorAttributesList</a>

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.dnsName"></a>

```csharp
public string DnsName { get; }
```

- *Type:* string

---

##### `DualStackDnsName`<sup>Required</sup> <a name="DualStackDnsName" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.dualStackDnsName"></a>

```csharp
public string DualStackDnsName { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.hostedZoneId"></a>

```csharp
public string HostedZoneId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; }
```

- *Type:* string

---

##### `IpSets`<sup>Required</sup> <a name="IpSets" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.ipSets"></a>

```csharp
public DataAwsGlobalacceleratorAcceleratorIpSetsList IpSets { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList">DataAwsGlobalacceleratorAcceleratorIpSetsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsGlobalacceleratorAcceleratorAttributes <a name="DataAwsGlobalacceleratorAcceleratorAttributes" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsGlobalacceleratorAcceleratorAttributes {

};
```


### DataAwsGlobalacceleratorAcceleratorConfig <a name="DataAwsGlobalacceleratorAcceleratorConfig" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsGlobalacceleratorAcceleratorConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Arn = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.arn">Arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/globalaccelerator_accelerator#arn DataAwsGlobalacceleratorAccelerator#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/globalaccelerator_accelerator#name DataAwsGlobalacceleratorAccelerator#name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/globalaccelerator_accelerator#arn DataAwsGlobalacceleratorAccelerator#arn}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/globalaccelerator_accelerator#name DataAwsGlobalacceleratorAccelerator#name}.

---

### DataAwsGlobalacceleratorAcceleratorIpSets <a name="DataAwsGlobalacceleratorAcceleratorIpSets" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsGlobalacceleratorAcceleratorIpSets {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsGlobalacceleratorAcceleratorAttributesList <a name="DataAwsGlobalacceleratorAcceleratorAttributesList" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsGlobalacceleratorAcceleratorAttributesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.get"></a>

```csharp
private DataAwsGlobalacceleratorAcceleratorAttributesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsGlobalacceleratorAcceleratorAttributesOutputReference <a name="DataAwsGlobalacceleratorAcceleratorAttributesOutputReference" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsGlobalacceleratorAcceleratorAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsEnabled">FlowLogsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsS3Bucket">FlowLogsS3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsS3Prefix">FlowLogsS3Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributes">DataAwsGlobalacceleratorAcceleratorAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FlowLogsEnabled`<sup>Required</sup> <a name="FlowLogsEnabled" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsEnabled"></a>

```csharp
public IResolvable FlowLogsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `FlowLogsS3Bucket`<sup>Required</sup> <a name="FlowLogsS3Bucket" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsS3Bucket"></a>

```csharp
public string FlowLogsS3Bucket { get; }
```

- *Type:* string

---

##### `FlowLogsS3Prefix`<sup>Required</sup> <a name="FlowLogsS3Prefix" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsS3Prefix"></a>

```csharp
public string FlowLogsS3Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.property.internalValue"></a>

```csharp
public DataAwsGlobalacceleratorAcceleratorAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributes">DataAwsGlobalacceleratorAcceleratorAttributes</a>

---


### DataAwsGlobalacceleratorAcceleratorIpSetsList <a name="DataAwsGlobalacceleratorAcceleratorIpSetsList" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsGlobalacceleratorAcceleratorIpSetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.get"></a>

```csharp
private DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference <a name="DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.property.ipAddresses">IpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.property.ipFamily">IpFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSets">DataAwsGlobalacceleratorAcceleratorIpSets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.property.ipAddresses"></a>

```csharp
public string[] IpAddresses { get; }
```

- *Type:* string[]

---

##### `IpFamily`<sup>Required</sup> <a name="IpFamily" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.property.ipFamily"></a>

```csharp
public string IpFamily { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.property.internalValue"></a>

```csharp
public DataAwsGlobalacceleratorAcceleratorIpSets InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSets">DataAwsGlobalacceleratorAcceleratorIpSets</a>

---



