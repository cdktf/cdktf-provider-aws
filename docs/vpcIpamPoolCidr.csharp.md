# `vpcIpamPoolCidr` Submodule <a name="`vpcIpamPoolCidr` Submodule" id="@cdktf/provider-aws.vpcIpamPoolCidr"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcIpamPoolCidr <a name="VpcIpamPoolCidr" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr aws_vpc_ipam_pool_cidr}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcIpamPoolCidr(Construct Scope, string Id, VpcIpamPoolCidrConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig">VpcIpamPoolCidrConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig">VpcIpamPoolCidrConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.putCidrAuthorizationContext">PutCidrAuthorizationContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.resetCidr">ResetCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.resetCidrAuthorizationContext">ResetCidrAuthorizationContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.resetNetmaskLength">ResetNetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutCidrAuthorizationContext` <a name="PutCidrAuthorizationContext" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.putCidrAuthorizationContext"></a>

```csharp
private void PutCidrAuthorizationContext(VpcIpamPoolCidrCidrAuthorizationContext Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.putCidrAuthorizationContext.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContext">VpcIpamPoolCidrCidrAuthorizationContext</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.putTimeouts"></a>

```csharp
private void PutTimeouts(VpcIpamPoolCidrTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeouts">VpcIpamPoolCidrTimeouts</a>

---

##### `ResetCidr` <a name="ResetCidr" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.resetCidr"></a>

```csharp
private void ResetCidr()
```

##### `ResetCidrAuthorizationContext` <a name="ResetCidrAuthorizationContext" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.resetCidrAuthorizationContext"></a>

```csharp
private void ResetCidrAuthorizationContext()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNetmaskLength` <a name="ResetNetmaskLength" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.resetNetmaskLength"></a>

```csharp
private void ResetNetmaskLength()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpcIpamPoolCidr.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpcIpamPoolCidr.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpcIpamPoolCidr.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.cidrAuthorizationContext">CidrAuthorizationContext</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference">VpcIpamPoolCidrCidrAuthorizationContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.ipamPoolCidrId">IpamPoolCidrId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference">VpcIpamPoolCidrTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.cidrAuthorizationContextInput">CidrAuthorizationContextInput</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContext">VpcIpamPoolCidrCidrAuthorizationContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.cidrInput">CidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.ipamPoolIdInput">IpamPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.netmaskLengthInput">NetmaskLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.ipamPoolId">IpamPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.netmaskLength">NetmaskLength</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CidrAuthorizationContext`<sup>Required</sup> <a name="CidrAuthorizationContext" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.cidrAuthorizationContext"></a>

```csharp
public VpcIpamPoolCidrCidrAuthorizationContextOutputReference CidrAuthorizationContext { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference">VpcIpamPoolCidrCidrAuthorizationContextOutputReference</a>

---

##### `IpamPoolCidrId`<sup>Required</sup> <a name="IpamPoolCidrId" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.ipamPoolCidrId"></a>

```csharp
public string IpamPoolCidrId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.timeouts"></a>

```csharp
public VpcIpamPoolCidrTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference">VpcIpamPoolCidrTimeoutsOutputReference</a>

---

##### `CidrAuthorizationContextInput`<sup>Optional</sup> <a name="CidrAuthorizationContextInput" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.cidrAuthorizationContextInput"></a>

```csharp
public VpcIpamPoolCidrCidrAuthorizationContext CidrAuthorizationContextInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContext">VpcIpamPoolCidrCidrAuthorizationContext</a>

---

##### `CidrInput`<sup>Optional</sup> <a name="CidrInput" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.cidrInput"></a>

```csharp
public string CidrInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpamPoolIdInput`<sup>Optional</sup> <a name="IpamPoolIdInput" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.ipamPoolIdInput"></a>

```csharp
public string IpamPoolIdInput { get; }
```

- *Type:* string

---

##### `NetmaskLengthInput`<sup>Optional</sup> <a name="NetmaskLengthInput" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.netmaskLengthInput"></a>

```csharp
public double NetmaskLengthInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpamPoolId`<sup>Required</sup> <a name="IpamPoolId" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.ipamPoolId"></a>

```csharp
public string IpamPoolId { get; }
```

- *Type:* string

---

##### `NetmaskLength`<sup>Required</sup> <a name="NetmaskLength" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.netmaskLength"></a>

```csharp
public double NetmaskLength { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidr.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcIpamPoolCidrCidrAuthorizationContext <a name="VpcIpamPoolCidrCidrAuthorizationContext" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContext.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcIpamPoolCidrCidrAuthorizationContext {
    string Message = null,
    string Signature = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContext.property.message">Message</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#message VpcIpamPoolCidr#message}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContext.property.signature">Signature</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#signature VpcIpamPoolCidr#signature}. |

---

##### `Message`<sup>Optional</sup> <a name="Message" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContext.property.message"></a>

```csharp
public string Message { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#message VpcIpamPoolCidr#message}.

---

##### `Signature`<sup>Optional</sup> <a name="Signature" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContext.property.signature"></a>

```csharp
public string Signature { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#signature VpcIpamPoolCidr#signature}.

---

### VpcIpamPoolCidrConfig <a name="VpcIpamPoolCidrConfig" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcIpamPoolCidrConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string IpamPoolId,
    string Cidr = null,
    VpcIpamPoolCidrCidrAuthorizationContext CidrAuthorizationContext = null,
    string Id = null,
    double NetmaskLength = null,
    VpcIpamPoolCidrTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.ipamPoolId">IpamPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#ipam_pool_id VpcIpamPoolCidr#ipam_pool_id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.cidr">Cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#cidr VpcIpamPoolCidr#cidr}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.cidrAuthorizationContext">CidrAuthorizationContext</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContext">VpcIpamPoolCidrCidrAuthorizationContext</a></code> | cidr_authorization_context block. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#id VpcIpamPoolCidr#id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.netmaskLength">NetmaskLength</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#netmask_length VpcIpamPoolCidr#netmask_length}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeouts">VpcIpamPoolCidrTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IpamPoolId`<sup>Required</sup> <a name="IpamPoolId" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.ipamPoolId"></a>

```csharp
public string IpamPoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#ipam_pool_id VpcIpamPoolCidr#ipam_pool_id}.

---

##### `Cidr`<sup>Optional</sup> <a name="Cidr" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.cidr"></a>

```csharp
public string Cidr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#cidr VpcIpamPoolCidr#cidr}.

---

##### `CidrAuthorizationContext`<sup>Optional</sup> <a name="CidrAuthorizationContext" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.cidrAuthorizationContext"></a>

```csharp
public VpcIpamPoolCidrCidrAuthorizationContext CidrAuthorizationContext { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContext">VpcIpamPoolCidrCidrAuthorizationContext</a>

cidr_authorization_context block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#cidr_authorization_context VpcIpamPoolCidr#cidr_authorization_context}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#id VpcIpamPoolCidr#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NetmaskLength`<sup>Optional</sup> <a name="NetmaskLength" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.netmaskLength"></a>

```csharp
public double NetmaskLength { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#netmask_length VpcIpamPoolCidr#netmask_length}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrConfig.property.timeouts"></a>

```csharp
public VpcIpamPoolCidrTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeouts">VpcIpamPoolCidrTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#timeouts VpcIpamPoolCidr#timeouts}

---

### VpcIpamPoolCidrTimeouts <a name="VpcIpamPoolCidrTimeouts" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcIpamPoolCidrTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#create VpcIpamPoolCidr#create}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#delete VpcIpamPoolCidr#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#create VpcIpamPoolCidr#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr#delete VpcIpamPoolCidr#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpcIpamPoolCidrCidrAuthorizationContextOutputReference <a name="VpcIpamPoolCidrCidrAuthorizationContextOutputReference" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcIpamPoolCidrCidrAuthorizationContextOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.resetMessage">ResetMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.resetSignature">ResetSignature</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMessage` <a name="ResetMessage" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.resetMessage"></a>

```csharp
private void ResetMessage()
```

##### `ResetSignature` <a name="ResetSignature" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.resetSignature"></a>

```csharp
private void ResetSignature()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.property.messageInput">MessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.property.signatureInput">SignatureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.property.signature">Signature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContext">VpcIpamPoolCidrCidrAuthorizationContext</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.property.messageInput"></a>

```csharp
public string MessageInput { get; }
```

- *Type:* string

---

##### `SignatureInput`<sup>Optional</sup> <a name="SignatureInput" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.property.signatureInput"></a>

```csharp
public string SignatureInput { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Signature`<sup>Required</sup> <a name="Signature" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.property.signature"></a>

```csharp
public string Signature { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContextOutputReference.property.internalValue"></a>

```csharp
public VpcIpamPoolCidrCidrAuthorizationContext InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrCidrAuthorizationContext">VpcIpamPoolCidrCidrAuthorizationContext</a>

---


### VpcIpamPoolCidrTimeoutsOutputReference <a name="VpcIpamPoolCidrTimeoutsOutputReference" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcIpamPoolCidrTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpcIpamPoolCidr.VpcIpamPoolCidrTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



