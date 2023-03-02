# `globalacceleratorAccelerator` Submodule <a name="`globalacceleratorAccelerator` Submodule" id="@cdktf/provider-aws.globalacceleratorAccelerator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlobalacceleratorAccelerator <a name="GlobalacceleratorAccelerator" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator aws_globalaccelerator_accelerator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlobalacceleratorAccelerator(Construct Scope, string Id, GlobalacceleratorAcceleratorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig">GlobalacceleratorAcceleratorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig">GlobalacceleratorAcceleratorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.putAttributes">PutAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetIpAddresses">ResetIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAttributes` <a name="PutAttributes" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.putAttributes"></a>

```csharp
private void PutAttributes(GlobalacceleratorAcceleratorAttributes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.putAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributes">GlobalacceleratorAcceleratorAttributes</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.putTimeouts"></a>

```csharp
private void PutTimeouts(GlobalacceleratorAcceleratorTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeouts">GlobalacceleratorAcceleratorTimeouts</a>

---

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpAddresses` <a name="ResetIpAddresses" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetIpAddresses"></a>

```csharp
private void ResetIpAddresses()
```

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetIpAddressType"></a>

```csharp
private void ResetIpAddressType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlobalacceleratorAccelerator.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlobalacceleratorAccelerator.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlobalacceleratorAccelerator.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.attributes">Attributes</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference">GlobalacceleratorAcceleratorAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.dnsName">DnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.hostedZoneId">HostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipSets">IpSets</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList">GlobalacceleratorAcceleratorIpSetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference">GlobalacceleratorAcceleratorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.attributesInput">AttributesInput</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributes">GlobalacceleratorAcceleratorAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipAddressesInput">IpAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipAddresses">IpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.attributes"></a>

```csharp
public GlobalacceleratorAcceleratorAttributesOutputReference Attributes { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference">GlobalacceleratorAcceleratorAttributesOutputReference</a>

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.dnsName"></a>

```csharp
public string DnsName { get; }
```

- *Type:* string

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.hostedZoneId"></a>

```csharp
public string HostedZoneId { get; }
```

- *Type:* string

---

##### `IpSets`<sup>Required</sup> <a name="IpSets" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipSets"></a>

```csharp
public GlobalacceleratorAcceleratorIpSetsList IpSets { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList">GlobalacceleratorAcceleratorIpSetsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.timeouts"></a>

```csharp
public GlobalacceleratorAcceleratorTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference">GlobalacceleratorAcceleratorTimeoutsOutputReference</a>

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.attributesInput"></a>

```csharp
public GlobalacceleratorAcceleratorAttributes AttributesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributes">GlobalacceleratorAcceleratorAttributes</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpAddressesInput`<sup>Optional</sup> <a name="IpAddressesInput" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipAddressesInput"></a>

```csharp
public string[] IpAddressesInput { get; }
```

- *Type:* string[]

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipAddressTypeInput"></a>

```csharp
public string IpAddressTypeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipAddresses"></a>

```csharp
public string[] IpAddresses { get; }
```

- *Type:* string[]

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlobalacceleratorAcceleratorAttributes <a name="GlobalacceleratorAcceleratorAttributes" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlobalacceleratorAcceleratorAttributes {
    object FlowLogsEnabled = null,
    string FlowLogsS3Bucket = null,
    string FlowLogsS3Prefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributes.property.flowLogsEnabled">FlowLogsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#flow_logs_enabled GlobalacceleratorAccelerator#flow_logs_enabled}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributes.property.flowLogsS3Bucket">FlowLogsS3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#flow_logs_s3_bucket GlobalacceleratorAccelerator#flow_logs_s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributes.property.flowLogsS3Prefix">FlowLogsS3Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#flow_logs_s3_prefix GlobalacceleratorAccelerator#flow_logs_s3_prefix}. |

---

##### `FlowLogsEnabled`<sup>Optional</sup> <a name="FlowLogsEnabled" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributes.property.flowLogsEnabled"></a>

```csharp
public object FlowLogsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#flow_logs_enabled GlobalacceleratorAccelerator#flow_logs_enabled}.

---

##### `FlowLogsS3Bucket`<sup>Optional</sup> <a name="FlowLogsS3Bucket" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributes.property.flowLogsS3Bucket"></a>

```csharp
public string FlowLogsS3Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#flow_logs_s3_bucket GlobalacceleratorAccelerator#flow_logs_s3_bucket}.

---

##### `FlowLogsS3Prefix`<sup>Optional</sup> <a name="FlowLogsS3Prefix" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributes.property.flowLogsS3Prefix"></a>

```csharp
public string FlowLogsS3Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#flow_logs_s3_prefix GlobalacceleratorAccelerator#flow_logs_s3_prefix}.

---

### GlobalacceleratorAcceleratorConfig <a name="GlobalacceleratorAcceleratorConfig" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlobalacceleratorAcceleratorConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    GlobalacceleratorAcceleratorAttributes Attributes = null,
    object Enabled = null,
    string Id = null,
    string[] IpAddresses = null,
    string IpAddressType = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    GlobalacceleratorAcceleratorTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#name GlobalacceleratorAccelerator#name}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.attributes">Attributes</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributes">GlobalacceleratorAcceleratorAttributes</a></code> | attributes block. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#enabled GlobalacceleratorAccelerator#enabled}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#id GlobalacceleratorAccelerator#id}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.ipAddresses">IpAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#ip_addresses GlobalacceleratorAccelerator#ip_addresses}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#ip_address_type GlobalacceleratorAccelerator#ip_address_type}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#tags GlobalacceleratorAccelerator#tags}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#tags_all GlobalacceleratorAccelerator#tags_all}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeouts">GlobalacceleratorAcceleratorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#name GlobalacceleratorAccelerator#name}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.attributes"></a>

```csharp
public GlobalacceleratorAcceleratorAttributes Attributes { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributes">GlobalacceleratorAcceleratorAttributes</a>

attributes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#attributes GlobalacceleratorAccelerator#attributes}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#enabled GlobalacceleratorAccelerator#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#id GlobalacceleratorAccelerator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpAddresses`<sup>Optional</sup> <a name="IpAddresses" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.ipAddresses"></a>

```csharp
public string[] IpAddresses { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#ip_addresses GlobalacceleratorAccelerator#ip_addresses}.

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#ip_address_type GlobalacceleratorAccelerator#ip_address_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#tags GlobalacceleratorAccelerator#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#tags_all GlobalacceleratorAccelerator#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.timeouts"></a>

```csharp
public GlobalacceleratorAcceleratorTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeouts">GlobalacceleratorAcceleratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#timeouts GlobalacceleratorAccelerator#timeouts}

---

### GlobalacceleratorAcceleratorIpSets <a name="GlobalacceleratorAcceleratorIpSets" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlobalacceleratorAcceleratorIpSets {

};
```


### GlobalacceleratorAcceleratorTimeouts <a name="GlobalacceleratorAcceleratorTimeouts" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlobalacceleratorAcceleratorTimeouts {
    string Create = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#create GlobalacceleratorAccelerator#create}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#update GlobalacceleratorAccelerator#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#create GlobalacceleratorAccelerator#create}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator#update GlobalacceleratorAccelerator#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlobalacceleratorAcceleratorAttributesOutputReference <a name="GlobalacceleratorAcceleratorAttributesOutputReference" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlobalacceleratorAcceleratorAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.resetFlowLogsEnabled">ResetFlowLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.resetFlowLogsS3Bucket">ResetFlowLogsS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.resetFlowLogsS3Prefix">ResetFlowLogsS3Prefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFlowLogsEnabled` <a name="ResetFlowLogsEnabled" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.resetFlowLogsEnabled"></a>

```csharp
private void ResetFlowLogsEnabled()
```

##### `ResetFlowLogsS3Bucket` <a name="ResetFlowLogsS3Bucket" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.resetFlowLogsS3Bucket"></a>

```csharp
private void ResetFlowLogsS3Bucket()
```

##### `ResetFlowLogsS3Prefix` <a name="ResetFlowLogsS3Prefix" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.resetFlowLogsS3Prefix"></a>

```csharp
private void ResetFlowLogsS3Prefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsEnabledInput">FlowLogsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsS3BucketInput">FlowLogsS3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsS3PrefixInput">FlowLogsS3PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsEnabled">FlowLogsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsS3Bucket">FlowLogsS3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsS3Prefix">FlowLogsS3Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributes">GlobalacceleratorAcceleratorAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FlowLogsEnabledInput`<sup>Optional</sup> <a name="FlowLogsEnabledInput" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsEnabledInput"></a>

```csharp
public object FlowLogsEnabledInput { get; }
```

- *Type:* object

---

##### `FlowLogsS3BucketInput`<sup>Optional</sup> <a name="FlowLogsS3BucketInput" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsS3BucketInput"></a>

```csharp
public string FlowLogsS3BucketInput { get; }
```

- *Type:* string

---

##### `FlowLogsS3PrefixInput`<sup>Optional</sup> <a name="FlowLogsS3PrefixInput" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsS3PrefixInput"></a>

```csharp
public string FlowLogsS3PrefixInput { get; }
```

- *Type:* string

---

##### `FlowLogsEnabled`<sup>Required</sup> <a name="FlowLogsEnabled" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsEnabled"></a>

```csharp
public object FlowLogsEnabled { get; }
```

- *Type:* object

---

##### `FlowLogsS3Bucket`<sup>Required</sup> <a name="FlowLogsS3Bucket" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsS3Bucket"></a>

```csharp
public string FlowLogsS3Bucket { get; }
```

- *Type:* string

---

##### `FlowLogsS3Prefix`<sup>Required</sup> <a name="FlowLogsS3Prefix" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsS3Prefix"></a>

```csharp
public string FlowLogsS3Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributesOutputReference.property.internalValue"></a>

```csharp
public GlobalacceleratorAcceleratorAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorAttributes">GlobalacceleratorAcceleratorAttributes</a>

---


### GlobalacceleratorAcceleratorIpSetsList <a name="GlobalacceleratorAcceleratorIpSetsList" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlobalacceleratorAcceleratorIpSetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.get"></a>

```csharp
private GlobalacceleratorAcceleratorIpSetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GlobalacceleratorAcceleratorIpSetsOutputReference <a name="GlobalacceleratorAcceleratorIpSetsOutputReference" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlobalacceleratorAcceleratorIpSetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.property.ipAddresses">IpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.property.ipFamily">IpFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSets">GlobalacceleratorAcceleratorIpSets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.property.ipAddresses"></a>

```csharp
public string[] IpAddresses { get; }
```

- *Type:* string[]

---

##### `IpFamily`<sup>Required</sup> <a name="IpFamily" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.property.ipFamily"></a>

```csharp
public string IpFamily { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSetsOutputReference.property.internalValue"></a>

```csharp
public GlobalacceleratorAcceleratorIpSets InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorIpSets">GlobalacceleratorAcceleratorIpSets</a>

---


### GlobalacceleratorAcceleratorTimeoutsOutputReference <a name="GlobalacceleratorAcceleratorTimeoutsOutputReference" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlobalacceleratorAcceleratorTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



