# `vpcIpamOrganizationAdminAccount` Submodule <a name="`vpcIpamOrganizationAdminAccount` Submodule" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcIpamOrganizationAdminAccount <a name="VpcIpamOrganizationAdminAccount" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_organization_admin_account aws_vpc_ipam_organization_admin_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcIpamOrganizationAdminAccount(Construct Scope, string Id, VpcIpamOrganizationAdminAccountConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccountConfig">VpcIpamOrganizationAdminAccountConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccountConfig">VpcIpamOrganizationAdminAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpcIpamOrganizationAdminAccount.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpcIpamOrganizationAdminAccount.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpcIpamOrganizationAdminAccount.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.property.servicePrincipal">ServicePrincipal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.property.delegatedAdminAccountIdInput">DelegatedAdminAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.property.delegatedAdminAccountId">DelegatedAdminAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ServicePrincipal`<sup>Required</sup> <a name="ServicePrincipal" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.property.servicePrincipal"></a>

```csharp
public string ServicePrincipal { get; }
```

- *Type:* string

---

##### `DelegatedAdminAccountIdInput`<sup>Optional</sup> <a name="DelegatedAdminAccountIdInput" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.property.delegatedAdminAccountIdInput"></a>

```csharp
public string DelegatedAdminAccountIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `DelegatedAdminAccountId`<sup>Required</sup> <a name="DelegatedAdminAccountId" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.property.delegatedAdminAccountId"></a>

```csharp
public string DelegatedAdminAccountId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccount.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcIpamOrganizationAdminAccountConfig <a name="VpcIpamOrganizationAdminAccountConfig" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccountConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcIpamOrganizationAdminAccountConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DelegatedAdminAccountId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccountConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccountConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccountConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccountConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccountConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccountConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccountConfig.property.delegatedAdminAccountId">DelegatedAdminAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_organization_admin_account#delegated_admin_account_id VpcIpamOrganizationAdminAccount#delegated_admin_account_id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccountConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_organization_admin_account#id VpcIpamOrganizationAdminAccount#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccountConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccountConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccountConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccountConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccountConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccountConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccountConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DelegatedAdminAccountId`<sup>Required</sup> <a name="DelegatedAdminAccountId" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccountConfig.property.delegatedAdminAccountId"></a>

```csharp
public string DelegatedAdminAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_organization_admin_account#delegated_admin_account_id VpcIpamOrganizationAdminAccount#delegated_admin_account_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.vpcIpamOrganizationAdminAccount.VpcIpamOrganizationAdminAccountConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_organization_admin_account#id VpcIpamOrganizationAdminAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



