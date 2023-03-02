# `dataAwsEc2ClientVpnEndpoint` Submodule <a name="`dataAwsEc2ClientVpnEndpoint` Submodule" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2ClientVpnEndpoint <a name="DataAwsEc2ClientVpnEndpoint" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint aws_ec2_client_vpn_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2ClientVpnEndpoint(Construct Scope, string Id, DataAwsEc2ClientVpnEndpointConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig">DataAwsEc2ClientVpnEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig">DataAwsEc2ClientVpnEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.resetClientVpnEndpointId">ResetClientVpnEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.putFilter.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAwsEc2ClientVpnEndpointTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeouts">DataAwsEc2ClientVpnEndpointTimeouts</a>

---

##### `ResetClientVpnEndpointId` <a name="ResetClientVpnEndpointId" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.resetClientVpnEndpointId"></a>

```csharp
private void ResetClientVpnEndpointId()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsEc2ClientVpnEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsEc2ClientVpnEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsEc2ClientVpnEndpoint.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.authenticationOptions">AuthenticationOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList">DataAwsEc2ClientVpnEndpointAuthenticationOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.clientCidrBlock">ClientCidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.clientConnectOptions">ClientConnectOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList">DataAwsEc2ClientVpnEndpointClientConnectOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.clientLoginBannerOptions">ClientLoginBannerOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList">DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.connectionLogOptions">ConnectionLogOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList">DataAwsEc2ClientVpnEndpointConnectionLogOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.dnsName">DnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.dnsServers">DnsServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList">DataAwsEc2ClientVpnEndpointFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.selfServicePortal">SelfServicePortal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.serverCertificateArn">ServerCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.sessionTimeoutHours">SessionTimeoutHours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.splitTunnel">SplitTunnel</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference">DataAwsEc2ClientVpnEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.transportProtocol">TransportProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.vpnPort">VpnPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.clientVpnEndpointIdInput">ClientVpnEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.clientVpnEndpointId">ClientVpnEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AuthenticationOptions`<sup>Required</sup> <a name="AuthenticationOptions" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.authenticationOptions"></a>

```csharp
public DataAwsEc2ClientVpnEndpointAuthenticationOptionsList AuthenticationOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList">DataAwsEc2ClientVpnEndpointAuthenticationOptionsList</a>

---

##### `ClientCidrBlock`<sup>Required</sup> <a name="ClientCidrBlock" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.clientCidrBlock"></a>

```csharp
public string ClientCidrBlock { get; }
```

- *Type:* string

---

##### `ClientConnectOptions`<sup>Required</sup> <a name="ClientConnectOptions" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.clientConnectOptions"></a>

```csharp
public DataAwsEc2ClientVpnEndpointClientConnectOptionsList ClientConnectOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList">DataAwsEc2ClientVpnEndpointClientConnectOptionsList</a>

---

##### `ClientLoginBannerOptions`<sup>Required</sup> <a name="ClientLoginBannerOptions" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.clientLoginBannerOptions"></a>

```csharp
public DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList ClientLoginBannerOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList">DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList</a>

---

##### `ConnectionLogOptions`<sup>Required</sup> <a name="ConnectionLogOptions" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.connectionLogOptions"></a>

```csharp
public DataAwsEc2ClientVpnEndpointConnectionLogOptionsList ConnectionLogOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList">DataAwsEc2ClientVpnEndpointConnectionLogOptionsList</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.dnsName"></a>

```csharp
public string DnsName { get; }
```

- *Type:* string

---

##### `DnsServers`<sup>Required</sup> <a name="DnsServers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.dnsServers"></a>

```csharp
public string[] DnsServers { get; }
```

- *Type:* string[]

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.filter"></a>

```csharp
public DataAwsEc2ClientVpnEndpointFilterList Filter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList">DataAwsEc2ClientVpnEndpointFilterList</a>

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SelfServicePortal`<sup>Required</sup> <a name="SelfServicePortal" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.selfServicePortal"></a>

```csharp
public string SelfServicePortal { get; }
```

- *Type:* string

---

##### `ServerCertificateArn`<sup>Required</sup> <a name="ServerCertificateArn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.serverCertificateArn"></a>

```csharp
public string ServerCertificateArn { get; }
```

- *Type:* string

---

##### `SessionTimeoutHours`<sup>Required</sup> <a name="SessionTimeoutHours" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.sessionTimeoutHours"></a>

```csharp
public double SessionTimeoutHours { get; }
```

- *Type:* double

---

##### `SplitTunnel`<sup>Required</sup> <a name="SplitTunnel" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.splitTunnel"></a>

```csharp
public IResolvable SplitTunnel { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.timeouts"></a>

```csharp
public DataAwsEc2ClientVpnEndpointTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference">DataAwsEc2ClientVpnEndpointTimeoutsOutputReference</a>

---

##### `TransportProtocol`<sup>Required</sup> <a name="TransportProtocol" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.transportProtocol"></a>

```csharp
public string TransportProtocol { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `VpnPort`<sup>Required</sup> <a name="VpnPort" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.vpnPort"></a>

```csharp
public double VpnPort { get; }
```

- *Type:* double

---

##### `ClientVpnEndpointIdInput`<sup>Optional</sup> <a name="ClientVpnEndpointIdInput" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.clientVpnEndpointIdInput"></a>

```csharp
public string ClientVpnEndpointIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ClientVpnEndpointId`<sup>Required</sup> <a name="ClientVpnEndpointId" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.clientVpnEndpointId"></a>

```csharp
public string ClientVpnEndpointId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2ClientVpnEndpointAuthenticationOptions <a name="DataAwsEc2ClientVpnEndpointAuthenticationOptions" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2ClientVpnEndpointAuthenticationOptions {

};
```


### DataAwsEc2ClientVpnEndpointClientConnectOptions <a name="DataAwsEc2ClientVpnEndpointClientConnectOptions" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2ClientVpnEndpointClientConnectOptions {

};
```


### DataAwsEc2ClientVpnEndpointClientLoginBannerOptions <a name="DataAwsEc2ClientVpnEndpointClientLoginBannerOptions" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2ClientVpnEndpointClientLoginBannerOptions {

};
```


### DataAwsEc2ClientVpnEndpointConfig <a name="DataAwsEc2ClientVpnEndpointConfig" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2ClientVpnEndpointConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClientVpnEndpointId = null,
    object Filter = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    DataAwsEc2ClientVpnEndpointTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.clientVpnEndpointId">ClientVpnEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#client_vpn_endpoint_id DataAwsEc2ClientVpnEndpoint#client_vpn_endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#id DataAwsEc2ClientVpnEndpoint#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#tags DataAwsEc2ClientVpnEndpoint#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeouts">DataAwsEc2ClientVpnEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClientVpnEndpointId`<sup>Optional</sup> <a name="ClientVpnEndpointId" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.clientVpnEndpointId"></a>

```csharp
public string ClientVpnEndpointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#client_vpn_endpoint_id DataAwsEc2ClientVpnEndpoint#client_vpn_endpoint_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#filter DataAwsEc2ClientVpnEndpoint#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#id DataAwsEc2ClientVpnEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#tags DataAwsEc2ClientVpnEndpoint#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConfig.property.timeouts"></a>

```csharp
public DataAwsEc2ClientVpnEndpointTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeouts">DataAwsEc2ClientVpnEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#timeouts DataAwsEc2ClientVpnEndpoint#timeouts}

---

### DataAwsEc2ClientVpnEndpointConnectionLogOptions <a name="DataAwsEc2ClientVpnEndpointConnectionLogOptions" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2ClientVpnEndpointConnectionLogOptions {

};
```


### DataAwsEc2ClientVpnEndpointFilter <a name="DataAwsEc2ClientVpnEndpointFilter" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2ClientVpnEndpointFilter {
    string Name,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#name DataAwsEc2ClientVpnEndpoint#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#values DataAwsEc2ClientVpnEndpoint#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#name DataAwsEc2ClientVpnEndpoint#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#values DataAwsEc2ClientVpnEndpoint#values}.

---

### DataAwsEc2ClientVpnEndpointTimeouts <a name="DataAwsEc2ClientVpnEndpointTimeouts" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2ClientVpnEndpointTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#read DataAwsEc2ClientVpnEndpoint#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_client_vpn_endpoint#read DataAwsEc2ClientVpnEndpoint#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2ClientVpnEndpointAuthenticationOptionsList <a name="DataAwsEc2ClientVpnEndpointAuthenticationOptionsList" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2ClientVpnEndpointAuthenticationOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.get"></a>

```csharp
private DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference <a name="DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.activeDirectoryId">ActiveDirectoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.rootCertificateChainArn">RootCertificateChainArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.samlProviderArn">SamlProviderArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.selfServiceSamlProviderArn">SelfServiceSamlProviderArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptions">DataAwsEc2ClientVpnEndpointAuthenticationOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActiveDirectoryId`<sup>Required</sup> <a name="ActiveDirectoryId" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.activeDirectoryId"></a>

```csharp
public string ActiveDirectoryId { get; }
```

- *Type:* string

---

##### `RootCertificateChainArn`<sup>Required</sup> <a name="RootCertificateChainArn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.rootCertificateChainArn"></a>

```csharp
public string RootCertificateChainArn { get; }
```

- *Type:* string

---

##### `SamlProviderArn`<sup>Required</sup> <a name="SamlProviderArn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.samlProviderArn"></a>

```csharp
public string SamlProviderArn { get; }
```

- *Type:* string

---

##### `SelfServiceSamlProviderArn`<sup>Required</sup> <a name="SelfServiceSamlProviderArn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.selfServiceSamlProviderArn"></a>

```csharp
public string SelfServiceSamlProviderArn { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsEc2ClientVpnEndpointAuthenticationOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointAuthenticationOptions">DataAwsEc2ClientVpnEndpointAuthenticationOptions</a>

---


### DataAwsEc2ClientVpnEndpointClientConnectOptionsList <a name="DataAwsEc2ClientVpnEndpointClientConnectOptionsList" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2ClientVpnEndpointClientConnectOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.get"></a>

```csharp
private DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference <a name="DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.property.lambdaFunctionArn">LambdaFunctionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptions">DataAwsEc2ClientVpnEndpointClientConnectOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LambdaFunctionArn`<sup>Required</sup> <a name="LambdaFunctionArn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.property.lambdaFunctionArn"></a>

```csharp
public string LambdaFunctionArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsEc2ClientVpnEndpointClientConnectOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientConnectOptions">DataAwsEc2ClientVpnEndpointClientConnectOptions</a>

---


### DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList <a name="DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.get"></a>

```csharp
private DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference <a name="DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.bannerText">BannerText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptions">DataAwsEc2ClientVpnEndpointClientLoginBannerOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BannerText`<sup>Required</sup> <a name="BannerText" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.bannerText"></a>

```csharp
public string BannerText { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsEc2ClientVpnEndpointClientLoginBannerOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointClientLoginBannerOptions">DataAwsEc2ClientVpnEndpointClientLoginBannerOptions</a>

---


### DataAwsEc2ClientVpnEndpointConnectionLogOptionsList <a name="DataAwsEc2ClientVpnEndpointConnectionLogOptionsList" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2ClientVpnEndpointConnectionLogOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.get"></a>

```csharp
private DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference <a name="DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogGroup">CloudwatchLogGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogStream">CloudwatchLogStream</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptions">DataAwsEc2ClientVpnEndpointConnectionLogOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchLogGroup`<sup>Required</sup> <a name="CloudwatchLogGroup" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogGroup"></a>

```csharp
public string CloudwatchLogGroup { get; }
```

- *Type:* string

---

##### `CloudwatchLogStream`<sup>Required</sup> <a name="CloudwatchLogStream" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.cloudwatchLogStream"></a>

```csharp
public string CloudwatchLogStream { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsEc2ClientVpnEndpointConnectionLogOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointConnectionLogOptions">DataAwsEc2ClientVpnEndpointConnectionLogOptions</a>

---


### DataAwsEc2ClientVpnEndpointFilterList <a name="DataAwsEc2ClientVpnEndpointFilterList" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2ClientVpnEndpointFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.get"></a>

```csharp
private DataAwsEc2ClientVpnEndpointFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsEc2ClientVpnEndpointFilterOutputReference <a name="DataAwsEc2ClientVpnEndpointFilterOutputReference" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2ClientVpnEndpointFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAwsEc2ClientVpnEndpointTimeoutsOutputReference <a name="DataAwsEc2ClientVpnEndpointTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsEc2ClientVpnEndpointTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsEc2ClientVpnEndpoint.DataAwsEc2ClientVpnEndpointTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



