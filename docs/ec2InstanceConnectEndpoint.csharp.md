# `aws_ec2_instance_connect_endpoint`

Refer to the Terraform Registory for docs: [`aws_ec2_instance_connect_endpoint`](https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/ec2_instance_connect_endpoint).

# `ec2InstanceConnectEndpoint` Submodule <a name="`ec2InstanceConnectEndpoint` Submodule" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2InstanceConnectEndpoint <a name="Ec2InstanceConnectEndpoint" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/ec2_instance_connect_endpoint aws_ec2_instance_connect_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Ec2InstanceConnectEndpoint(Construct Scope, string Id, Ec2InstanceConnectEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig">Ec2InstanceConnectEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig">Ec2InstanceConnectEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.resetPreserveClientIp">ResetPreserveClientIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.putTimeouts"></a>

```csharp
private void PutTimeouts(Ec2InstanceConnectEndpointTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeouts">Ec2InstanceConnectEndpointTimeouts</a>

---

##### `ResetPreserveClientIp` <a name="ResetPreserveClientIp" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.resetPreserveClientIp"></a>

```csharp
private void ResetPreserveClientIp()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Ec2InstanceConnectEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Ec2InstanceConnectEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Ec2InstanceConnectEndpoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.dnsName">DnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.fipsDnsName">FipsDnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.networkInterfaceIds">NetworkInterfaceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.tagsAll">TagsAll</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference">Ec2InstanceConnectEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.preserveClientIpInput">PreserveClientIpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.preserveClientIp">PreserveClientIp</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.dnsName"></a>

```csharp
public string DnsName { get; }
```

- *Type:* string

---

##### `FipsDnsName`<sup>Required</sup> <a name="FipsDnsName" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.fipsDnsName"></a>

```csharp
public string FipsDnsName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NetworkInterfaceIds`<sup>Required</sup> <a name="NetworkInterfaceIds" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.networkInterfaceIds"></a>

```csharp
public string[] NetworkInterfaceIds { get; }
```

- *Type:* string[]

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.timeouts"></a>

```csharp
public Ec2InstanceConnectEndpointTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference">Ec2InstanceConnectEndpointTimeoutsOutputReference</a>

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `PreserveClientIpInput`<sup>Optional</sup> <a name="PreserveClientIpInput" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.preserveClientIpInput"></a>

```csharp
public object PreserveClientIpInput { get; }
```

- *Type:* object

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `PreserveClientIp`<sup>Required</sup> <a name="PreserveClientIp" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.preserveClientIp"></a>

```csharp
public object PreserveClientIp { get; }
```

- *Type:* object

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2InstanceConnectEndpointConfig <a name="Ec2InstanceConnectEndpointConfig" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Ec2InstanceConnectEndpointConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string SubnetId,
    object PreserveClientIp = null,
    string[] SecurityGroupIds = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    Ec2InstanceConnectEndpointTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/ec2_instance_connect_endpoint#subnet_id Ec2InstanceConnectEndpoint#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.preserveClientIp">PreserveClientIp</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/ec2_instance_connect_endpoint#preserve_client_ip Ec2InstanceConnectEndpoint#preserve_client_ip}. |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/ec2_instance_connect_endpoint#security_group_ids Ec2InstanceConnectEndpoint#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/ec2_instance_connect_endpoint#tags Ec2InstanceConnectEndpoint#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeouts">Ec2InstanceConnectEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/ec2_instance_connect_endpoint#subnet_id Ec2InstanceConnectEndpoint#subnet_id}.

---

##### `PreserveClientIp`<sup>Optional</sup> <a name="PreserveClientIp" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.preserveClientIp"></a>

```csharp
public object PreserveClientIp { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/ec2_instance_connect_endpoint#preserve_client_ip Ec2InstanceConnectEndpoint#preserve_client_ip}.

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/ec2_instance_connect_endpoint#security_group_ids Ec2InstanceConnectEndpoint#security_group_ids}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/ec2_instance_connect_endpoint#tags Ec2InstanceConnectEndpoint#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.timeouts"></a>

```csharp
public Ec2InstanceConnectEndpointTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeouts">Ec2InstanceConnectEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/ec2_instance_connect_endpoint#timeouts Ec2InstanceConnectEndpoint#timeouts}

---

### Ec2InstanceConnectEndpointTimeouts <a name="Ec2InstanceConnectEndpointTimeouts" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Ec2InstanceConnectEndpointTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/ec2_instance_connect_endpoint#create Ec2InstanceConnectEndpoint#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/ec2_instance_connect_endpoint#delete Ec2InstanceConnectEndpoint#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2InstanceConnectEndpointTimeoutsOutputReference <a name="Ec2InstanceConnectEndpointTimeoutsOutputReference" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Ec2InstanceConnectEndpointTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



