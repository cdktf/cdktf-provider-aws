# `dxTransitVirtualInterface` Submodule <a name="`dxTransitVirtualInterface` Submodule" id="@cdktf/provider-aws.dxTransitVirtualInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DxTransitVirtualInterface <a name="DxTransitVirtualInterface" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface aws_dx_transit_virtual_interface}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DxTransitVirtualInterface(Construct Scope, string Id, DxTransitVirtualInterfaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig">DxTransitVirtualInterfaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig">DxTransitVirtualInterfaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetAmazonAddress">ResetAmazonAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetBgpAuthKey">ResetBgpAuthKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetCustomerAddress">ResetCustomerAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetMtu">ResetMtu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetSitelinkEnabled">ResetSitelinkEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.putTimeouts"></a>

```csharp
private void PutTimeouts(DxTransitVirtualInterfaceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts">DxTransitVirtualInterfaceTimeouts</a>

---

##### `ResetAmazonAddress` <a name="ResetAmazonAddress" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetAmazonAddress"></a>

```csharp
private void ResetAmazonAddress()
```

##### `ResetBgpAuthKey` <a name="ResetBgpAuthKey" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetBgpAuthKey"></a>

```csharp
private void ResetBgpAuthKey()
```

##### `ResetCustomerAddress` <a name="ResetCustomerAddress" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetCustomerAddress"></a>

```csharp
private void ResetCustomerAddress()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMtu` <a name="ResetMtu" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetMtu"></a>

```csharp
private void ResetMtu()
```

##### `ResetSitelinkEnabled` <a name="ResetSitelinkEnabled" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetSitelinkEnabled"></a>

```csharp
private void ResetSitelinkEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DxTransitVirtualInterface.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DxTransitVirtualInterface.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DxTransitVirtualInterface.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.amazonSideAsn">AmazonSideAsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.awsDevice">AwsDevice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.jumboFrameCapable">JumboFrameCapable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference">DxTransitVirtualInterfaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.addressFamilyInput">AddressFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.amazonAddressInput">AmazonAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.bgpAsnInput">BgpAsnInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.bgpAuthKeyInput">BgpAuthKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.connectionIdInput">ConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.customerAddressInput">CustomerAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.dxGatewayIdInput">DxGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.mtuInput">MtuInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.sitelinkEnabledInput">SitelinkEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.vlanInput">VlanInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.addressFamily">AddressFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.amazonAddress">AmazonAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.bgpAsn">BgpAsn</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.bgpAuthKey">BgpAuthKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.connectionId">ConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.customerAddress">CustomerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.dxGatewayId">DxGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.mtu">Mtu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.sitelinkEnabled">SitelinkEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.vlan">Vlan</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AmazonSideAsn`<sup>Required</sup> <a name="AmazonSideAsn" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.amazonSideAsn"></a>

```csharp
public string AmazonSideAsn { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AwsDevice`<sup>Required</sup> <a name="AwsDevice" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.awsDevice"></a>

```csharp
public string AwsDevice { get; }
```

- *Type:* string

---

##### `JumboFrameCapable`<sup>Required</sup> <a name="JumboFrameCapable" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.jumboFrameCapable"></a>

```csharp
public IResolvable JumboFrameCapable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.timeouts"></a>

```csharp
public DxTransitVirtualInterfaceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference">DxTransitVirtualInterfaceTimeoutsOutputReference</a>

---

##### `AddressFamilyInput`<sup>Optional</sup> <a name="AddressFamilyInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.addressFamilyInput"></a>

```csharp
public string AddressFamilyInput { get; }
```

- *Type:* string

---

##### `AmazonAddressInput`<sup>Optional</sup> <a name="AmazonAddressInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.amazonAddressInput"></a>

```csharp
public string AmazonAddressInput { get; }
```

- *Type:* string

---

##### `BgpAsnInput`<sup>Optional</sup> <a name="BgpAsnInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.bgpAsnInput"></a>

```csharp
public double BgpAsnInput { get; }
```

- *Type:* double

---

##### `BgpAuthKeyInput`<sup>Optional</sup> <a name="BgpAuthKeyInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.bgpAuthKeyInput"></a>

```csharp
public string BgpAuthKeyInput { get; }
```

- *Type:* string

---

##### `ConnectionIdInput`<sup>Optional</sup> <a name="ConnectionIdInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.connectionIdInput"></a>

```csharp
public string ConnectionIdInput { get; }
```

- *Type:* string

---

##### `CustomerAddressInput`<sup>Optional</sup> <a name="CustomerAddressInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.customerAddressInput"></a>

```csharp
public string CustomerAddressInput { get; }
```

- *Type:* string

---

##### `DxGatewayIdInput`<sup>Optional</sup> <a name="DxGatewayIdInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.dxGatewayIdInput"></a>

```csharp
public string DxGatewayIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MtuInput`<sup>Optional</sup> <a name="MtuInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.mtuInput"></a>

```csharp
public double MtuInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SitelinkEnabledInput`<sup>Optional</sup> <a name="SitelinkEnabledInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.sitelinkEnabledInput"></a>

```csharp
public object SitelinkEnabledInput { get; }
```

- *Type:* object

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VlanInput`<sup>Optional</sup> <a name="VlanInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.vlanInput"></a>

```csharp
public double VlanInput { get; }
```

- *Type:* double

---

##### `AddressFamily`<sup>Required</sup> <a name="AddressFamily" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.addressFamily"></a>

```csharp
public string AddressFamily { get; }
```

- *Type:* string

---

##### `AmazonAddress`<sup>Required</sup> <a name="AmazonAddress" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.amazonAddress"></a>

```csharp
public string AmazonAddress { get; }
```

- *Type:* string

---

##### `BgpAsn`<sup>Required</sup> <a name="BgpAsn" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.bgpAsn"></a>

```csharp
public double BgpAsn { get; }
```

- *Type:* double

---

##### `BgpAuthKey`<sup>Required</sup> <a name="BgpAuthKey" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.bgpAuthKey"></a>

```csharp
public string BgpAuthKey { get; }
```

- *Type:* string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.connectionId"></a>

```csharp
public string ConnectionId { get; }
```

- *Type:* string

---

##### `CustomerAddress`<sup>Required</sup> <a name="CustomerAddress" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.customerAddress"></a>

```csharp
public string CustomerAddress { get; }
```

- *Type:* string

---

##### `DxGatewayId`<sup>Required</sup> <a name="DxGatewayId" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.dxGatewayId"></a>

```csharp
public string DxGatewayId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.mtu"></a>

```csharp
public double Mtu { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SitelinkEnabled`<sup>Required</sup> <a name="SitelinkEnabled" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.sitelinkEnabled"></a>

```csharp
public object SitelinkEnabled { get; }
```

- *Type:* object

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Vlan`<sup>Required</sup> <a name="Vlan" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.vlan"></a>

```csharp
public double Vlan { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterface.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DxTransitVirtualInterfaceConfig <a name="DxTransitVirtualInterfaceConfig" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DxTransitVirtualInterfaceConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AddressFamily,
    double BgpAsn,
    string ConnectionId,
    string DxGatewayId,
    string Name,
    double Vlan,
    string AmazonAddress = null,
    string BgpAuthKey = null,
    string CustomerAddress = null,
    string Id = null,
    double Mtu = null,
    object SitelinkEnabled = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    DxTransitVirtualInterfaceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.addressFamily">AddressFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#address_family DxTransitVirtualInterface#address_family}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.bgpAsn">BgpAsn</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#bgp_asn DxTransitVirtualInterface#bgp_asn}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.connectionId">ConnectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#connection_id DxTransitVirtualInterface#connection_id}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.dxGatewayId">DxGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#dx_gateway_id DxTransitVirtualInterface#dx_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#name DxTransitVirtualInterface#name}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.vlan">Vlan</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#vlan DxTransitVirtualInterface#vlan}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.amazonAddress">AmazonAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#amazon_address DxTransitVirtualInterface#amazon_address}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.bgpAuthKey">BgpAuthKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#bgp_auth_key DxTransitVirtualInterface#bgp_auth_key}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.customerAddress">CustomerAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#customer_address DxTransitVirtualInterface#customer_address}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#id DxTransitVirtualInterface#id}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.mtu">Mtu</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#mtu DxTransitVirtualInterface#mtu}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.sitelinkEnabled">SitelinkEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#sitelink_enabled DxTransitVirtualInterface#sitelink_enabled}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#tags DxTransitVirtualInterface#tags}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#tags_all DxTransitVirtualInterface#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts">DxTransitVirtualInterfaceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AddressFamily`<sup>Required</sup> <a name="AddressFamily" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.addressFamily"></a>

```csharp
public string AddressFamily { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#address_family DxTransitVirtualInterface#address_family}.

---

##### `BgpAsn`<sup>Required</sup> <a name="BgpAsn" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.bgpAsn"></a>

```csharp
public double BgpAsn { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#bgp_asn DxTransitVirtualInterface#bgp_asn}.

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.connectionId"></a>

```csharp
public string ConnectionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#connection_id DxTransitVirtualInterface#connection_id}.

---

##### `DxGatewayId`<sup>Required</sup> <a name="DxGatewayId" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.dxGatewayId"></a>

```csharp
public string DxGatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#dx_gateway_id DxTransitVirtualInterface#dx_gateway_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#name DxTransitVirtualInterface#name}.

---

##### `Vlan`<sup>Required</sup> <a name="Vlan" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.vlan"></a>

```csharp
public double Vlan { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#vlan DxTransitVirtualInterface#vlan}.

---

##### `AmazonAddress`<sup>Optional</sup> <a name="AmazonAddress" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.amazonAddress"></a>

```csharp
public string AmazonAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#amazon_address DxTransitVirtualInterface#amazon_address}.

---

##### `BgpAuthKey`<sup>Optional</sup> <a name="BgpAuthKey" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.bgpAuthKey"></a>

```csharp
public string BgpAuthKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#bgp_auth_key DxTransitVirtualInterface#bgp_auth_key}.

---

##### `CustomerAddress`<sup>Optional</sup> <a name="CustomerAddress" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.customerAddress"></a>

```csharp
public string CustomerAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#customer_address DxTransitVirtualInterface#customer_address}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#id DxTransitVirtualInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Mtu`<sup>Optional</sup> <a name="Mtu" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.mtu"></a>

```csharp
public double Mtu { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#mtu DxTransitVirtualInterface#mtu}.

---

##### `SitelinkEnabled`<sup>Optional</sup> <a name="SitelinkEnabled" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.sitelinkEnabled"></a>

```csharp
public object SitelinkEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#sitelink_enabled DxTransitVirtualInterface#sitelink_enabled}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#tags DxTransitVirtualInterface#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#tags_all DxTransitVirtualInterface#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceConfig.property.timeouts"></a>

```csharp
public DxTransitVirtualInterfaceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts">DxTransitVirtualInterfaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#timeouts DxTransitVirtualInterface#timeouts}

---

### DxTransitVirtualInterfaceTimeouts <a name="DxTransitVirtualInterfaceTimeouts" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DxTransitVirtualInterfaceTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#create DxTransitVirtualInterface#create}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#delete DxTransitVirtualInterface#delete}. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#update DxTransitVirtualInterface#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#create DxTransitVirtualInterface#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#delete DxTransitVirtualInterface#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_transit_virtual_interface#update DxTransitVirtualInterface#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DxTransitVirtualInterfaceTimeoutsOutputReference <a name="DxTransitVirtualInterfaceTimeoutsOutputReference" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DxTransitVirtualInterfaceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dxTransitVirtualInterface.DxTransitVirtualInterfaceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



